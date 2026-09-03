// 상세 페이지 공용 블록 — 예상 질문 카드 + 등급별 답안 뷰어 + 학습용 안내문
import { AnswerGradeViewer } from '@/components/answer-grade-viewer';
import { BrainstormChain } from '@/components/brainstorm-chain';
import type { BrainstormStep } from '@/data/topic-qa';

type QA = {
  question: { en: string; ko: string };
  answer: string;
  answerKo: string;
  keyExpressions: string[];
  brainstorm?: BrainstormStep[];
};

export function QAAnswerBlock({
  qa,
  viewerId,
  disclaimer = '답안은 학습용 초안이에요. 통째로 외우기보다 내 경험에 맞게 바꿔서 연습하세요.',
}: {
  qa: QA;
  viewerId: string;
  disclaimer?: string;
}) {
  return (
    <>
      <div className="mt-6 rounded-xl border border-border bg-card p-6">
        <p className="text-[13px] text-muted-foreground">예상 질문</p>
        <p className="mt-1 text-[18px] font-medium">{qa.question.en}</p>
        <p className="mt-1 text-[14px] text-muted-foreground">{qa.question.ko}</p>
      </div>

      {qa.brainstorm && qa.brainstorm.length > 0 && <BrainstormChain steps={qa.brainstorm} />}

      <AnswerGradeViewer
        id={viewerId}
        questionKo={qa.question.ko}
        fullAnswerEn={qa.answer}
        fullAnswerKo={qa.answerKo}
        keyExpressions={qa.keyExpressions}
      />

      <p className="mt-10 rounded-lg bg-muted p-4 text-[12px] text-muted-foreground">
        {disclaimer}
      </p>
    </>
  );
}
