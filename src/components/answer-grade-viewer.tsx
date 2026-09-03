'use client';

import { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { SaveButton } from '@/components/save-button';
import { splitByExpressions, pickMemorizeSentences, splitSentences } from '@/lib/highlight';
import { GRADE_TIER_INFO, getGradeTailoredAnswer, type GradeTier } from '@/lib/grade-answers';
import { findExpressionMeaning } from '@/data/expressions';
import type { BrainstormStep } from '@/data/topic-qa';

type AnswerGradeViewerProps = {
  id: string;
  questionKo: string;
  fullAnswerEn: string;
  fullAnswerKo: string;
  keyExpressions: string[];
  brainstorm?: BrainstormStep[];
};

// 브레인스토밍 단계(답→이유→부연→예시→마무리)별 색상 — 답변을 단계 흐름으로 구획
const BEAT_TONES = [
  { wrap: 'border-sky-400 bg-sky-50/60', chip: 'bg-sky-100 text-sky-700', dot: 'bg-sky-400' },
  {
    wrap: 'border-emerald-400 bg-emerald-50/60',
    chip: 'bg-emerald-100 text-emerald-700',
    dot: 'bg-emerald-400',
  },
  {
    wrap: 'border-amber-400 bg-amber-50/60',
    chip: 'bg-amber-100 text-amber-700',
    dot: 'bg-amber-400',
  },
  {
    wrap: 'border-violet-400 bg-violet-50/60',
    chip: 'bg-violet-100 text-violet-700',
    dot: 'bg-violet-400',
  },
  { wrap: 'border-rose-400 bg-rose-50/60', chip: 'bg-rose-100 text-rose-700', dot: 'bg-rose-400' },
];

export function AnswerGradeViewer({
  id,
  questionKo,
  fullAnswerEn,
  fullAnswerKo,
  keyExpressions,
  brainstorm,
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

  // '...' 없는 실제 매칭용 표현 + 특정 문장에 든 표현 추출
  const litExpressions = (activeExpressions.length > 0 ? activeExpressions : keyExpressions).filter(
    (e) => !e.includes('...'),
  );
  const expressionsInSentence = (s: string) =>
    litExpressions.filter((e) => s.toLowerCase().includes(e.toLowerCase()));
  const coveredExpr = new Set(
    memorizeSentences.flatMap(expressionsInSentence).map((e) => e.toLowerCase()),
  );
  const otherExpressions = litExpressions.filter((e) => !coveredExpr.has(e.toLowerCase()));

  // 모범답안 문장을 브레인스토밍 단계 수만큼 순서대로 구획 (답변은 브레인스토밍 흐름대로 쓰여 있음)
  const enSentences = splitSentences(tailored.answerEn);
  const koSentences = splitSentences(tailored.answerKo);
  const steps = brainstorm ?? [];
  const beatGroups =
    steps.length > 0
      ? steps
          .map((step, i) => {
            const from = Math.floor((i * enSentences.length) / steps.length);
            const to = Math.floor(((i + 1) * enSentences.length) / steps.length);
            const koFrom = Math.floor((i * koSentences.length) / steps.length);
            const koTo = Math.floor(((i + 1) * koSentences.length) / steps.length);
            return {
              step,
              tone: BEAT_TONES[i % BEAT_TONES.length],
              en: enSentences.slice(from, to),
              ko: koSentences.slice(koFrom, koTo),
            };
          })
          .filter((g) => g.en.length > 0)
      : null;

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
        <span key={i}>
          <button
            type="button"
            onClick={() => setOpenExpr(isOpen ? null : exprKey)}
            className="font-semibold text-primary-press underline decoration-dotted underline-offset-4"
          >
            {part}
          </button>
          {isOpen && (
            <span className="mx-1 inline-block rounded-md bg-brand-dark px-2 py-0.5 text-[12px] font-normal text-white">
              {meaning ?? '뜻 정보 없음'}
            </span>
          )}
        </span>
      );
    });

  const ExprChip = ({ e }: { e: string }) => (
    <span className="inline-flex items-baseline gap-1 rounded-md border border-border bg-white px-2 py-0.5 text-[12px]">
      <span className="font-semibold text-primary-press">{e}</span>
      <span className="text-muted-foreground">{findExpressionMeaning(e) ?? ''}</span>
    </span>
  );

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
      <div className="rounded-xl border border-border bg-card p-4 sm:p-6 shadow-sm">
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

        {beatGroups ? (
          <>
            <p className="mt-3 text-[11px] text-muted-foreground">
              답변이 브레인스토밍 흐름(답 → 이유 → 부연 → 예시 → 마무리)대로 색으로 나뉘어 있어요.
            </p>
            <div className="mt-2 flex flex-col gap-2.5">
              {beatGroups.map((g, gi) => (
                <div key={gi} className={`rounded-lg border-l-4 p-3 ${g.tone.wrap}`}>
                  <span
                    className={`inline-block rounded px-1.5 py-0.5 text-[10px] font-semibold ${g.tone.chip}`}
                  >
                    {g.step.label} · {g.step.en}
                  </span>
                  <div className="mt-1.5 space-y-1 text-[16px] leading-relaxed">
                    {g.en.map((s, i) => (
                      <p key={i}>{renderHighlighted(s, `answer-${gi}-${i}`)}</p>
                    ))}
                  </div>
                  {g.ko.length > 0 && (
                    <div className="mt-1.5 space-y-1 text-[13px] leading-relaxed text-muted-foreground">
                      {g.ko.map((s, i) => (
                        <p key={i}>{s}</p>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
            <p className="mt-3 text-[11px] text-muted-foreground">
              <span className="font-semibold text-primary-press underline decoration-dotted">
                밑줄
              </span>{' '}
              핵심 표현
            </p>
          </>
        ) : (
          <>
            <div className="mt-3 space-y-2 text-[16px] leading-relaxed">
              {enSentences.map((sentence, i) => (
                <p key={i}>{renderHighlighted(sentence, `answer-${i}`)}</p>
              ))}
            </div>
            <div className="mt-4 space-y-2 border-t border-border pt-3 text-[14px] leading-relaxed text-muted-foreground">
              {koSentences.map((sentence, i) => (
                <p key={i}>{sentence}</p>
              ))}
            </div>
          </>
        )}
      </div>

      {/* 암기하면 좋은 문장 + 문장별 핵심 표현 */}
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
              <li key={s} className="rounded-lg bg-white p-3 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary-subdued/50 text-[11px] font-semibold text-primary-press">
                    {idx + 1}
                  </span>
                  <p className="text-[14px] leading-relaxed">
                    {renderHighlighted(s, `memo-${idx}`)}
                  </p>
                </div>
                {expressionsInSentence(s).length > 0 && (
                  <div className="mt-2 flex flex-wrap gap-1.5 pl-8">
                    {expressionsInSentence(s).map((e) => (
                      <ExprChip key={e} e={e} />
                    ))}
                  </div>
                )}
              </li>
            ))
          ) : (
            <li className="text-[13px] text-muted-foreground">위 모범답안 문장을 복습해 보세요.</li>
          )}
        </ul>

        {otherExpressions.length > 0 && (
          <div className="mt-4 border-t border-border pt-3">
            <p className="text-[12px] font-medium text-muted-foreground">
              {memorizeSentences.length > 0 ? '그 외 핵심 표현' : '이 답변에 쓰인 핵심 표현'}
            </p>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {otherExpressions.map((e) => (
                <ExprChip key={e} e={e} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
