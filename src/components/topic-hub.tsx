// 주제 허브 공용 레이아웃 — 같은 주제의 여러 질문(묘사·습관·경험 등)을 한 페이지에 모아 보여준다
import type { ComponentProps } from 'react';
import Link from 'next/link';
import { QAAnswerBlock } from '@/components/qa-answer-block';
import { hubNotes } from '@/data/hub-notes';

export type HubSection = {
  id: string;
  label: string;
  hint?: string;
  qa: ComponentProps<typeof QAAnswerBlock>['qa'];
  viewerId: string;
  disclaimer?: string;
};

export function TopicHub({
  noteKey,
  backHref,
  backLabel,
  eyebrow,
  title,
  lead,
  sections,
}: {
  noteKey: string;
  backHref: string;
  backLabel: string;
  eyebrow: string;
  title: string;
  lead: string;
  sections: HubSection[];
}) {
  const note = hubNotes[noteKey];
  // 섹션별 핵심 표현을 중복 없이 모아 한눈에 보는 표현 정리
  const allExpressions = Array.from(new Set(sections.flatMap((s) => s.qa.keyExpressions)));

  return (
    <div className="mx-auto max-w-3xl px-5 py-16">
      <Link href={backHref} className="text-[13px] text-primary hover:underline">
        ← {backLabel}
      </Link>
      <p className="mt-3 text-[13px] font-medium tracking-wide text-primary">{eyebrow}</p>
      <h1 className="mt-1 text-[30px]">{title}</h1>
      <p className="mt-2 text-[15px] text-muted-foreground">{lead}</p>

      <nav aria-label="질문 유형 바로가기" className="mt-6 flex flex-wrap gap-2">
        {sections.map((s) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            className="rounded-full border border-border px-4 py-1.5 text-[13px] font-medium text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
          >
            {s.label}
          </a>
        ))}
      </nav>

      {note && (
        <section className="mt-10 rounded-xl border border-border bg-card p-6">
          <h2 className="text-[20px]">이 주제, 이렇게 준비하세요</h2>
          {note.points && note.points.length > 0 && (
            <div className="mt-4">
              <h3 className="text-[15px] font-medium">자주 묻는 포인트</h3>
              <ul className="mt-2 list-disc pl-5 text-[14px] text-muted-foreground">
                {note.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
          )}
          {note.mistakes && note.mistakes.length > 0 && (
            <div className="mt-4">
              <h3 className="text-[15px] font-medium">흔한 실수</h3>
              <ul className="mt-2 list-disc pl-5 text-[14px] text-muted-foreground">
                {note.mistakes.map((m) => (
                  <li key={m}>{m}</li>
                ))}
              </ul>
            </div>
          )}
          {note.survey && (
            <div className="mt-4">
              <h3 className="text-[15px] font-medium">서베이에서 고를 때</h3>
              <p className="mt-2 text-[14px] text-muted-foreground">{note.survey}</p>
            </div>
          )}
          {note.experience && (
            <div className="mt-4">
              <h3 className="text-[15px] font-medium">직접 본 시험에서는</h3>
              <p className="mt-2 text-[14px] text-muted-foreground">{note.experience}</p>
            </div>
          )}
        </section>
      )}

      {sections.map((s) => (
        <section key={s.id} id={s.id} className="mt-14 scroll-mt-20">
          <h2 className="text-[22px]">{s.label}</h2>
          {s.hint && <p className="mt-1 text-[14px] text-muted-foreground">{s.hint}</p>}
          <QAAnswerBlock qa={s.qa} viewerId={s.viewerId} disclaimer={s.disclaimer} />
        </section>
      ))}

      {allExpressions.length > 0 && (
        <section className="mt-14 rounded-xl border border-border bg-card p-6">
          <h2 className="text-[20px]">이 주제 핵심 표현 모아보기</h2>
          <ul className="mt-4 flex flex-wrap gap-2">
            {allExpressions.map((e) => (
              <li
                key={e}
                className="rounded-full bg-muted px-3 py-1 text-[13px] text-muted-foreground"
              >
                {e}
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
