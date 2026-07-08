// 스프린트 상세 페이지 — /sprint/d14, /sprint/d7, /sprint/d1
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { sprints, type SprintKey } from '@/data/sprint';
import { SprintView } from '@/components/sprint-view';

export function generateStaticParams() {
  return Object.keys(sprints).map((key) => ({ key }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ key: string }>;
}): Promise<Metadata> {
  const { key } = await params;
  const sprint = sprints[key as SprintKey];
  if (!sprint) return {};
  return {
    title: `${sprint.label} 스프린트 — ${sprint.headline}`,
    description: sprint.strategy,
  };
}

export default async function SprintPage({ params }: { params: Promise<{ key: string }> }) {
  const { key } = await params;
  const sprint = sprints[key as SprintKey];
  if (!sprint) notFound();

  return (
    <div className="mx-auto max-w-3xl px-5 py-16">
      <SprintView sprint={sprint} />
    </div>
  );
}
