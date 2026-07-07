// 표현 카테고리 페이지 — 그룹별 표현 목록과 노트 저장 버튼
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { expressionCategories, getCategory } from '@/data/expressions';
import { SaveButton } from '@/components/save-button';

export function generateStaticParams() {
  return expressionCategories.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;
  const cat = getCategory(category);
  if (!cat) return {};
  return {
    title: `오픽 ${cat.name}`,
    description: `${cat.description}. 예문과 함께 정리한 오픽 실전 표현.`,
  };
}

export default async function ExpressionCategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const cat = getCategory(category);
  if (!cat) notFound();

  return (
    <div className="mx-auto max-w-3xl px-5 py-16">
      <Link href="/expressions" className="text-[13px] text-primary hover:underline">
        ← 표현 라이브러리
      </Link>
      <h1 className="mt-3 text-[32px]">{cat.name}</h1>
      <p className="mt-2 text-[15px] text-muted-foreground">{cat.description}</p>

      <div className="mt-10 flex flex-col gap-8">
        {cat.groups.map((g) => (
          <section key={g.title} className="rounded-xl border border-border bg-card p-6">
            <h2 className="text-[20px]">{g.title}</h2>
            <ul className="mt-4 flex flex-col gap-4">
              {g.items.map((item) => (
                <li key={item.en} className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-[16px] font-medium">{item.en}</p>
                    <p className="mt-0.5 text-[13px] text-muted-foreground">{item.ko}</p>
                    {item.example && (
                      <p className="mt-1 text-[13px] italic text-secondary-foreground/70">
                        {item.example}
                      </p>
                    )}
                  </div>
                  <SaveButton id={item.en} type="expression" en={item.en} ko={item.ko} />
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <p className="mt-10 rounded-lg bg-muted p-4 text-[12px] text-muted-foreground">
        표현과 예문은 학습용 초안이에요. 시험에서 쓰기 전에 소리 내어 연습하며 내 문장으로 만드세요.
      </p>
    </div>
  );
}
