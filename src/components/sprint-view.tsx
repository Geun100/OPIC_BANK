// 스프린트 상세 화면 — 일자별 체크리스트 (localStorage 진행률 저장)
'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Check } from 'lucide-react';
import type { Sprint } from '@/data/sprint';
import { getDone, isDayDone, toggleDay, onProgressChange } from '@/lib/sprint-progress';

export function SprintView({ sprint }: { sprint: Sprint }) {
  const [done, setDone] = useState<string[]>([]);

  useEffect(() => {
    setDone(getDone(sprint.key));
    return onProgressChange(() => setDone(getDone(sprint.key)));
  }, [sprint.key]);

  const total = sprint.days.length;
  const doneCount = sprint.days.filter((d) => done.includes(d.day)).length;

  return (
    <div>
      <div className="rounded-xl bg-brand-dark p-6 text-white">
        <p className="text-[12px] tracking-widest text-primary-subdued">
          {sprint.label} · {sprint.sub}
        </p>
        <h1 className="mt-1 text-[24px]">{sprint.headline}</h1>
        <p className="mt-3 text-[14px] leading-relaxed text-white/80">{sprint.strategy}</p>
      </div>

      <div className="mt-5 flex items-center gap-3">
        <div className="h-2 flex-1 overflow-hidden rounded-full bg-muted">
          <div
            className="h-full rounded-full bg-primary transition-all"
            style={{ width: `${(doneCount / total) * 100}%` }}
          />
        </div>
        <span className="whitespace-nowrap text-[13px] text-muted-foreground">
          {doneCount} / {total} 완료
        </span>
      </div>

      <div className="mt-6 flex flex-col gap-4">
        {sprint.days.map((d) => {
          const checked = isDayDone(sprint.key, d.day);
          return (
            <section
              key={d.day}
              className={`rounded-xl border p-6 transition-colors ${
                checked ? 'border-primary/30 bg-accent/30' : 'border-border bg-card'
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-[12px] font-medium text-primary">{d.day}</p>
                  <h3 className="mt-0.5 text-[18px]">{d.title}</h3>
                </div>
                <button
                  onClick={() => toggleDay(sprint.key, d.day)}
                  aria-label={checked ? '완료 취소' : '완료 체크'}
                  className={`flex size-7 shrink-0 items-center justify-center rounded-full border transition-colors ${
                    checked
                      ? 'border-primary bg-primary text-primary-foreground'
                      : 'border-border text-transparent hover:border-primary/50'
                  }`}
                >
                  <Check className="size-4" />
                </button>
              </div>
              <ul className="mt-3 list-disc pl-5 text-[14px] leading-relaxed text-secondary-foreground">
                {d.tasks.map((t) => (
                  <li key={t} className="mt-1">
                    {t}
                  </li>
                ))}
              </ul>
              {d.links && (
                <div className="mt-4 flex flex-wrap gap-3 text-[13px]">
                  {d.links.map((l) => (
                    <Link key={l.href} href={l.href} className="text-primary hover:underline">
                      {l.label} →
                    </Link>
                  ))}
                </div>
              )}
            </section>
          );
        })}
      </div>

      <p className="mt-8 rounded-lg bg-muted p-4 text-[12px] text-muted-foreground">
        이 스프린트는 실제 수험 후기 기반 참고용 로드맵이에요. 진행 체크는 이 브라우저에만 저장돼요.
      </p>
    </div>
  );
}
