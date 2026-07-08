// 서베이 추천 위저드 — 목표 등급 구간/성향 선택 → 추천 조합 + GPT 프롬프트
'use client';

import { useState } from 'react';
import { Check, Copy, RotateCcw } from 'lucide-react';
import { goalTierInfo, recommend, buildGptPrompt, type GoalTier, type Trait } from '@/data/survey';

type Step = 'tier' | 'style' | 'place' | 'result';

export function SurveyWizard() {
  const [step, setStep] = useState<Step>('tier');
  const [tier, setTier] = useState<GoalTier | null>(null);
  const [style, setStyle] = useState<Trait['style'] | null>(null);
  const [place, setPlace] = useState<Trait['place'] | null>(null);
  const [copied, setCopied] = useState(false);

  const reset = () => {
    setStep('tier');
    setTier(null);
    setStyle(null);
    setPlace(null);
    setCopied(false);
  };

  const optionBtn =
    'w-full rounded-xl border border-border bg-card p-5 text-left transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:shadow-[0_8px_24px_rgba(0,55,112,0.08)]';

  if (step === 'tier') {
    return (
      <div className="flex flex-col gap-3">
        <p className="mb-2 text-[14px] text-muted-foreground">
          1 / 3 — 목표 등급 구간을 선택하세요
        </p>
        {(Object.keys(goalTierInfo) as GoalTier[]).map((t) => (
          <button
            key={t}
            className={optionBtn}
            onClick={() => {
              setTier(t);
              setStep('style');
            }}
          >
            <div className="flex items-baseline justify-between">
              <span className="text-[17px]">{goalTierInfo[t].label}</span>
              <span className="text-[13px] text-primary">{goalTierInfo[t].difficulty}</span>
            </div>
            <p className="mt-1 text-[13px] text-muted-foreground">{goalTierInfo[t].keyPoint}</p>
          </button>
        ))}
      </div>
    );
  }

  if (step === 'style') {
    return (
      <div className="flex flex-col gap-3">
        <p className="mb-2 text-[14px] text-muted-foreground">
          2 / 3 — 어느 쪽이 더 나에게 가까운가요?
        </p>
        <button
          className={optionBtn}
          onClick={() => {
            setStyle('safe');
            setStep('place');
          }}
        >
          <span className="text-[16px]">익숙한 이야기를 여러 번 써먹는 게 편해요</span>
          <p className="mt-1 text-[13px] text-muted-foreground">
            안전형 — 주제 수를 최소로 좁혀서 스토리 재활용을 극대화해요
          </p>
        </button>
        <button
          className={optionBtn}
          onClick={() => {
            setStyle('variety');
            setStep('place');
          }}
        >
          <span className="text-[16px]">같은 얘기만 하면 오히려 헷갈려요</span>
          <p className="mt-1 text-[13px] text-muted-foreground">
            다재형 — 소재를 조금 넓혀서 답변이 겹치지 않게 해요
          </p>
        </button>
      </div>
    );
  }

  if (step === 'place') {
    return (
      <div className="flex flex-col gap-3">
        <p className="mb-2 text-[14px] text-muted-foreground">3 / 3 — 쉬는 날 나는 보통...</p>
        <button
          className={optionBtn}
          onClick={() => {
            setPlace('indoor');
            setStep('result');
          }}
        >
          <span className="text-[16px]">집에서 영화·음악과 함께 보내요</span>
          <p className="mt-1 text-[13px] text-muted-foreground">실내형 — 영화·음악·집 중심 조합</p>
        </button>
        <button
          className={optionBtn}
          onClick={() => {
            setPlace('outdoor');
            setStep('result');
          }}
        >
          <span className="text-[16px]">밖에 나가서 걷거나 놀아야 해요</span>
          <p className="mt-1 text-[13px] text-muted-foreground">
            야외형 — 공원·해변·여행 중심 조합
          </p>
        </button>
      </div>
    );
  }

  // result
  if (!tier || !style || !place) return null;
  const trait: Trait = { style, place };
  const picks = recommend(tier, trait);
  const prompt = buildGptPrompt(tier, trait);
  const info = goalTierInfo[tier];

  return (
    <div className="flex flex-col gap-6">
      <div className="rounded-xl bg-brand-dark p-6 text-white">
        <p className="text-[12px] tracking-widest text-primary-subdued">추천 결과</p>
        <h2 className="mt-1 text-[22px]">
          {info.label} 목표 · {place === 'indoor' ? '실내형' : '야외형'} ·{' '}
          {style === 'safe' ? '안전형' : '다재형'}
        </h2>
        <p className="mt-3 text-[14px] text-white/80">
          <strong className="text-white">권장 난이도: {info.difficulty}</strong>
          <br />
          {info.keyPoint}
        </p>
      </div>

      <div>
        <h3 className="mb-3 text-[18px]">서베이에서 이렇게 선택하세요</h3>
        <div className="flex flex-col gap-3">
          {picks.map((p) => (
            <div key={p.category} className="rounded-xl border border-border bg-card p-5">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-[12px] text-muted-foreground">{p.category}</p>
                  <p className="mt-0.5 text-[16px] font-medium">{p.pick}</p>
                </div>
                <Check className="mt-1 size-4 shrink-0 text-primary" />
              </div>
              <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">{p.reason}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="mb-2 text-[18px]">이 조합으로 연습하기 — GPT 프롬프트</h3>
        <p className="mb-3 text-[13px] text-muted-foreground">
          아래 프롬프트를 복사해 ChatGPT 등에 붙여넣으면, 내 서베이 조합 기준으로 실전처럼 연습할 수
          있어요.
        </p>
        <div className="relative rounded-xl border border-border bg-muted p-5">
          <pre className="whitespace-pre-wrap font-sans text-[13px] leading-relaxed text-secondary-foreground">
            {prompt}
          </pre>
          <button
            onClick={async () => {
              await navigator.clipboard.writeText(prompt);
              setCopied(true);
              setTimeout(() => setCopied(false), 2000);
            }}
            className="absolute right-3 top-3 flex items-center gap-1.5 rounded-full bg-primary px-3.5 py-1.5 text-[12px] text-primary-foreground transition-colors hover:bg-primary-press"
          >
            {copied ? <Check className="size-3.5" /> : <Copy className="size-3.5" />}
            {copied ? '복사됨' : '프롬프트 복사'}
          </button>
        </div>
      </div>

      <button
        onClick={reset}
        className="flex w-fit items-center gap-1.5 text-[13px] text-muted-foreground hover:text-primary"
      >
        <RotateCcw className="size-3.5" /> 다시 추천받기
      </button>

      <p className="rounded-lg bg-muted p-4 text-[12px] text-muted-foreground">
        이 추천은 널리 쓰이는 수험 전략을 정리한 참고용이에요. 서베이 선택지는 실제 시험 화면과 다를
        수 있으며, 최종 선택은 본인의 실제 경험(말할 거리가 있는 주제)을 우선하세요.
      </p>
    </div>
  );
}
