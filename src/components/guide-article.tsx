// 가이드 문서 공통 레이아웃 — 제목/본문/이전다음 내비게이션
import Link from 'next/link';

type Props = {
  step: string;
  title: string;
  intro: string;
  children: React.ReactNode;
  prev?: { href: string; label: string };
  next?: { href: string; label: string };
};

export function GuideArticle({ step, title, intro, children, prev, next }: Props) {
  return (
    <article className="mx-auto max-w-3xl px-5 py-16">
      <p className="text-[11px] font-medium tracking-widest text-primary">{step}</p>
      <h1 className="mt-2 text-[32px]">{title}</h1>
      <p className="mt-3 text-[16px] text-muted-foreground">{intro}</p>
      <div className="mt-10 flex flex-col gap-8 text-[15px] leading-relaxed [&_h2]:text-[21px] [&_h2]:tracking-tight [&_li]:mt-1.5 [&_ul]:mt-2 [&_ul]:list-disc [&_ul]:pl-5">
        {children}
      </div>
      <div className="mt-14 rounded-lg bg-muted p-4 text-[12px] text-muted-foreground">
        본 가이드는 학습 보조용 요약이에요. 시험 규정·비용·일정 등 공식 정보는 반드시 OPIc 공식
        홈페이지에서 확인하세요.
      </div>
      <nav className="mt-8 flex justify-between text-[14px]">
        {prev ? (
          <Link href={prev.href} className="text-primary hover:underline">
            ← {prev.label}
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link href={next.href} className="text-primary hover:underline">
            {next.label} →
          </Link>
        ) : (
          <span />
        )}
      </nav>
    </article>
  );
}
