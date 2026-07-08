// 가이드 4 — 처음 준비하는 사람 가이드 (준비 기간별 맞춤 로드맵)
import type { Metadata } from 'next';
import { GuideArticle } from '@/components/guide-article';
import { PrepPlan } from '@/components/prep-plan';

export const metadata: Metadata = {
  title: '오픽 처음 준비하는 사람 가이드 — 기간별 맞춤 준비 순서',
  description:
    '시험까지 1주 이하, 1주, 2주, 3주, 한 달 이상 — 남은 기간에 맞는 오픽 준비 로드맵을 안내합니다.',
};

export default function Page() {
  return (
    <GuideArticle
      step="STEP 4"
      title="처음 준비하는 사람 가이드"
      intro="남은 기간에 따라 준비 전략이 완전히 달라져요. 시험까지 남은 시간을 선택하면 그에 맞는 로드맵을 보여드릴게요."
      prev={{ href: '/guide/grades', label: '등급 체계' }}
    >
      <PrepPlan />
    </GuideArticle>
  );
}
