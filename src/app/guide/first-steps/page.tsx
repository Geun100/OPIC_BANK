// 가이드 4 — 처음 준비하는 사람 가이드
import type { Metadata } from 'next';
import Link from 'next/link';
import { GuideArticle } from '@/components/guide-article';

export const metadata: Metadata = {
  title: '오픽 처음 준비하는 사람 가이드 — 4주 준비 순서',
  description:
    '오픽을 처음 준비한다면 이 순서로. 서베이 전략부터 콤보 연습, 시험 직전 체크까지 4주 로드맵.',
};

export default function Page() {
  return (
    <GuideArticle
      step="STEP 4"
      title="처음 준비하는 사람 가이드"
      intro="오픽은 벼락치기보다 '내 스토리 세트'를 만드는 시험이에요. 4주면 첫 시험 준비로 충분해요."
      prev={{ href: '/guide/grades', label: '등급 체계' }}
    >
      <section>
        <h2>1주차 — 구조 이해 + 서베이 확정</h2>
        <ul>
          <li>시험 진행 방식과 등급 체계를 이해해요 (STEP 1~3).</li>
          <li>
            <Link href="/survey" className="text-primary hover:underline">
              서베이 추천
            </Link>
            에서 내 조합을 정하고, 그 주제 목록을 고정해요. 이후 준비는 전부 이 주제 안에서만 해요.
          </li>
        </ul>
      </section>
      <section>
        <h2>2주차 — 주제별 스토리 만들기</h2>
        <ul>
          <li>선택한 주제마다 묘사/습관/경험 3각도의 “내 이야기”를 한글로 먼저 정리해요.</li>
          <li>
            <Link href="/expressions" className="text-primary hover:underline">
              표현 라이브러리
            </Link>
            에서 주제별 표현을 골라 내 스토리에 끼워 넣고, 쓸 표현은 노트에 저장해요.
          </li>
        </ul>
      </section>
      <section>
        <h2>3주차 — 소리 내어 연습</h2>
        <ul>
          <li>
            <Link href="/questions" className="text-primary hover:underline">
              질문 라이브러리
            </Link>
            의 콤보 질문에 실제로 소리 내어 답하고 녹음해서 들어봐요.
          </li>
          <li>서베이 추천에서 만든 GPT 프롬프트로 AI와 실전처럼 연습해요.</li>
          <li>돌발 빈출 주제(날씨·재활용·교통)도 이 주에 기본 답변을 만들어요.</li>
        </ul>
      </section>
      <section>
        <h2>4주차 — 실전 시뮬레이션 + 마무리</h2>
        <ul>
          <li>필러와 만능 패턴을 익혀 “생각할 시간을 버는 습관”을 만들어요.</li>
          <li>노트에 저장한 표현만 모아 시험 전날 최종 복습해요.</li>
          <li>시험 당일: 서베이는 연습한 조합 그대로, 난이도는 목표 등급 전략대로 선택해요.</li>
        </ul>
      </section>
    </GuideArticle>
  );
}
