// 오픽 TIP 페이지 — 암기 표현이 아닌 실전 전략/화법 팁 모음
import type { Metadata } from 'next';
import { tipGroups } from '@/data/tips';

export const metadata: Metadata = {
  title: '오픽 TIP',
  description: '암기 표현이 아닌, 답변 구조·속도·서베이 선택 같은 실전 전략 팁 모음.',
};

export default function TipsPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-16">
      <h1 className="text-[32px]">오픽 TIP</h1>
      <p className="mt-2 text-[15px] text-muted-foreground">
        표현을 외우는 것만큼 중요한 실전 전략과 화법 팁이에요.
      </p>

      <div className="mt-10 flex flex-col gap-8">
        {tipGroups.map((group) => (
          <section key={group.title} className="rounded-xl border border-border bg-card p-6">
            <h2 className="text-[20px]">{group.title}</h2>
            <div className="mt-4 flex flex-col gap-6">
              {group.tips.map((tip) => (
                <div key={tip.title}>
                  <p className="text-[16px] font-medium">{tip.title}</p>
                  <p className="mt-1 text-[14px] text-muted-foreground">{tip.body}</p>
                  {tip.example && (
                    <ul className="mt-2 flex flex-col gap-1.5 rounded-lg bg-muted p-3">
                      {tip.example.map((ex) => (
                        <li key={ex.en} className="text-[13px]">
                          <span className="italic text-secondary-foreground/80">{ex.en}</span>
                          <span className="ml-2 text-muted-foreground">— {ex.ko}</span>
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

      <p className="mt-10 rounded-lg bg-muted p-4 text-[12px] text-muted-foreground">
        출처: 써니(luckysunnyc) 2026 오픽 인사이트 자료를 요약·각색했습니다. 원자료의 무단
        복제·배포는 금지되어 있으니 외부 공개 전 저작권 확인이 필요해요.
      </p>
    </div>
  );
}
