// 돌발주제별 허브 페이지 — 묘사·습관·경험 3개 예상 질문과 모범답안을 한 페이지에 모은다
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { withSeo } from '@/lib/seo/with-seo';
import { suddenTopicInfo, suddenCutInfo, getSuddenQA, type SuddenTopicKey } from '@/data/sudden-qa';
import type { CutKey } from '@/data/topic-qa';
import { TopicHub, type HubSection } from '@/components/topic-hub';

export function generateStaticParams() {
  return Object.keys(suddenTopicInfo).map((topic) => ({ topic }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ topic: string }>;
}): Promise<Metadata> {
  const { topic } = await params;
  const info = suddenTopicInfo[topic as SuddenTopicKey];
  if (!info) return {};
  return withSeo(`/questions/sudden/${topic}`, {
    title: `오픽 돌발주제 ${info.name} 예상 질문과 모범답안 — 묘사·습관·경험 (IM·IH·AL)`,
    description: `오픽 돌발주제 ${info.name}의 묘사·습관·경험 질문 3가지를 등급별(IM·IH·AL) 모범답안, 브레인스토밍, 핵심 표현과 함께 한 번에 정리했어요.`,
  });
}

export default async function SuddenHubPage({ params }: { params: Promise<{ topic: string }> }) {
  const { topic } = await params;
  const info = suddenTopicInfo[topic as SuddenTopicKey];
  if (!info) notFound();

  const sections: HubSection[] = (Object.keys(suddenCutInfo) as CutKey[]).flatMap((cut) => {
    const qa = getSuddenQA(topic, cut);
    if (!qa) return [];
    return [
      {
        id: cut,
        label: suddenCutInfo[cut].name,
        hint: suddenCutInfo[cut].hint,
        qa,
        viewerId: `sudden-qa-${topic}-${cut}`,
      },
    ];
  });
  if (sections.length === 0) notFound();

  return (
    <TopicHub
      backHref="/questions/sudden"
      backLabel="돌발 주제"
      eyebrow={`돌발 주제 · ${info.name}`}
      title={`오픽 돌발주제 ${info.name} 예상 질문과 모범답안`}
      lead={`돌발 주제 ${info.name}은(는) 묘사, 습관, 경험 순서로 나올 수 있어요. 세 질문을 같이 연습해 두면 당황하지 않아요.`}
      sections={sections}
    />
  );
}
