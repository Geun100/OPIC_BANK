// OPIC Sprint 홈 — "시험이 언제예요?" 즉시 선택 히어로
import Link from 'next/link';
import type { Metadata } from 'next';
import { SprintPicker } from '@/components/sprint-picker';

export const metadata: Metadata = {
  title: 'OPIC Sprint — 시험이 언제예요?',
  description:
    '오픽이 처음이라면, 아니면 D-14·D-7·D-1 중 남은 기간에 맞는 스프린트로 바로 시작하세요.',
};

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
          OPIC Sprint
        </p>
        <h1 className="mx-auto max-w-2xl text-[40px] leading-[1.1] tracking-[-0.03em] sm:text-[52px]">
          시험이 언제예요?
        </h1>
        <p className="mx-auto mt-5 max-w-md text-[17px] text-muted-foreground">
          남은 기간에 맞는 스프린트 하나만 고르면, 그날부터 뭘 해야 하는지 전부 정해드려요.
        </p>

        <div className="mt-10">
          <SprintPicker />
        </div>

        <p className="mt-8 text-[13px] text-muted-foreground">
          이미 저장한 표현·질문이 있나요?{' '}
          <Link href="/notes" className="text-primary hover:underline">
            나만의 노트 보기
          </Link>
        </p>
      </div>
    </section>
  );
}
