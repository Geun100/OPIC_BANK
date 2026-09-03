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

// 브레인스토밍 키워드에서 앵커 단어를 뽑을 때 걸러낼 흔한 단어
const BRAINSTORM_STOP = new Set([
  'about',
  'after',
  'again',
  'along',
  'always',
  'around',
  'because',
  'been',
  'before',
  'being',
  'could',
  'during',
  'every',
  'from',
  'have',
  'here',
  'into',
  'just',
  'like',
  'made',
  'make',
  'many',
  'means',
  'more',
  'most',
  'much',
  'only',
  'over',
  'part',
  'place',
  'really',
  'since',
  'some',
  'someone',
  'something',
  'than',
  'that',
  'them',
  'then',
  'there',
  'these',
  'they',
  'thing',
  'things',
  'this',
  'through',
  'usually',
  'very',
  'were',
  'what',
  'when',
  'which',
  'while',
  'with',
  'would',
  'your',
]);

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

  // 브레인스토밍 각 단계에서 앵커 단어 1개(가장 긴 의미 단어)를 뽑아 답변에서 색으로 표시
  const brainstormAnchors: { word: string; label: string }[] = [];
  const seenAnchor = new Set<string>();
  for (const step of brainstorm ?? []) {
    const pick = (step.en.toLowerCase().match(/[a-z]+/g) ?? [])
      .filter((w) => w.length >= 4 && !BRAINSTORM_STOP.has(w))
      .sort((a, b) => b.length - a.length)[0];
    if (pick && !seenAnchor.has(pick)) {
      seenAnchor.add(pick);
      brainstormAnchors.push({ word: pick, label: step.label });
    }
  }
  const anchorRe =
    brainstormAnchors.length > 0
      ? new RegExp(`\\b(${brainstormAnchors.map((a) => a.word).join('|')})\\b`, 'gi')
      : null;

  // 표현이 아닌 텍스트 조각 안에서 브레인스토밍 앵커 단어를 초록색으로 표시
  const renderPlain = (part: string, keyPrefix: string) => {
    if (!anchorRe) return part;
    return part.split(anchorRe).map((chunk, j) => {
      const anchor = brainstormAnchors.find((a) => a.word === chunk.toLowerCase());
      if (!anchor) return <span key={j}>{chunk}</span>;
      const k = `${keyPrefix}-bs-${j}`;
      const isOpen = openExpr === k;
      return (
        <span key={j}>
          <button
            type="button"
            onClick={() => setOpenExpr(isOpen ? null : k)}
            className="rounded bg-emerald-50 px-0.5 font-medium text-emerald-700"
          >
            {chunk}
          </button>
          {isOpen && (
            <span className="mx-1 inline-block rounded-md bg-emerald-700 px-2 py-0.5 text-[12px] font-normal text-white">
              브레인스토밍 · {anchor.label}
            </span>
          )}
        </span>
      );
    });
  };

  const copyMemorizeSentences = async () => {
    await navigator.clipboard.writeText(memorizeSentences.join('\n'));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // 핵심 표현을 굵게+클릭 가능한 뜻 툴팁으로 렌더링 (모범답안/암기 문장 공통 사용)
  const renderHighlighted = (text: string, keyPrefix: string) =>
    splitByExpressions(text, keyExpressions).map((part, i) => {
      const isExpr = keyExpressions.some((e) => e.toLowerCase() === part.toLowerCase());
      if (!isExpr) return <span key={i}>{renderPlain(part, `${keyPrefix}-${i}`)}</span>;

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

        <div className="mt-3 space-y-2 text-[16px] leading-relaxed">
          {splitSentences(tailored.answerEn).map((sentence, i) => (
            <p key={i}>{renderHighlighted(sentence, `answer-${i}`)}</p>
          ))}
        </div>

        <p className="mt-3 flex flex-wrap gap-x-3 gap-y-1 text-[11px] text-muted-foreground">
          <span>
            <span className="font-semibold text-primary-press underline decoration-dotted">
              밑줄
            </span>{' '}
            핵심 표현
          </span>
          {brainstormAnchors.length > 0 && (
            <span>
              <span className="rounded bg-emerald-50 px-0.5 font-medium text-emerald-700">
                초록
              </span>{' '}
              브레인스토밍 키워드
            </span>
          )}
        </p>

        <div className="mt-4 space-y-2 border-t border-border pt-3 text-[14px] leading-relaxed text-muted-foreground">
          {splitSentences(tailored.answerKo).map((sentence, i) => (
            <p key={i}>{sentence}</p>
          ))}
        </div>
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
