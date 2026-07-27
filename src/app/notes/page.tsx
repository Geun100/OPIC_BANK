// 나만의 노트 — 저장한 표현/질문 목록 (localStorage 기반) + 암기카드 복습 모드
'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { Trash2, Copy, Check, Layers, ListFilter, Pencil, Download, Upload } from 'lucide-react';
import {
  getNotes,
  removeNote,
  onNotesChange,
  addMemo,
  updateMemo,
  exportNotes,
  importNotes,
  type NoteItem,
  type MemoCategory,
} from '@/lib/notes';
import { SaveButton } from '@/components/save-button';
import { NotesFlashcard } from '@/components/notes-flashcard';

const MEMO_CATEGORIES: MemoCategory[] = ['단어', '숙어', '문장'];

export default function NotesPage() {
  const [notes, setNotes] = useState<NoteItem[]>([]);
  const [mounted, setMounted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [viewMode, setViewMode] = useState<'list' | 'flashcard'>('list');

  const [memoCategory, setMemoCategory] = useState<MemoCategory>('단어');
  const [memoEn, setMemoEn] = useState('');
  const [memoKo, setMemoKo] = useState('');
  const [editingId, setEditingId] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setNotes(getNotes());
    setMounted(true);
    return onNotesChange(() => setNotes(getNotes()));
  }, []);

  const expressions = notes.filter((n) => n.type === 'expression');
  const questions = notes.filter((n) => n.type === 'question');
  const memos = notes.filter((n) => n.type === 'memo');

  const submitMemo = () => {
    if (!memoEn.trim() || !memoKo.trim()) return;
    if (editingId) {
      updateMemo(editingId, memoEn.trim(), memoKo.trim(), memoCategory);
      setEditingId(null);
    } else {
      addMemo(memoEn.trim(), memoKo.trim(), memoCategory);
    }
    setMemoEn('');
    setMemoKo('');
  };

  const startEdit = (memo: NoteItem) => {
    setEditingId(memo.id);
    setMemoEn(memo.en);
    setMemoKo(memo.ko);
    setMemoCategory(memo.category ?? '단어');
  };

  const handleImportFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    importNotes(await file.text());
    e.target.value = '';
  };

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

  const MemoSection = ({ items }: { items: NoteItem[] }) =>
    items.length === 0 ? null : (
      <section className="rounded-xl border border-border bg-card p-6">
        <h2 className="text-[18px]">
          내가 적은 메모 <span className="text-[13px] text-muted-foreground">({items.length})</span>
        </h2>
        <ul className="mt-4 flex flex-col gap-3">
          {items.map((n) => (
            <li
              key={n.id}
              className="flex items-start justify-between gap-3 border-b border-border/50 pb-3 last:border-0 last:pb-0"
            >
              <div>
                <span className="rounded-full bg-muted px-2 py-0.5 text-[11px] text-muted-foreground">
                  {n.category}
                </span>
                <p className="mt-1 text-[15px] font-medium">{n.en}</p>
                <p className="mt-0.5 text-[13px] text-muted-foreground">{n.ko}</p>
              </div>
              <div className="flex items-center gap-1">
                <button
                  type="button"
                  aria-label="메모 수정"
                  onClick={() => startEdit(n)}
                  className="shrink-0 rounded-full p-1.5 text-muted-foreground transition-colors hover:bg-accent"
                >
                  <Pencil className="size-4" />
                </button>
                <button
                  type="button"
                  aria-label="메모 삭제"
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
        현재 이 브라우저에만 저장돼요. 기기를 바꾸면 노트가 보이지 않아요. 아래 내보내기로 백업하고
        다른 기기에서 불러올 수 있어요.
      </p>

      {/* 직접 메모 추가 폼 */}
      <section className="mt-8 rounded-xl border border-border bg-card p-6">
        <div className="flex items-center justify-between">
          <h2 className="text-[18px]">{editingId ? '메모 수정' : '메모 직접 추가'}</h2>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={exportNotes}
              className="flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-[12px] font-medium text-muted-foreground transition-colors hover:bg-accent"
            >
              <Download className="size-3.5" />
              내보내기
            </button>
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-[12px] font-medium text-muted-foreground transition-colors hover:bg-accent"
            >
              <Upload className="size-3.5" />
              불러오기
            </button>
            <input
              ref={fileInputRef}
              type="file"
              accept="application/json"
              onChange={handleImportFile}
              className="hidden"
            />
          </div>
        </div>

        <div className="mt-4 flex gap-1.5">
          {MEMO_CATEGORIES.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setMemoCategory(c)}
              className={`rounded-full px-3 py-1 text-[13px] font-medium transition-colors ${
                memoCategory === c
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-muted-foreground hover:text-foreground'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-3 flex flex-col gap-2 sm:flex-row">
          <input
            value={memoEn}
            onChange={(e) => setMemoEn(e.target.value)}
            placeholder="영어 (단어·숙어·문장)"
            className="flex-1 rounded-lg border border-border bg-background px-3 py-2 text-[14px] outline-none focus:border-primary"
          />
          <input
            value={memoKo}
            onChange={(e) => setMemoKo(e.target.value)}
            placeholder="한국어 뜻"
            className="flex-1 rounded-lg border border-border bg-background px-3 py-2 text-[14px] outline-none focus:border-primary"
          />
        </div>

        <div className="mt-3 flex gap-2">
          <button
            type="button"
            onClick={submitMemo}
            className="rounded-lg bg-primary px-4 py-2 text-[13px] font-medium text-primary-foreground transition-transform active:scale-[0.97]"
          >
            {editingId ? '수정 완료' : '메모 추가'}
          </button>
          {editingId && (
            <button
              type="button"
              onClick={() => {
                setEditingId(null);
                setMemoEn('');
                setMemoKo('');
              }}
              className="rounded-lg border border-border px-4 py-2 text-[13px] font-medium text-muted-foreground transition-colors hover:bg-accent"
            >
              취소
            </button>
          )}
        </div>
      </section>

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
              <MemoSection items={memos} />
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
