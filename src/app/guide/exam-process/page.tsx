// 가이드 2 — 시험 진행 방식
import type { Metadata } from 'next';
import { GuideArticle } from '@/components/guide-article';

export const metadata: Metadata = {
  title: '오픽 시험 진행 방식 — 40분 동안 일어나는 일',
  description:
    '백그라운드 서베이, 셀프 난이도 설정, 콤보 질문, 난이도 재조정까지. 오픽 시험이 실제로 어떻게 진행되는지 순서대로 설명합니다.',
};

export default function Page() {
  return (
    <GuideArticle
      step="STEP 2"
      title="시험 진행 방식"
      intro="오픽의 독특한 구조 — 서베이, 난이도 설정, 콤보 질문 — 를 이해하면 준비 방향이 명확해져요."
      prev={{ href: '/guide/what-is-opic', label: 'OPIc 시험 소개' }}
      next={{ href: '/guide/grades', label: '등급 체계' }}
    >
      <section>
        <h2>시험 흐름 한눈에</h2>
        <ul>
          <li>
            <strong>① 백그라운드 서베이</strong> — 직업·거주 형태·취미 등을 선택해요.
            여가·취미·운동·휴가에서 최소 12개 항목을 채워야 하고, 여기서 고른 주제 6개 중 약 3개가
            실제 문제로 출제돼요.
          </li>
          <li>
            <strong>② 셀프 난이도 설정</strong> — 질문의 어려운 정도를 스스로 선택해요. 목표 등급에
            따라 전략이 달라져요.
          </li>
          <li>
            <strong>③ 본 시험 (15문항, 약 40분)</strong> — 1번 자기소개(채점 제외)를 시작으로 세트
            5개가 이어져요: 세트1(2~4번 서베이 주제) → 세트2(5~7번 서베이 또는 돌발) → 세트3(8~10번
            돌발) → 세트4(11~13번 롤플레이) → 세트5(14~15번 어드밴스, 난이도 5~6 선택자만).
          </li>
          <li>
            <strong>④ 중간 난이도 재조정</strong> — 시험 중간에 “더 어려운/쉬운 질문” 여부를 다시
            고를 수 있어요.
          </li>
        </ul>
      </section>
      <section>
        <h2>콤보 질문이 핵심이에요</h2>
        <p className="mt-2">
          각 세트 안에서는 같은 주제로 <strong>묘사 → 습관/루틴 → 과거 경험</strong> 순서의 질문이
          연달아 나와요. 예를 들어 영화를 골랐다면 “좋아하는 영화 장르 묘사 → 영화 보기 전후 루틴 →
          기억에 남는 영화 경험”처럼요. 그래서 주제 하나를 준비할 때 세 각도를 모두 준비해야 해요.
        </p>
      </section>
      <section>
        <h2>돌발 주제와 롤플레이</h2>
        <ul>
          <li>
            <strong>돌발 주제</strong> — 서베이에서 안 골라도 나오는 주제(날씨, 재활용, 교통 등).
            피할 수 없으니 빈출 주제는 기본 준비가 필요해요.
          </li>
          <li>
            <strong>롤플레이</strong> — 후반부에 나오는 상황극. “주어진 상황에서 질문 3~4개 하기”,
            “문제 상황 해결하기” 유형이에요.
          </li>
        </ul>
      </section>
    </GuideArticle>
  );
}
