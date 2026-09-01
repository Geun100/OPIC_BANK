// 입문 가이드 인덱스 — 3개 가이드 문서 안내
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '오픽이 처음이라면? 입문 가이드',
  description:
    '오픽(OPIc)이 어떤 시험인지, 어떻게 진행되는지, IM·IH·AL 등급은 무엇인지. 처음 준비하는 사람을 위한 안내.',
};

const docs = [
  {
    href: '/guide/what-is-opic',
    step: 'STEP 1',
    title: 'OPIc 시험 소개',
    desc: '오픽이 어떤 시험이고, 왜 기업들이 이 점수를 요구하는지',
  },
  {
    href: '/guide/exam-process',
    step: 'STEP 2',
    title: '시험 진행 방식',
    desc: '접수부터 시험 당일까지, 40분 동안 실제로 일어나는 일',
  },
  {
    href: '/guide/grades',
    step: 'STEP 3',
    title: '등급 체계 (IM·IH·AL)',
    desc: '등급이 어떻게 나뉘고, 취업엔 보통 어떤 등급이 필요한지',
  },
];

export default function GuideIndex() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-16">
      <p className="text-[13px] font-medium tracking-wide text-primary">GUIDE</p>
      <h1 className="mt-2 text-[34px]">오픽이 처음이라면?</h1>
      <p className="mt-3 text-[16px] text-muted-foreground">
        오픽은 구조만 이해해도 절반은 준비된 시험이에요. 아래 순서대로 읽으면 10분 안에 전체 그림이
        잡힙니다.
      </p>
      <div className="mt-10 flex flex-col gap-4">
        {docs.map((d) => (
          <Link
            key={d.href}
            href={d.href}
            className="rounded-xl border border-border bg-card p-6 shadow-[0_1px_3px_rgba(0,55,112,0.08)] transition-all hover:-translate-y-0.5 hover:border-primary/40"
          >
            <p className="text-[11px] font-medium tracking-widest text-primary">{d.step}</p>
            <h2 className="mt-1 text-[20px]">{d.title}</h2>
            <p className="mt-1 text-[14px] text-muted-foreground">{d.desc}</p>
          </Link>
        ))}
      </div>

      <div className="mt-14 rounded-xl bg-cream p-8">
        <h2 className="text-[22px] tracking-tight">다 읽었다면, 실전 표현으로</h2>
        <p className="mt-2 text-[14px] text-secondary-foreground">
          구조를 이해했다면 이제 실제로 쓸 표현과 예상 질문을 찾아볼 차례예요.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/survey"
            className="rounded-full bg-primary px-5 py-2.5 text-[14px] text-primary-foreground hover:bg-primary-press"
          >
            서베이 추천 받기
          </Link>
          <Link
            href="/expressions"
            className="rounded-full border border-border bg-card px-5 py-2.5 text-[14px] hover:border-primary/40"
          >
            표현 라이브러리 보기
          </Link>
        </div>
      </div>

      <div className="mt-10 flex flex-col items-start gap-2 rounded-xl border border-border bg-card p-6">
        <p className="text-[14px] text-muted-foreground">
          시험에 필요한 걸 한 번에 준비하고 싶다면
        </p>
        <iframe
          src="https://coupa.ng/co92Du"
          width="120"
          height="240"
          frameBorder="0"
          scrolling="no"
          referrerPolicy="unsafe-url"
        />
        <p className="text-[11px] text-muted-foreground">
          이 포스팅은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다.
        </p>
      </div>
    </div>
  );
}
