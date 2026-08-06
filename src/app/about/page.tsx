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
          OPIC Bank는 원래 서비스로 만들려던 게 아니라, 제가 오픽을 준비하면서 직접 쓰려고 정리하기
          시작한 자료였습니다. 오픽 관련 정보는 유튜브·블로그·커뮤니티 여기저기에 흩어져 있어서,
          콤보 문제 구조가 어떻게 되는지, 서베이는 어떻게 골라야 하는지, 돌발 질문엔 어떤 표현을
          써야 하는지를 매번 여러 곳을 뒤져가며 모아야 했습니다.
        </p>
        <p>
          짧은 준비 기간 안에 그렇게 흩어진 자료를 일일이 찾아다닐 여유가 없어서, 질문 유형·상황별
          표현·답변 구조를 직접 정리했습니다. 그 정리본이 저한테 도움이 됐던 만큼 다른 준비생에게도
          도움이 될 수 있겠다는 생각에 웹사이트 형태로 만들어 공개한 것이 OPIC Bank입니다.
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
