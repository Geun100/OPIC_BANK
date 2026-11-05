// 주제별 허브 페이지 — 묘사·습관·경험 3개 예상 질문과 모범답안을 한 페이지에 모은다
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { withSeo } from '@/lib/seo/with-seo';
import { topicInfo, cutInfo, getTopicQA, type CutKey, type TopicKey } from '@/data/topic-qa';
import { TopicHub, type HubSection } from '@/components/topic-hub';

export function generateStaticParams() {
  return Object.keys(topicInfo).map((topic) => ({ topic }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ topic: string }>;
}): Promise<Metadata> {
  const { topic } = await params;
  const info = topicInfo[topic as TopicKey];
  if (!info) return {};
  return withSeo(`/expressions/topics/${topic}`, {
    title: `오픽 ${info.name} 예상 질문과 모범답안 — 묘사·습관·경험 (IM·IH·AL)`,
    description: `오픽 ${info.name} 주제의 묘사·습관·경험 질문 3가지를 등급별(IM·IH·AL) 모범답안, 브레인스토밍, 핵심 표현과 함께 한 번에 정리했어요.`,
  });
}

export default async function TopicHubPage({ params }: { params: Promise<{ topic: string }> }) {
  const { topic } = await params;
  const info = topicInfo[topic as TopicKey];
  if (!info) notFound();

  const sections: HubSection[] = (Object.keys(cutInfo) as CutKey[]).flatMap((cut) => {
    const qa = getTopicQA(topic, cut);
    if (!qa) return [];
    return [
      {
        id: cut,
        label: cutInfo[cut].name,
        hint: cutInfo[cut].hint,
        qa,
        viewerId: `topic-qa-${topic}-${cut}`,
      },
    ];
  });
  if (sections.length === 0) notFound();

  return (
    <TopicHub
      backHref="/expressions/topics"
      backLabel="주제별 표현"
      eyebrow={`${info.name} · 묘사 / 습관 / 경험`}
      title={`오픽 ${info.name} 예상 질문과 모범답안`}
      lead={`${info.name} 주제는 보통 묘사, 습관, 경험 세 가지 유형으로 이어서 나와요. 세 질문을 한 번에 준비해 보세요.`}
      sections={sections}
    />
  );
}
