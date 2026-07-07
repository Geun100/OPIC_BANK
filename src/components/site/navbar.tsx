// OPIc Bank 상단 내비게이션 — 6개 핵심 메뉴와 서베이 추천 CTA
import Link from 'next/link';

const links = [
  { href: '/guide', label: '오픽이 처음이라면' },
  { href: '/questions', label: '질문 라이브러리' },
  { href: '/expressions', label: '표현 라이브러리' },
  { href: '/grade', label: 'AL·IH 표현집' },
  { href: '/notes', label: '나만의 노트' },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-30 border-b border-border bg-white/75 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-5">
        <Link href="/" className="text-[17px] font-normal tracking-tight">
          OPIc <span className="font-medium text-primary">Bank</span>
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
        <Link
          href="/survey"
          className="rounded-full bg-primary px-4 py-1.5 text-[14px] font-normal text-primary-foreground transition-colors hover:bg-primary-press"
        >
          서베이 추천 받기
        </Link>
      </div>
    </header>
  );
}
