// OPIC Sprint 상단 내비게이션 — 라이브러리 6메뉴 구조로 소프트 롤백(v4)
import Link from 'next/link';
import { MobileNav } from './mobile-nav';

const links = [
  { href: '/guide', label: '오픽이 처음이라면' },
  { href: '/survey', label: '서베이 추천' },
  { href: '/questions', label: '질문 라이브러리' },
  { href: '/expressions', label: '표현 라이브러리' },
  { href: '/grade', label: 'AL·IH 표현집' },
  { href: '/notes', label: '나만의 노트' },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-30 border-b border-border bg-white/75 backdrop-blur-md">
      <div className="relative mx-auto flex h-14 max-w-6xl items-center justify-between px-5">
        <Link href="/" className="text-[17px] font-normal tracking-tight">
          OPIC <span className="font-medium text-primary">Sprint</span>
        </Link>
        <nav className="hidden items-center gap-5 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-[13px] text-foreground/80 transition-colors hover:text-primary"
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
