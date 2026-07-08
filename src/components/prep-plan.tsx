// 준비 기간 선택형 맞춤 가이드 — 1주 이하/1주/2주/3주/한 달 이상별 로드맵
'use client';

import { useState } from 'react';
import Link from 'next/link';

type PeriodKey = 'rush' | 'week1' | 'week2' | 'week3' | 'month';

type Plan = {
  label: string;
  headline: string;
  strategy: string;
  phases: { title: string; items: string[] }[];
  warning?: string;
};

const plans: Record<PeriodKey, Plan> = {
  rush: {
    label: '1주 이하',
    headline: '벼락치기 모드 — 버릴 건 버리고 3가지만',
    strategy:
      '시간이 없을 땐 범위를 늘리는 게 아니라 줄이는 게 전략이에요. 자기소개 + 콤보 3개 + 필러, 이 세 가지만 완성해요.',
    phases: [
      {
        title: 'D-7~D-4 — 서베이 확정 + 최소 스토리',
        items: [
          '서베이 추천에서 조합을 정하고 그대로 고정해요. 고민할 시간도 아까워요.',
          '자기소개 30초 버전을 완성하고 통째로 입에 붙여요 (1번 고정 출제).',
          '내 서베이 주제 중 3개만 골라 묘사·습관·경험 스토리를 만들어요.',
        ],
      },
      {
        title: 'D-3~D-1 — 입에 붙이기',
        items: [
          '필러(Well... / Let me think...)를 익혀 침묵을 없애요. 벼락치기의 최대 리스크는 정적이에요.',
          '만능 문장 패턴 5개로 어떤 질문에도 뼈대를 세울 수 있게 해요.',
          '모의고사 영상에 답변을 녹음하고, 서베이 추천의 GPT 프롬프트로 피드백을 받아요 — 실제 벼락치기 IH 달성 후기에서 가장 효과 있었다고 꼽는 단계예요.',
          '시험 전날: 나만의 노트에 저장한 것만 소리 내어 최종 복습해요.',
        ],
      },
    ],
    warning:
      '이 기간엔 돌발 주제까지 다 준비하기 어려워요. 돌발이 나오면 만능 패턴 + 필러로 버티는 걸 목표로 하세요.',
  },
  week1: {
    label: '1주',
    headline: '1주 집중 — 하루 하나씩 콤보를 끝낸다',
    strategy: '7일이면 최소 준비는 가능해요. 매일 콤보 주제 하나씩 스토리를 완성하는 리듬이에요.',
    phases: [
      {
        title: 'Day 1~2 — 구조 이해 + 서베이',
        items: [
          '시험 진행 방식(STEP 2)을 읽고 콤보 구조를 이해해요.',
          '서베이 추천에서 조합 확정, 자기소개 완성.',
        ],
      },
      {
        title: 'Day 3~5 — 콤보 스토리 3~4개',
        items: [
          '하루에 주제 하나씩: 묘사·습관·경험 3각도 스토리를 만들고 소리 내어 연습해요.',
          '표현 라이브러리에서 그 주제 표현을 노트에 저장하며 끼워 넣어요.',
        ],
      },
      {
        title: 'Day 6~7 — 돌발 최소 방어 + 마무리',
        items: [
          '돌발 빈출(날씨·재활용·교통)만 기본 답변 한 개씩 만들어요.',
          '서베이 추천의 GPT 프롬프트로 실전처럼 1회 모의 연습.',
          '전날 밤엔 새 내용 금지 — 노트 복습만.',
        ],
      },
    ],
  },
  week2: {
    label: '2주',
    headline: '2주 표준 — 스토리 만들기와 말하기 연습을 반반',
    strategy: '2주면 "준비"와 "연습"을 나눌 수 있어요. 1주차에 만들고, 2주차에 입에 붙여요.',
    phases: [
      {
        title: '1주차 — 구조 + 스토리 세트 완성',
        items: [
          '가이드 STEP 1~3으로 시험 구조와 등급 전략을 이해해요.',
          '서베이 추천으로 조합 확정, 주제별 묘사·습관·경험 스토리를 전부 만들어요.',
          '표현 라이브러리에서 쓸 표현을 노트에 저장해요.',
        ],
      },
      {
        title: '2주차 — 소리 내어 연습 + 실전 감각',
        items: [
          '질문 라이브러리의 콤보 질문에 녹음하며 답해보고 다시 들어봐요.',
          'GPT 프롬프트로 매일 15분 실전 연습, 돌발 빈출 3개도 이 주에 커버해요.',
          '마지막 이틀은 필러·만능 패턴 다지기 + 노트 총복습.',
        ],
      },
    ],
  },
  week3: {
    label: '3주',
    headline: '3주 안정 — 돌발과 롤플레이까지 챙긴다',
    strategy: '3주부터는 콤보 외 영역(돌발·롤플레이)까지 준비 범위에 넣을 여유가 생겨요.',
    phases: [
      {
        title: '1주차 — 구조 이해 + 서베이 + 자기소개',
        items: [
          '가이드 STEP 1~3 정독, 서베이 추천으로 조합 확정.',
          '자기소개와 콤보 주제 절반의 스토리를 완성해요.',
        ],
      },
      {
        title: '2주차 — 스토리 완성 + 돌발 방어',
        items: [
          '나머지 콤보 스토리 완성, 표현을 노트에 축적해요.',
          '돌발 빈출 6개 주제에 기본 답변을 하나씩 만들어요.',
        ],
      },
      {
        title: '3주차 — 실전 연습 + 롤플레이',
        items: [
          'GPT 프롬프트로 매일 실전 연습, 녹음해서 들어봐요.',
          '롤플레이 유형(질문 3~4개 던지기, 문제 해결)을 패턴으로 연습해요.',
          '시험 전날은 노트 복습만.',
        ],
      },
    ],
  },
  month: {
    label: '한 달 이상',
    headline: '4주+ 정석 — 스토리 자산을 쌓아 등급 상한을 노린다',
    strategy:
      '시간이 충분하니 벼락치기가 아니라 "내 스토리 세트"를 만들어요. 이 기간이면 목표 등급을 한 단계 올려 잡는 것도 가능해요.',
    phases: [
      {
        title: '1주차 — 구조 이해 + 서베이 확정',
        items: [
          '시험 진행 방식과 등급 체계를 이해해요 (STEP 1~3).',
          '서베이 추천에서 조합을 정하고 주제 목록을 고정해요. 이후 준비는 전부 이 안에서만.',
        ],
      },
      {
        title: '2주차 — 주제별 스토리 만들기',
        items: [
          '주제마다 묘사·습관·경험 3각도의 "내 이야기"를 한글로 먼저 정리해요.',
          '표현 라이브러리에서 표현을 골라 끼워 넣고 노트에 저장해요.',
        ],
      },
      {
        title: '3주차 — 소리 내어 연습',
        items: [
          '질문 라이브러리 콤보 질문에 녹음하며 답하고 다시 들어봐요.',
          'GPT 프롬프트로 실전 연습, 돌발 빈출도 이 주에 커버해요.',
        ],
      },
      {
        title: '4주차 — 실전 시뮬레이션 + 마무리',
        items: [
          '필러·만능 패턴으로 "생각할 시간을 버는 습관"을 만들어요.',
          'AL·IH 표현집에서 등급 올리는 표현을 보강해요.',
          '시험 전날: 노트 복습만. 당일엔 연습한 서베이·난이도 전략 그대로.',
        ],
      },
    ],
  },
};

