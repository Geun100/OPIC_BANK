// OPIc Bank 홈 — 히어로 + 6개 핵심 메뉴 카드
import Link from 'next/link';
import type { Metadata } from 'next';
import {
  BookOpen,
  ClipboardList,
  MessageCircleQuestion,
  Library,
  Trophy,
  StickyNote,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'OPIc Bank — 오픽이 처음인 사람을 위한 가장 쉬운 시작',
  description:
    '오픽 시험 구조 이해부터 유리한 서베이 조합 추천, 질문·표현 라이브러리까지 한곳에서. 오픽 입문자를 위한 무료 학습 가이드.',
};

const menus = [
  {
    href: '/guide',
    icon: BookOpen,
    title: '오픽이 처음이라면?',
    desc: '시험 소개부터 등급 체계, 첫 준비 순서까지',
  },
  {
    href: '/survey',
    icon: ClipboardList,
    title: '서베이 추천',
    desc: '목표 등급과 성향에 맞는 유리한 서베이 조합',
    highlight: true,
  },
  {
    href: '/questions',
    icon: MessageCircleQuestion,
    title: '질문 라이브러리',
    desc: '콤보·돌발 주제별 실전 질문 모음',
  },
  {
    href: '/expressions',
    icon: Library,
    title: '표현 라이브러리',
    desc: '주제별 표현, 필러, 만능 문장 패턴',
  },
  {
    href: '/grade',
    icon: Trophy,
    title: 'AL·IH 표현집',
    desc: '목표 등급별 고득점 표현만 모아서',
  },
  {
    href: '/notes',
    icon: StickyNote,
    title: '나만의 노트',
    desc: '저장한 표현과 질문으로 만드는 암기장',
  },
];

export default function Home() {
  return (
    <>
      {/* 히어로 */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-x-0 top-0 -z-10 h-[420px] opacity-80 blur-3xl saturate-150"
          style={{
            background:
              'radial-gradient(ellipse 55% 50% at 15% 20%, #f5e9d4 0%, transparent 55%), radial-gradient(ellipse 55% 55% at 50% 5%, #b9b9f9 0%, transparent 60%), radial-gradient(ellipse 60% 55% at 85% 20%, #665efd 0%, transparent 55%), radial-gradient(ellipse 45% 40% at 98% 45%, #ea2261 0%, transparent 50%)',
          }}
        />
        <div className="mx-auto max-w-6xl px-5 pb-16 pt-20 text-center sm:pt-28">
          <p className="mx-auto mb-5 w-fit rounded-full bg-primary-subdued/40 px-4 py-1 text-[12px] font-medium tracking-wide text-primary-press">
            오픽 입문자를 위한 무료 가이드
          </p>
          <h1 className="mx-auto max-w-2xl text-[40px] leading-[1.1] tracking-[-0.03em] sm:text-[56px]">
            오픽, 뭐부터 해야 할지
            <br />
            모르겠다면
          </h1>
          <p className="mx-auto mt-5 max-w-md text-[17px] text-muted-foreground">
            시험 구조 이해부터 나에게 유리한 서베이 선택까지. 처음 준비하는 사람의 순서대로
            안내합니다.
          </p>
          <div className="mt-8 flex justify-center gap-3">
            <Link
              href="/survey"
              className="rounded-full bg-primary px-6 py-2.5 text-[15px] text-primary-foreground transition-colors hover:bg-primary-press"
            >
              내 서베이 조합 추천받기
            </Link>
            <Link
              href="/guide"
              className="rounded-full border border-primary px-6 py-2.5 text-[15px] text-primary transition-colors hover:bg-accent"
            >
              오픽이 뭔가요?
            </Link>
          </div>
        </div>
      </section>

      {/* 메뉴 카드 */}
      <section className="mx-auto max-w-6xl px-5 pb-24">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {menus.map((m) => (
            <Link
              key={m.href}
              href={m.href}
              className={`group rounded-xl border p-7 shadow-[0_1px_3px_rgba(0,55,112,0.08)] transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,55,112,0.08)] ${
                m.highlight ? 'border-primary/40 bg-accent/40' : 'border-border bg-card'
              }`}
            >
              <m.icon className="mb-4 size-6 text-primary" strokeWidth={1.5} />
              <h2 className="text-[18px] tracking-tight">
                {m.title}
                {m.highlight && (
                  <span className="ml-2 rounded-full bg-primary px-2 py-0.5 align-middle text-[10px] text-primary-foreground">
                    여기부터
                  </span>
                )}
              </h2>
              <p className="mt-1.5 text-[14px] text-muted-foreground">{m.desc}</p>
            </Link>
          ))}
        </div>

        {/* 시작 순서 안내 */}
        <div className="mt-16 rounded-xl bg-cream p-8 sm:p-10">
          <h2 className="text-[24px] tracking-tight">처음이라면 이 순서로</h2>
          <ol className="mt-5 grid gap-4 text-[15px] sm:grid-cols-3">
            <li className="rounded-lg bg-white/70 p-5">
              <span className="text-primary">1.</span> <strong>시험 이해</strong> — 오픽이 어떤
              시험인지, 등급이 어떻게 나뉘는지 10분만 읽어보세요.
            </li>
            <li className="rounded-lg bg-white/70 p-5">
              <span className="text-primary">2.</span> <strong>서베이 전략</strong> — 시험 범위를
              결정하는 건 서베이예요. 내게 유리한 조합을 추천받으세요.
            </li>
            <li className="rounded-lg bg-white/70 p-5">
              <span className="text-primary">3.</span> <strong>질문·표현 연습</strong> — 내 서베이
              기준의 질문과 표현을 노트에 저장하며 연습하세요.
            </li>
          </ol>
        </div>
      </section>
    </>
  );
}
