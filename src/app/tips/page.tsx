// 오픽 TIP 페이지 — 암기 표현이 아닌 실전 전략/화법 팁 모음
import type { Metadata } from 'next';
import { tipGroups } from '@/data/tips';

export const metadata: Metadata = {
  title: '오픽 TIP',
  description:
    '답변 구조, 자연스러운 화법, 서베이 전략, AI Practice(GPT 활용법), 시험 당일 팁까지 포함된 실전 오픽 전략 가이드.',
};

export default function TipsPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-16">
      <h1 className="text-[32px]">오픽 TIP</h1>
      <p className="mt-2 text-[15px] text-muted-foreground">
        표현을 외우는 것만큼 중요한 6가지 실전 전략과 화법 팁이에요.
      </p>

      <div className="mt-10 flex flex-col gap-8">
        {tipGroups.map((group) => (
          <section key={group.title} className="rounded-xl border border-border bg-card p-6">
            <h2 className="text-[20px] font-semibold text-primary">{group.title}</h2>
            <div className="mt-5 flex flex-col gap-6">
              {group.tips.map((tip) => (
                <div key={tip.title}>
                  <p className="text-[16px] font-medium">{tip.title}</p>
                  <p className="mt-1.5 whitespace-pre-line text-[14px] leading-relaxed text-muted-foreground">
                    {tip.body}
                  </p>
                  {tip.example && (
                    <ul className="mt-3 flex flex-col gap-2 rounded-lg bg-muted p-3.5">
                      {tip.example.map((ex) => (
                        <li key={ex.en} className="text-[13px]">
                          <div className="whitespace-pre-line italic text-secondary-foreground/90">
                            {ex.en}
                          </div>
                          <div className="mt-1 text-muted-foreground">— {ex.ko}</div>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
