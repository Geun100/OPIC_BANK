// OPIC Bank 사이트 푸터 — 메뉴 링크와 면책 문구
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-border bg-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-14 text-[13px] text-muted-foreground sm:grid-cols-3">
        <div>
          <p className="mb-2 text-[14px] text-foreground">
            OPIC <span className="text-primary">Bank</span> (오픽뱅크)
          </p>
          <p>오픽에 필요한 모든 표현을 한곳에 모아둔 아카이브</p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-foreground">가이드</p>
          <Link href="/guide" className="hover:text-primary">
            오픽이 처음이라면
          </Link>
          <Link href="/survey" className="hover:text-primary">
            서베이 추천
          </Link>
          <Link href="/notes" className="hover:text-primary">
            나만의 노트
          </Link>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-foreground">참고자료 · 안내</p>
          <Link href="/questions" className="hover:text-primary">
            질문 라이브러리
          </Link>
          <Link href="/expressions" className="hover:text-primary">
            표현 라이브러리
          </Link>
          <Link href="/grade" className="hover:text-primary">
            AL·IH 표현집
          </Link>
          <Link href="/about" className="hover:text-primary">
            소개
          </Link>
          <Link href="/contact" className="hover:text-primary">
            연락처
          </Link>
          <Link href="/privacy" className="hover:text-primary">
            개인정보처리방침
          </Link>
          <p className="mt-2">
            OPIc은 ACTFL의 상표입니다. 본 사이트는 비공식 학습 보조 자료를 제공하며, 시험 규정·일정
            등 공식 정보는 반드시 공식 홈페이지에서 확인하세요.
          </p>
        </div>
      </div>
    </footer>
  );
}
