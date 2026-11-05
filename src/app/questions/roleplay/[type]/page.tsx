// 롤플레이 유형별 허브 페이지 — 한 유형의 시나리오별 예상 질문과 모범답안을 한 페이지에 모은다
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { withSeo } from '@/lib/seo/with-seo';
import { roleplayQAs, roleplayTypeInfo, type RoleplayType } from '@/data/roleplay-qa';
import { TopicHub, type HubSection } from '@/components/topic-hub';

export function generateStaticParams() {
  return Object.keys(roleplayTypeInfo).map((type) => ({ type }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ type: string }>;
}): Promise<Metadata> {
  const { type } = await params;
  const info = roleplayTypeInfo[type as RoleplayType];
  if (!info) return {};
  return withSeo(`/questions/roleplay/${type}`, {
    title: `오픽 롤플레이 ${info.name} 예상 질문과 모범답안 (IM·IH·AL)`,
    description: `오픽 롤플레이 ${info.name}. ${info.note}. 시나리오별 예상 질문과 모범답안, 핵심 표현을 한 번에 정리했어요.`,
  });
}

export default async function RoleplayHubPage({ params }: { params: Promise<{ type: string }> }) {
  const { type } = await params;
  const info = roleplayTypeInfo[type as RoleplayType];
  if (!info) notFound();

  const sections: HubSection[] = roleplayQAs
    .filter((q) => q.type === type)
    .map((q) => ({
      id: q.scenario,
      label: q.scenarioName,
      qa: q,
      viewerId: `roleplay-qa-${q.type}-${q.scenario}`,
      disclaimer: '답안은 학습용 초안이에요. 통째로 외우기보다 내 상황에 맞게 바꿔서 연습하세요.',
    }));
  if (sections.length === 0) notFound();

  return (
    <TopicHub
      backHref="/questions/roleplay"
      backLabel="롤플레이"
      eyebrow={info.name}
      title={`오픽 롤플레이 ${info.name} 예상 질문과 모범답안`}
      lead={`${info.note}. 시나리오별 질문과 답안을 한 번에 연습해 보세요.`}
      sections={sections}
    />
  );
}
