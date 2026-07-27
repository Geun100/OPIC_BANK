// 소개 페이지 — 사이트 운영 목적과 운영자 정보
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '소개',
  description: 'OPIC Bank는 오픽 표현과 예상 질문을 한곳에 모아둔 학습 아카이브입니다.',
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-2xl px-5 py-16">
      <h1 className="text-[32px]">소개</h1>
      <div className="mt-8 flex flex-col gap-6 text-[15px] leading-relaxed text-muted-foreground">
        <p>
          OPIC Bank는 오픽(OPIc) 시험을 준비하는 학습자를 위해 주제별 예상 질문, 모범답안, 핵심
          표현을 한곳에 정리해 제공하는 학습 아카이브입니다.
        </p>
        <p>
          콤보 주제, 돌발 주제, 롤플레이까지 실제 시험 구조를 그대로 반영해 콘텐츠를 구성했고, 영어
          답안과 한국어 해석을 함께 제공해 학습자가 표현을 정확히 이해하고 암기할 수 있도록
          돕습니다.
        </p>
        <p>
          모든 예상 질문과 모범답안은 공개된 수험 후기와 학습 자료를 바탕으로 정리한 연습용
          콘텐츠이며, 실제 시험 문항과 다를 수 있습니다.
        </p>
        <p>
          운영 및 콘텐츠 관련 문의는{' '}
          <a href="/contact" className="text-primary hover:underline">
            연락처 페이지
          </a>
          를 통해 남겨주세요.
        </p>
      </div>
    </div>
  );
}
