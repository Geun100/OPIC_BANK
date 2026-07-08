// 모바일 전용 햄버거 메뉴 — 데스크톱에서 hidden 처리되는 상단 네비의 대체
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const links = [
  { href: '/guide', label: '오픽이 처음이라면' },
  { href: '/sprint/d14', label: 'D-14 스프린트' },
  { href: '/sprint/d7', label: 'D-7 스프린트' },
  { href: '/sprint/d1', label: 'D-1 벼락치기' },
  { href: '/expressions', label: '참고자료' },
  { href: '/notes', label: '나만의 노트' },
];

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? '메뉴 닫기' : '메뉴 열기'}
        className="flex size-9 items-center justify-center rounded-full text-foreground"
      >
        {open ? <X className="size-5" /> : <Menu className="size-5" />}
      </button>
      {open && (
        <div className="absolute inset-x-0 top-14 border-b border-border bg-white shadow-lg">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-3">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-2.5 text-[15px] text-foreground/90 hover:bg-accent"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
}