const order: PeriodKey[] = ['rush', 'week1', 'week2', 'week3', 'month'];

export function PrepPlan() {
  const [period, setPeriod] = useState<PeriodKey>('month');
  const plan = plans[period];

  return (
    <div>
      <p className="mb-3 text-[14px] text-muted-foreground">시험까지 남은 기간을 선택하세요</p>
      <div className="flex flex-wrap gap-2">
        {order.map((key) => (
          <button
            key={key}
            onClick={() => setPeriod(key)}
            className={`rounded-full px-4 py-1.5 text-[14px] transition-colors ${
              period === key
                ? 'bg-primary text-primary-foreground'
                : 'border border-border bg-card text-foreground hover:border-primary/50'
            }`}
          >
            {plans[key].label}
          </button>
        ))}
      </div>

      <div className="mt-6 rounded-xl bg-brand-dark p-6 text-white">
        <h2 className="text-[20px]">{plan.headline}</h2>
        <p className="mt-2 text-[14px] leading-relaxed text-white/80">{plan.strategy}</p>
      </div>

      <div className="mt-6 flex flex-col gap-5">
        {plan.phases.map((phase) => (
          <section key={phase.title} className="rounded-xl border border-border bg-card p-6">
            <h3 className="text-[17px] font-medium">{phase.title}</h3>
            <ul className="mt-3 list-disc pl-5 text-[14px] leading-relaxed text-secondary-foreground">
              {phase.items.map((item) => (
                <li key={item} className="mt-1.5">
                  {item}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      {plan.warning && (
        <p className="mt-5 rounded-lg bg-cream p-4 text-[13px] leading-relaxed text-foreground">
          {plan.warning}
        </p>
      )}

      <div className="mt-8 flex flex-wrap gap-3 text-[14px]">
        <Link href="/survey" className="text-primary hover:underline">
          서베이 추천 받기 →
        </Link>
        <Link href="/questions" className="text-primary hover:underline">
          질문 라이브러리 →
        </Link>
        <Link href="/expressions" className="text-primary hover:underline">
          표현 라이브러리 →
        </Link>
      </div>
    </div>
  );
}
