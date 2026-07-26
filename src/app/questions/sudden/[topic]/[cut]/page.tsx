// 돌발주제×컷 조합별 예상 질문+모범답안 상세 페이지 — SEO 색인 단위 세분화
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { suddenQAs, suddenTopicInfo, suddenCutInfo, getSuddenQA } from '@/data/sudden-qa';
import { SaveButton } from '@/components/save-button';
import { splitByExpressions, pickMemorizeSentences } from '@/lib/highlight';

export function generateStaticParams() {
  return suddenQAs.map((q) => ({ topic: q.topic, cut: q.cut }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ topic: string; cut: string }>;
}): Promise<Metadata> {
  const { topic, cut } = await params;
  const qa = getSuddenQA(topic, cut);
  if (!qa) return {};
  const topicName = suddenTopicInfo[qa.topic].name;
  const cutName = suddenCutInfo[qa.cut].name;
  return {
    title: `오픽 돌발주제 ${topicName} ${cutName} 답변 — 예상 질문과 모범답안`,
    description: `오픽 돌발주제 ${topicName} ${cutName} 질문 예상 답안. ${qa.question.en}`,
  };
}

export default async function SuddenTopicCutPage({
  params,
}: {
  params: Promise<{ topic: string; cut: string }>;
}) {
  const { topic, cut } = await params;
  const qa = getSuddenQA(topic, cut);
  if (!qa) notFound();

  const topicName = suddenTopicInfo[qa.topic].name;
  const cutName = suddenCutInfo[qa.cut].name;

  return (
    <div className="mx-auto max-w-3xl px-5 py-16">
      <Link href="/questions/sudden" className="text-[13px] text-primary hover:underline">
        ← 돌발 주제
      </Link>
      <p className="mt-3 text-[13px] font-medium tracking-wide text-primary">
        {topicName} · {cutName}
      </p>
      <h1 className="mt-1 text-[30px]">
        오픽 돌발주제 {topicName} {cutName} 예상 질문과 모범답안
      </h1>
      <p className="mt-2 text-[15px] text-muted-foreground">{suddenCutInfo[qa.cut].hint}</p>

      <div className="mt-8 rounded-xl border border-border bg-card p-6">
        <p className="text-[13px] text-muted-foreground">예상 질문</p>
        <p className="mt-1 text-[18px] font-medium">{qa.question.en}</p>
        <p className="mt-1 text-[14px] text-muted-foreground">{qa.question.ko}</p>
      </div>

      <div className="mt-6 rounded-xl border border-border bg-card p-6">
        <div className="flex items-start justify-between gap-3">
          <p className="text-[13px] text-muted-foreground">모범답안</p>
          <SaveButton
            id={`sudden-qa-${qa.topic}-${qa.cut}`}
            type="expression"
            en={qa.answer}
            ko={qa.question.ko}
          />
        </div>
        <p className="mt-2 text-[16px] leading-relaxed">
          {splitByExpressions(qa.answer, qa.keyExpressions).map((part, i) =>
            qa.keyExpressions.includes(part) ? (
              <strong key={i} className="font-semibold text-primary-press">
                {part}
              </strong>
            ) : (
              <span key={i}>{part}</span>
            ),
          )}
        </p>
        <p className="mt-3 border-t border-border pt-3 text-[14px] leading-relaxed text-muted-foreground">
          {qa.answerKo}
        </p>
      </div>

      <div className="mt-6 rounded-xl bg-cream p-6">
        <p className="text-[14px] font-medium">암기하면 좋은 3문장</p>
        <ul className="mt-2 flex flex-col gap-2">
          {pickMemorizeSentences(qa.answer, qa.keyExpressions).map((s) => (
            <li key={s} className="text-[14px] leading-relaxed">
              {s}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6 rounded-xl bg-cream p-6">
        <p className="text-[14px] font-medium">이 답변에 쓰인 핵심 표현</p>
        <ul className="mt-2 flex flex-wrap gap-2">
          {qa.keyExpressions.map((e) => (
            <li
              key={e}
              className="rounded-full border border-border bg-white px-3 py-1 text-[13px]"
            >
              {e}
            </li>
          ))}
        </ul>
      </div>

      <p className="mt-10 rounded-lg bg-muted p-4 text-[12px] text-muted-foreground">
        답안은 학습용 초안이에요. 통째로 외우기보다 내 경험에 맞게 바꿔서 연습하세요.
      </p>
    </div>
  );
}
