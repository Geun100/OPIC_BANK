// 서베이 추천 페이지 — 위저드 렌더링 + SEO 메타데이터
import type { Metadata } from 'next';
import { SurveyWizard } from '@/components/survey-wizard';

export const metadata: Metadata = {
  title: '오픽 서베이 추천 — 나에게 유리한 조합 찾기',
  description:
    '목표 등급(IM·IH·AL)과 성향에 맞는 오픽 백그라운드 서베이 조합을 추천하고, 그 조합으로 연습할 수 있는 GPT 프롬프트까지 만들어 드립니다.',
};

export default function SurveyPage() {
  return (
    <div className="mx-auto max-w-2xl px-5 py-16">
      <p className="text-[13px] font-medium tracking-wide text-primary">SURVEY</p>
      <h1 className="mt-2 text-[34px]">서베이 추천</h1>
      <p className="mt-3 text-[16px] text-muted-foreground">
        오픽은 시험 범위를 내가 정하는 시험이에요. 백그라운드 서베이에서 무엇을 고르느냐가 시험의
        절반을 결정해요. 세 번의 선택으로 나에게 유리한 조합을 찾아보세요.
      </p>
      <div className="mt-10">
        <SurveyWizard />
      </div>
    </div>
  );
}
