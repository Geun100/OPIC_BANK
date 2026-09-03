// 주제×컷 조합별 예상 질문+모범답안 상세 페이지 — SEO 색인 단위 세분화
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { topicQAs, topicInfo, cutInfo, getTopicQA, type CutKey } from '@/data/topic-qa';
import { QAAnswerBlock } from '@/components/qa-answer-block';

export function generateStaticParams() {
  return topicQAs.map((q) => ({ topic: q.topic, cut: q.cut }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ topic: string; cut: string }>;
}): Promise<Metadata> {
  const { topic, cut } = await params;
  const qa = getTopicQA(topic, cut);
  if (!qa) return {};
  const topicName = topicInfo[qa.topic].name;
  const cutName = cutInfo[qa.cut].name;
  return {
    title: `오픽 ${topicName} ${cutName} 답변 — 예상 질문과 모범답안 (IM·IH·AL 등급별)`,
    description: `오픽 ${topicName} 주제 ${cutName} 질문 등급별(IM·IH·AL) 맞춤 답안. ${qa.question.en}`,
  };
}

export default async function TopicCutPage({
  params,
}: {
  params: Promise<{ topic: string; cut: string }>;
}) {
  const { topic, cut } = await params;
  const qa = getTopicQA(topic, cut);
  if (!qa) notFound();

  const topicName = topicInfo[qa.topic].name;
  const cutName = cutInfo[qa.cut].name;

  return (
    <div className="mx-auto max-w-3xl px-5 py-16">
      <Link href="/expressions/topics" className="text-[13px] text-primary hover:underline">
        ← 주제별 표현
      </Link>
      <p className="mt-3 text-[13px] font-medium tracking-wide text-primary">
        {topicName} · {cutName}
      </p>
      <h1 className="mt-1 text-[30px]">
        오픽 {topicName} {cutName} 예상 질문과 모범답안
      </h1>
      <p className="mt-2 text-[15px] text-muted-foreground">{cutInfo[qa.cut].hint}</p>

      {/* 같은 주제의 다른 컷(묘사/습관/경험)으로 바로 이동 */}
      <div className="mt-6 flex gap-2">
        {(Object.keys(cutInfo) as CutKey[]).map((c) => (
          <Link
            key={c}
            href={`/expressions/topics/${qa.topic}/${c}`}
            className={`rounded-full border px-4 py-1.5 text-[13px] font-medium transition-colors ${
              c === qa.cut
                ? 'border-primary bg-primary text-primary-foreground'
                : 'border-border text-muted-foreground hover:border-primary/40 hover:text-primary'
            }`}
          >
            {cutInfo[c].name}
          </Link>
        ))}
      </div>

      <QAAnswerBlock qa={qa} viewerId={`topic-qa-${qa.topic}-${qa.cut}`} />
    </div>
  );
}
