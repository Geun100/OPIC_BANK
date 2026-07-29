// OPIC Bank 홈 — 6메뉴 라이브러리 카드 구조로 소프트 롤백(v4)
import Link from 'next/link';
import type { Metadata } from 'next';
import {
  HelpCircle,
  ListChecks,
  MessageSquareQuote,
  Search,
  Award,
  NotebookPen,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'OPIC Bank(오픽뱅크) — 오픽 표현·질문 검색',
  description:
    '오픽뱅크(OPIC Bank)는 오픽 예상 질문·모범답안·표현을 한곳에 모아둔 사이트입니다. 오픽이 처음이라면 입문 가이드부터, 준비 중이라면 서베이 추천·질문·표현 라이브러리에서 필요한 것만 바로 찾아보세요.',
};

const menus = [
  {
    href: '/guide',
    icon: HelpCircle,
    title: '오픽이 처음이라면?',
    desc: '시험 구조와 등급 체계를 5분 만에 이해하기',
  },
  {
    href: '/survey',
    icon: ListChecks,
    title: '서베이 추천',
    desc: '목표 등급·성향에 맞는 조합 추천 + 맞춤 GPT 학습 프롬프트까지 받기',
  },
  {
    href: '/questions',
    icon: MessageSquareQuote,
    title: '질문 라이브러리',
    desc: '콤보·돌발·롤플레이 예상 질문 모아보기',
  },
  {
    href: '/expressions',
    icon: Search,
    title: '표현 라이브러리',
    desc: '주제별 표현, 필러, 만능 패턴 검색',
  },
  {
    href: '/grade',
    icon: Award,
    title: 'AL·IH 표현집',
    desc: '고득점 표현·문장 패턴 모음',
  },
  {
    href: '/notes',
    icon: NotebookPen,
    title: '나만의 노트',
    desc: '저장한 표현·질문 모아보기',
  },
];

export default function Home() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 -z-10 h-[420px] opacity-80 blur-3xl saturate-150"
        style={{
          background:
            'radial-gradient(ellipse 55% 50% at 15% 20%, #f5e9d4 0%, transparent 55%), radial-gradient(ellipse 55% 55% at 50% 5%, #b9b9f9 0%, transparent 60%), radial-gradient(ellipse 60% 55% at 85% 20%, #665efd 0%, transparent 55%), radial-gradient(ellipse 45% 40% at 98% 45%, #ea2261 0%, transparent 50%)',
        }}
      />
      <div className="mx-auto max-w-5xl px-5 pb-20 pt-20 text-center sm:pt-28">
        <p className="mx-auto mb-5 w-fit rounded-full bg-primary-subdued/40 px-4 py-1 text-[12px] font-medium tracking-wide text-primary-press">
          OPIC Bank
        </p>
        <h1 className="mx-auto max-w-2xl text-[40px] leading-[1.1] tracking-[-0.03em] text-foreground sm:text-[52px]">
          모든 오픽을 한곳에서
        </h1>
        <p className="mx-auto mt-4 max-w-md text-[15px] font-medium uppercase tracking-[0.08em] text-primary-press">
          Find What You Need. Speak Naturally.
        </p>
        <p className="mx-auto mt-5 max-w-md text-[17px] font-normal text-secondary-foreground">
          필요한 메뉴 하나만 고르면, 그 안에서 바로 찾아볼 수 있어요.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {menus.map((m) => (
            <Link
              key={m.href}
              href={m.href}
              className="rounded-2xl border border-border bg-card p-6 text-left transition-[transform,border-color,box-shadow] duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] hover:-translate-y-0.5 hover:border-primary/50 hover:shadow-[0_8px_24px_rgba(0,55,112,0.08)] active:translate-y-0 active:scale-[0.98] active:duration-100"
            >
              <m.icon className="size-6 text-primary" />
              <p className="mt-4 text-[17px]">{m.title}</p>
              <p className="mt-1 text-[13px] text-muted-foreground">{m.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
