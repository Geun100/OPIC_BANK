// 모바일 전용 햄버거 메뉴 — 데스크톱에서 hidden 처리되는 상단 네비의 대체
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { navLinks as links } from '@/lib/nav-links';

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
        <>
          {/* 메뉴 뒤 화면 전체를 덮는 반투명 배경 — 없으면 아래 페이지 내용이 그대로 비쳐 보임 */}
          <button
            type="button"
            aria-label="메뉴 닫기"
            onClick={() => setOpen(false)}
            className="fixed inset-0 top-14 z-40 bg-black/30"
          />
          <div className="absolute inset-x-0 top-14 z-50 border-b border-border bg-white shadow-lg">
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
        </>
      )}
    </div>
  );
}
