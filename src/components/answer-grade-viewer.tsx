'use client';

import { useState } from 'react';
import { SaveButton } from '@/components/save-button';
import { splitByExpressions, pickMemorizeSentences } from '@/lib/highlight';
import { GRADE_TIER_INFO, getGradeTailoredAnswer, type GradeTier } from '@/lib/grade-answers';

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

  const info = GRADE_TIER_INFO[activeGrade];
  const tailored = getGradeTailoredAnswer(fullAnswerEn, fullAnswerKo, activeGrade);
  const memorizeSentences = pickMemorizeSentences(tailored.answerEn, keyExpressions);

  // Filter key expressions present in the current grade answer
  const activeExpressions = keyExpressions.filter((e) =>
    tailored.answerEn.toLowerCase().includes(e.toLowerCase()),
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
          {splitByExpressions(tailored.answerEn, keyExpressions).map((part, i) =>
            keyExpressions.some((e) => e.toLowerCase() === part.toLowerCase()) ? (
              <strong key={i} className="font-semibold text-primary-press">
                {part}
              </strong>
            ) : (
              <span key={i}>{part}</span>
            ),
          )}
        </p>

        <p className="mt-4 border-t border-border pt-3 text-[14px] leading-relaxed text-muted-foreground">
          {tailored.answerKo}
        </p>
      </div>

      {/* 암기하면 좋은 문장 */}
      <div className="rounded-xl bg-cream p-6">
        <p className="text-[14px] font-medium">암기하면 좋은 추천 문장 ({activeGrade} 난이도)</p>
        <ul className="mt-2 flex flex-col gap-2">
          {memorizeSentences.length > 0 ? (
            memorizeSentences.map((s) => (
              <li key={s} className="text-[14px] leading-relaxed">
                {s}
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
        <ul className="mt-2 flex flex-wrap gap-2">
          {(activeExpressions.length > 0 ? activeExpressions : keyExpressions).map((e) => (
            <li
              key={e}
              className="rounded-full border border-border bg-white px-3 py-1 text-[13px]"
            >
              {e}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
