// 표현 라이브러리 인덱스 — 5개 카테고리 안내
import Link from 'next/link';
import type { Metadata } from 'next';
import { expressionCategories } from '@/data/expressions';

export const metadata: Metadata = {
  title: '오픽 표현 라이브러리 — 주제별 표현·필러·만능 패턴',
  description:
    '오픽 답변에 바로 쓰는 표현 모음. 주제별 표현, 필러(Filler), 만능 문장 패턴, 감정 표현, 연결 표현을 예문과 함께 정리했습니다.',
};

export default function ExpressionsIndex() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-16">
      <p className="text-[13px] font-medium tracking-wide text-primary">EXPRESSIONS</p>
      <h1 className="mt-2 text-[34px]">표현 라이브러리</h1>
      <p className="mt-3 text-[16px] text-muted-foreground">
        답변을 통째로 외우지 말고, 표현을 익혀서 내 이야기에 끼워 넣으세요. 쓸 만한 표현은 별을 눌러
        노트에 저장할 수 있어요.
      </p>
      <div className="mt-10 flex flex-col gap-4">
        {expressionCategories.map((c) => (
          <Link
            key={c.slug}
            href={`/expressions/${c.slug}`}
            className="rounded-xl border border-border bg-card p-6 shadow-[0_1px_3px_rgba(0,55,112,0.08)] transition-all hover:-translate-y-0.5 hover:border-primary/40"
          >
            <h2 className="text-[19px]">{c.name}</h2>
            <p className="mt-1 text-[14px] text-muted-foreground">{c.description}</p>
          </Link>
        ))}
      </div>

      <div className="mt-10 rounded-xl border border-border bg-card p-6">
        <p className="text-[14px] text-muted-foreground">종이로 정리해서 보고 싶다면</p>
        <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <iframe
            src="https://coupa.ng/co9X4j"
            width="120"
            height="240"
            frameBorder="0"
            scrolling="no"
            referrerPolicy="unsafe-url"
          />
          <iframe
            src="https://coupa.ng/co92Bx"
            width="120"
            height="240"
            frameBorder="0"
            scrolling="no"
            referrerPolicy="unsafe-url"
          />
          <iframe
            src="https://coupa.ng/co92Du"
            width="120"
            height="240"
            frameBorder="0"
            scrolling="no"
            referrerPolicy="unsafe-url"
          />
          <iframe
            src="https://coupa.ng/co92Fb"
            width="120"
            height="240"
            frameBorder="0"
            scrolling="no"
            referrerPolicy="unsafe-url"
          />
        </div>
        <p className="mt-4 text-[11px] text-muted-foreground">
          이 포스팅은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다.
        </p>
      </div>
    </div>
  );
}
