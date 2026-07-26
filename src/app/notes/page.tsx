// 나만의 노트 — 저장한 표현/질문 목록 (localStorage 기반) + 암기카드 복습 모드
'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Trash2, Copy, Check, Layers, ListFilter } from 'lucide-react';
import { getNotes, removeNote, onNotesChange, type NoteItem } from '@/lib/notes';
import { SaveButton } from '@/components/save-button';
import { NotesFlashcard } from '@/components/notes-flashcard';

export default function NotesPage() {
  const [notes, setNotes] = useState<NoteItem[]>([]);
  const [mounted, setMounted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [viewMode, setViewMode] = useState<'list' | 'flashcard'>('list');

  useEffect(() => {
    setNotes(getNotes());
    setMounted(true);
    return onNotesChange(() => setNotes(getNotes()));
  }, []);

  const expressions = notes.filter((n) => n.type === 'expression');
  const questions = notes.filter((n) => n.type === 'question');

  const copyAll = async () => {
    const text = notes.map((n) => `${n.en} — ${n.ko}`).join('\n');
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const Section = ({ title, items }: { title: string; items: NoteItem[] }) =>
    items.length === 0 ? null : (
      <section className="rounded-xl border border-border bg-card p-6">
        <h2 className="text-[18px]">
          {title} <span className="text-[13px] text-muted-foreground">({items.length})</span>
        </h2>
        <ul className="mt-4 flex flex-col gap-3">
          {items.map((n) => (
            <li
              key={n.id}
              className="flex items-start justify-between gap-3 border-b border-border/50 pb-3 last:border-0 last:pb-0"
            >
              <div>
                <p className="text-[15px] font-medium">{n.en}</p>
                <p className="mt-0.5 text-[13px] text-muted-foreground">{n.ko}</p>
              </div>
              <div className="flex items-center gap-1">
                <SaveButton id={n.id} type={n.type} en={n.en} ko={n.ko} />
                <button
                  type="button"
                  aria-label="노트에서 삭제"
                  onClick={() => removeNote(n.id)}
                  className="shrink-0 rounded-full p-1.5 text-muted-foreground transition-colors hover:bg-accent hover:text-destructive"
                >
                  <Trash2 className="size-4" />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </section>
    );

  return (
    <div className="mx-auto max-w-3xl px-5 py-16">
      <p className="text-[13px] font-medium tracking-wide text-primary">MY NOTES</p>
      <h1 className="mt-2 text-[34px]">나만의 노트</h1>
      <p className="mt-3 text-[16px] text-muted-foreground">
        라이브러리에서 별을 눌러 저장한 표현과 질문이 여기에 모여요. 시험 전날 이 페이지만 복습하면
        돼요.
      </p>
      <p className="mt-2 text-[12px] text-muted-foreground">
        현재 이 브라우저에만 저장돼요. 기기를 바꾸면 노트가 보이지 않아요.
      </p>

      {mounted && notes.length === 0 && (
        <div className="mt-10 rounded-xl border border-dashed border-border p-10 text-center">
          <p className="text-[15px] text-muted-foreground">아직 저장한 항목이 없어요.</p>
          <div className="mt-4 flex justify-center gap-3 text-[14px]">
            <Link href="/expressions" className="text-primary hover:underline">
              표현 구경하러 가기
            </Link>
            <Link href="/questions" className="text-primary hover:underline">
              질문 구경하러 가기
            </Link>
          </div>
        </div>
      )}

      {notes.length > 0 && (
        <>
          <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-b border-border pb-4">
            {/* 보기 모드 전환 스위처 */}
            <div className="flex items-center gap-1 rounded-xl bg-muted p-1 text-[13px]">
              <button
                type="button"
                onClick={() => setViewMode('list')}
                className={`flex items-center gap-1.5 rounded-lg px-3.5 py-1.5 font-medium transition-colors ${
                  viewMode === 'list'
                    ? 'bg-background shadow-sm text-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                <ListFilter className="size-4" />
                리스트 보기 ({notes.length})
              </button>
              <button
                type="button"
                onClick={() => setViewMode('flashcard')}
                className={`flex items-center gap-1.5 rounded-lg px-3.5 py-1.5 font-medium transition-colors ${
                  viewMode === 'flashcard'
                    ? 'bg-primary text-primary-foreground shadow-sm'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                <Layers className="size-4" />
                🎴 암기카드 복습 모드
              </button>
            </div>

            {/* 전체 복사 버튼 */}
            <button
              type="button"
              onClick={copyAll}
              className="flex items-center gap-1.5 rounded-full border border-border bg-card px-4 py-1.5 text-[13px] font-medium transition-colors hover:bg-accent"
            >
              {copied ? (
                <Check className="size-3.5 text-emerald-600" />
              ) : (
                <Copy className="size-3.5" />
              )}
              {copied ? '복사 완료!' : '전체 텍스트 복사'}
            </button>
          </div>

          {/* 보기 모드에 따른 분기 */}
          {viewMode === 'list' ? (
            <div className="mt-6 flex flex-col gap-6">
              <Section title="저장한 표현" items={expressions} />
              <Section title="저장한 질문" items={questions} />
            </div>
          ) : (
            <NotesFlashcard items={notes} />
          )}
        </>
      )}
    </div>
  );
}
