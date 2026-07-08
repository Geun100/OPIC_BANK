// OPIC Sprint 상단 내비게이션 — 스프린트 중심 구조, 라이브러리는 참고자료로 격하
import Link from 'next/link';
import { MobileNav } from './mobile-nav';

const links = [
  { href: '/guide', label: '오픽이 처음이라면' },
  { href: '/expressions', label: '참고자료' },
  { href: '/notes', label: '나만의 노트' },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-30 border-b border-border bg-white/75 backdrop-blur-md">
      <div className="relative mx-auto flex h-14 max-w-6xl items-center justify-between px-5">
        <Link href="/" className="text-[17px] font-normal tracking-tight">
          OPIC <span className="font-medium text-primary">Sprint</span>
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-[14px] text-foreground/80 transition-colors hover:text-primary"
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Link
            href="/"
            className="hidden rounded-full bg-primary px-4 py-1.5 text-[14px] font-normal text-primary-foreground transition-colors hover:bg-primary-press sm:inline-flex"
          >
            내 스프린트 찾기
          </Link>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
