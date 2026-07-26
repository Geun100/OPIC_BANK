// 롤플레이 유형×시나리오별 예상 질문+모범답안 상세 페이지 — SEO 색인 단위 세분화
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { roleplayQAs, roleplayTypeInfo, getRoleplayQA } from '@/data/roleplay-qa';
import { AnswerGradeViewer } from '@/components/answer-grade-viewer';

export function generateStaticParams() {
  return roleplayQAs.map((q) => ({ type: q.type, scenario: q.scenario }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ type: string; scenario: string }>;
}): Promise<Metadata> {
  const { type, scenario } = await params;
  const qa = getRoleplayQA(type, scenario);
  if (!qa) return {};
  const typeName = roleplayTypeInfo[qa.type].name;
  return {
    title: `오픽 롤플레이 ${typeName} — ${qa.scenarioName} 모범답안 (IM·IH·AL 등급별)`,
    description: `오픽 롤플레이 ${typeName} · ${qa.scenarioName} 예상 질문과 등급별(IM·IH·AL) 모범답안. ${qa.question.en}`,
  };
}

export default async function RoleplayCutPage({
  params,
}: {
  params: Promise<{ type: string; scenario: string }>;
}) {
  const { type, scenario } = await params;
  const qa = getRoleplayQA(type, scenario);
  if (!qa) notFound();

  const typeInfo = roleplayTypeInfo[qa.type];

  return (
    <div className="mx-auto max-w-3xl px-5 py-16">
      <Link href="/questions/roleplay" className="text-[13px] text-primary hover:underline">
        ← 롤플레이
      </Link>
      <p className="mt-3 text-[13px] font-medium tracking-wide text-primary">
        {typeInfo.name} · {qa.scenarioName}
      </p>
      <h1 className="mt-1 text-[30px]">
        오픽 롤플레이 {typeInfo.name} — {qa.scenarioName}
      </h1>
      <p className="mt-2 text-[15px] text-muted-foreground">{typeInfo.note}</p>

      <div className="mt-8 rounded-xl border border-border bg-card p-6">
        <p className="text-[13px] text-muted-foreground">예상 질문</p>
        <p className="mt-1 text-[18px] font-medium">{qa.question.en}</p>
        <p className="mt-1 text-[14px] text-muted-foreground">{qa.question.ko}</p>
      </div>

      <AnswerGradeViewer
        id={`roleplay-qa-${qa.type}-${qa.scenario}`}
        questionKo={qa.question.ko}
        fullAnswerEn={qa.answer}
        fullAnswerKo={qa.answerKo}
        keyExpressions={qa.keyExpressions}
      />

      <p className="mt-10 rounded-lg bg-muted p-4 text-[12px] text-muted-foreground">
        답안은 학습용 초안이에요. 통째로 외우기보다 내 상황에 맞게 바꿔서 연습하세요.
      </p>
    </div>
  );
}
