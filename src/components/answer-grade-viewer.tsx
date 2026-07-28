'use client';

import { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { SaveButton } from '@/components/save-button';
import { splitByExpressions, pickMemorizeSentences } from '@/lib/highlight';
import { GRADE_TIER_INFO, getGradeTailoredAnswer, type GradeTier } from '@/lib/grade-answers';
import { findExpressionMeaning } from '@/data/expressions';

type AnswerGradeViewerProps = {
  id: string;
  questionKo: string;
  fullAnswerEn: string;
  fullAnswerKo: string;
  keyExpressions: string[];
};

export function AnswerGradeViewer({
  id,
  questionKo,
  fullAnswerEn,
  fullAnswerKo,
  keyExpressions,
}: AnswerGradeViewerProps) {
  const [activeGrade, setActiveGrade] = useState<GradeTier>('IH');
  const [openExpr, setOpenExpr] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const info = GRADE_TIER_INFO[activeGrade];
  const tailored = getGradeTailoredAnswer(fullAnswerEn, fullAnswerKo, activeGrade);
  const memorizeSentences = pickMemorizeSentences(tailored.answerEn, keyExpressions);

  // Filter key expressions present in the current grade answer
  const activeExpressions = keyExpressions.filter((e) =>
    tailored.answerEn.toLowerCase().includes(e.toLowerCase()),
  );

  const copyMemorizeSentences = async () => {
    await navigator.clipboard.writeText(memorizeSentences.join('\n'));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // 핵심 표현을 굵게+클릭 가능한 뜻 툴팁으로 렌더링 (모범답안/암기 문장 공통 사용)
  const renderHighlighted = (text: string, keyPrefix: string) =>
    splitByExpressions(text, keyExpressions).map((part, i) => {
      const isExpr = keyExpressions.some((e) => e.toLowerCase() === part.toLowerCase());
      if (!isExpr) return <span key={i}>{part}</span>;

      const meaning = findExpressionMeaning(part);
      const exprKey = `${keyPrefix}-${i}-${part}`;
      const isOpen = openExpr === exprKey;

      return (
        <span key={i} className="relative">
          <button
            type="button"
            onClick={() => setOpenExpr(isOpen ? null : exprKey)}
            className="font-semibold text-primary-press underline decoration-dotted underline-offset-4"
          >
            {part}
          </button>
          {isOpen && (
            <span className="absolute left-1/2 top-full z-10 mt-1 w-max max-w-[220px] -translate-x-1/2 rounded-lg bg-brand-dark px-3 py-1.5 text-[12px] font-normal text-white shadow-lg">
              {meaning ?? '뜻 정보 없음'}
            </span>
          )}
        </span>
      );
    });

  return (
    <div className="mt-6 flex flex-col gap-6">
      {/* 탭 헤더: 등급 목표별 선택 */}
      <div className="rounded-xl border border-border bg-card p-4 sm:p-5">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-[13px] font-medium text-muted-foreground">목표 등급 선택</p>
            <p className="text-[15px] font-semibold">
              내 목표 등급에 맞는 답변 난이도를 골라보세요
            </p>
          </div>
          <span
            className={`w-fit rounded-full border px-3 py-1 text-[12px] font-medium ${info.badgeClass}`}
          >
            {info.badge} · {tailored.sentenceCount}문장
          </span>
        </div>

        <div className="mt-4 grid grid-cols-3 gap-2">
          {(['IM', 'IH', 'AL'] as GradeTier[]).map((g) => {
            const gradeItem = GRADE_TIER_INFO[g];
            const isSelected = activeGrade === g;
            return (
              <button
                key={g}
                type="button"
                onClick={() => setActiveGrade(g)}
                className={`flex flex-col items-center justify-center rounded-lg border py-2.5 px-2 text-center transition-all ${
                  isSelected
                    ? gradeItem.tabActiveClass
                    : 'border-border bg-background hover:bg-muted text-muted-foreground'
                }`}
              >
                <span className="text-[14px] font-bold">{gradeItem.label}</span>
                <span className="text-[11px] opacity-80">{gradeItem.subLabel}</span>
              </button>
            );
          })}
        </div>

        <p className="mt-3 text-[13px] text-muted-foreground leading-relaxed">
          💡 <strong className="font-medium text-foreground">{info.label}</strong>:{' '}
          {info.description}
        </p>
      </div>

      {/* 모범 답안 카드 */}
      <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-2">
            <p className="text-[13px] text-muted-foreground">모범답안</p>
            <span
              className={`rounded-md border px-2 py-0.5 text-[11px] font-medium ${info.badgeClass}`}
            >
              {activeGrade} 버전
            </span>
          </div>
          <SaveButton
            id={`${id}-${activeGrade}`}
            type="expression"
            en={tailored.answerEn}
            ko={questionKo}
          />
        </div>

        <p className="mt-3 text-[16px] leading-relaxed">
          {renderHighlighted(tailored.answerEn, 'answer')}
        </p>

        <p className="mt-4 border-t border-border pt-3 text-[14px] leading-relaxed text-muted-foreground">
          {tailored.answerKo}
        </p>
      </div>

      {/* 암기하면 좋은 문장 */}
      <div className="rounded-xl bg-cream p-6">
        <div className="flex items-center justify-between gap-3">
          <p className="text-[14px] font-medium">암기하면 좋은 추천 문장 ({activeGrade} 난이도)</p>
          {memorizeSentences.length > 0 && (
            <button
              type="button"
              onClick={copyMemorizeSentences}
              className="flex items-center gap-1.5 rounded-full border border-border bg-white px-3 py-1 text-[12px] font-medium transition-colors hover:bg-accent"
            >
              {copied ? (
                <Check className="size-3.5 text-emerald-600" />
              ) : (
                <Copy className="size-3.5" />
              )}
              {copied ? '복사 완료!' : '문장 복사'}
            </button>
          )}
        </div>
        <ul className="mt-3 flex flex-col gap-2.5">
          {memorizeSentences.length > 0 ? (
            memorizeSentences.map((s, idx) => (
              <li
                key={s}
                className="flex items-start gap-3 rounded-lg bg-white p-3 shadow-[0_1px_2px_rgba(0,0,0,0.04)]"
              >
                <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary-subdued/50 text-[11px] font-semibold text-primary-press">
                  {idx + 1}
                </span>
                <p className="text-[14px] leading-relaxed">{renderHighlighted(s, `memo-${idx}`)}</p>
              </li>
            ))
          ) : (
            <li className="text-[13px] text-muted-foreground">위 모범답안 문장을 복습해 보세요.</li>
          )}
        </ul>
      </div>

      {/* 핵심 표현 */}
      <div className="rounded-xl bg-cream p-6">
        <p className="text-[14px] font-medium">이 답변에 쓰인 핵심 표현</p>
        <ul className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
          {(activeExpressions.length > 0 ? activeExpressions : keyExpressions)
            .filter((e) => !e.includes('...'))
            .map((e) => (
              <li key={e} className="rounded-lg border border-border bg-white px-3 py-2">
                <p className="text-[13px] font-semibold text-primary-press">{e}</p>
                <p className="mt-0.5 text-[12px] text-muted-foreground">
                  {findExpressionMeaning(e) ?? '뜻 정보 없음'}
                </p>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
