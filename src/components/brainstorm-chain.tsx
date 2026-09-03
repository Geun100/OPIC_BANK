// 모범답안 전에 보여주는 브레인스토밍 키워드 체인 (답 → 이유 → 부연 → 예시 → 마무리)
import type { BrainstormStep } from '@/data/topic-qa';

export function BrainstormChain({ steps }: { steps: BrainstormStep[] }) {
  return (
    <div className="mt-6 rounded-xl border border-border bg-card p-6">
      <p className="text-[13px] text-muted-foreground">브레인스토밍</p>
      <p className="mt-2 text-[15px] leading-7">
        {steps.map((s, i) => (
          <span key={i}>
            <span className="font-semibold text-primary-press">{s.en}</span>
            <span className="text-muted-foreground">
              {' '}
              ({s.label}: {s.ko})
            </span>
            {i < steps.length - 1 && <span className="text-muted-foreground"> – </span>}
          </span>
        ))}
      </p>
    </div>
  );
}
