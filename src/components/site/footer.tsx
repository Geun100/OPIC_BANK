// OPIC Sprint 사이트 푸터 — 메뉴 링크와 면책 문구
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-border bg-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-14 text-[13px] text-muted-foreground sm:grid-cols-3">
        <div>
          <p className="mb-2 text-[14px] text-foreground">
            OPIC <span className="text-primary">Sprint</span>
          </p>
          <p>시험이 언제든, 오늘 뭘 해야 하는지 바로 알려주는 오픽 준비 스프린트</p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-foreground">스프린트</p>
          <Link href="/guide" className="hover:text-primary">
            오픽이 처음이라면
          </Link>
          <Link href="/sprint/d14" className="hover:text-primary">
            D-14 스프린트
          </Link>
          <Link href="/sprint/d7" className="hover:text-primary">
            D-7 스프린트
          </Link>
          <Link href="/sprint/d1" className="hover:text-primary">
            D-1 벼락치기
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
          <p className="mt-2">
            OPIc은 ACTFL의 상표입니다. 본 사이트는 비공식 학습 보조 자료를 제공하며, 시험 규정·일정
            등 공식 정보는 반드시 공식 홈페이지에서 확인하세요.
          </p>
        </div>
      </div>
    </footer>
  );
}
