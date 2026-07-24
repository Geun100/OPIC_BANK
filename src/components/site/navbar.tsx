// OPIC Bank 상단 내비게이션 — 라이브러리 6메뉴 구조
import Link from 'next/link';
import { MobileNav } from './mobile-nav';
import { navLinks as links } from '@/lib/nav-links';

export function Navbar() {
  return (
    <header className="sticky top-0 z-30 border-b border-border bg-white/75 backdrop-blur-md">
      <div className="relative mx-auto flex h-14 max-w-6xl items-center justify-between px-5">
        <Link href="/" className="text-[17px] font-normal tracking-tight">
          OPIC <span className="font-medium text-primary">Bank</span>
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
