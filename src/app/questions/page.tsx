// 질문 라이브러리 인덱스 — 콤보/돌발/경향/예상 4개 섹션 안내
import Link from 'next/link';
import type { Metadata } from 'next';
import { comboTopics, suddenTopics, expectedQuestions } from '@/data/questions';

export const metadata: Metadata = {
  title: '오픽 질문 라이브러리 — 콤보·돌발 주제별 실전 질문',
  description:
    '오픽 콤보 주제와 돌발 주제별 실전 질문 모음. 최신 출제 경향과 고정 출제 예상 질문까지 정리했습니다.',
};

export default function QuestionsIndex() {
  const cards = [
    {
      href: '/questions/combo',
      title: '콤보 주제',
      desc: `${comboTopics.length}개 주제 — 묘사·습관·경험 3각도 질문 세트`,
    },
    {
      href: '/questions/sudden',
      title: '돌발 주제',
      desc: `${suddenTopics.length}개 주제 — 서베이와 무관하게 나오는 질문`,
    },
    { href: '/questions/trends', title: '최신 출제 경향', desc: '시험 구조와 최근 출제 패턴 메모' },
    {
      href: '/questions/expected',
      title: '예상 질문 모음',
      desc: `${expectedQuestions.length}개 — 사실상 고정 출제되는 질문`,
    },
  ];
  return (
    <div className="mx-auto max-w-3xl px-5 py-16">
      <p className="text-[13px] font-medium tracking-wide text-primary">QUESTIONS</p>
      <h1 className="mt-2 text-[34px]">질문 라이브러리</h1>
      <p className="mt-3 text-[16px] text-muted-foreground">
        오픽 질문은 유형이 정해져 있어요. 내 서베이에 해당하는 콤보 주제부터 준비하고, 돌발 빈출을
        보완하세요.
      </p>
      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {cards.map((c) => (
          <Link
            key={c.href}
            href={c.href}
            className="rounded-xl border border-border bg-card p-6 shadow-[0_1px_3px_rgba(0,55,112,0.08)] transition-all hover:-translate-y-0.5 hover:border-primary/40"
          >
            <h2 className="text-[19px]">{c.title}</h2>
            <p className="mt-1 text-[14px] text-muted-foreground">{c.desc}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
