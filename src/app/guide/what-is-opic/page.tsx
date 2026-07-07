// 가이드 1 — OPIc 시험 소개
import type { Metadata } from 'next';
import { GuideArticle } from '@/components/guide-article';

export const metadata: Metadata = {
  title: 'OPIc(오픽)이란? 시험 소개',
  description:
    '오픽은 컴퓨터로 보는 영어 말하기 시험입니다. 토익스피킹과의 차이, 기업이 요구하는 이유까지 입문자 눈높이로 정리했습니다.',
};

export default function Page() {
  return (
    <GuideArticle
      step="STEP 1"
      title="OPIc 시험 소개"
      intro="오픽(OPIc)은 컴퓨터 화면 속 면접관의 질문에 말로 답하는 영어 말하기 시험이에요."
      next={{ href: '/guide/exam-process', label: '시험 진행 방식' }}
    >
      <section>
        <h2>어떤 시험인가요?</h2>
        <p className="mt-2">
          OPIc(Oral Proficiency Interview - computer)은 사람 면접관 대신 컴퓨터로 진행하는 1:1 영어
          인터뷰 시험이에요. 정해진 정답이 없고,{' '}
          <strong>내 이야기를 얼마나 자연스럽게 말하는지</strong>로 평가받아요. 문법이 완벽하지
          않아도 메시지가 잘 전달되면 좋은 등급을 받을 수 있다는 점이 다른 시험과 가장 큰 차이예요.
        </p>
      </section>
      <section>
        <h2>왜 다들 오픽을 볼까요?</h2>
        <ul>
          <li>
            대기업·공기업 채용에서 영어 말하기 성적으로 오픽 또는 토익스피킹을 요구하는 곳이 많아요.
          </li>
          <li>
            암기한 템플릿보다 자연스러운 말하기를 평가해서, 준비 방식이 회화 실력 향상과 직결돼요.
          </li>
          <li>
            시험 시작 전 <strong>백그라운드 서베이</strong>로 내가 말할 주제를 어느 정도 직접 고를
            수 있어요 — 전략이 통하는 시험이에요.
          </li>
        </ul>
      </section>
      <section>
        <h2>토익스피킹과 뭐가 다른가요?</h2>
        <ul>
          <li>
            <strong>오픽</strong> — 일상 회화·경험 중심. 내 이야기를 길게 풀어내는 힘이 중요.
          </li>
          <li>
            <strong>토익스피킹</strong> — 문제 유형이 고정적이고 비즈니스 상황 중심. 템플릿 연습이
            잘 통함.
          </li>
          <li>
            “내 얘기 하는 게 편하다”면 오픽, “정해진 틀이 편하다”면 토스가 잘 맞는 경향이 있어요.
          </li>
        </ul>
      </section>
    </GuideArticle>
  );
}
