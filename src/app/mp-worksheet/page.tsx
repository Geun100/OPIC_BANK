// MP 워크시트 — 콤보 주제별 답변을 MP→Reason·Detail→Feeling 구조로 정리하는 개인 학습 도구
'use client';

import { useEffect, useState } from 'react';
import { Trash2, Pencil, BookOpen } from 'lucide-react';
import { mpWorksheetExamples } from '@/data/mp-worksheet-examples';
import {
  getEntries,
  addEntry,
  updateEntry,
  removeEntry,
  onEntriesChange,
  type MPWorksheetEntry,
} from '@/lib/mp-worksheet';

type FormState = {
  topic: string;
  mp: string;
  reasonDetail: string;
  feeling: string;
  sentences: string;
  keywords: string;
};

const EMPTY_FORM: FormState = {
  topic: '',
  mp: '',
  reasonDetail: '',
  feeling: '',
  sentences: '',
  keywords: '',
};

export default function MPWorksheetPage() {
  const [entries, setEntries] = useState<MPWorksheetEntry[]>([]);
  const [form, setForm] = useState<FormState>(EMPTY_FORM);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [showExamples, setShowExamples] = useState(false);

  useEffect(() => {
    setEntries(getEntries());
    return onEntriesChange(() => setEntries(getEntries()));
  }, []);

  const submit = () => {
    if (!form.topic.trim() || !form.mp.trim()) return;
    if (editingId) {
      updateEntry(editingId, form);
      setEditingId(null);
    } else {
      addEntry(form);
    }
    setForm(EMPTY_FORM);
  };

  const startEdit = (entry: MPWorksheetEntry) => {
    setEditingId(entry.id);
    setForm({
      topic: entry.topic,
      mp: entry.mp,
      reasonDetail: entry.reasonDetail,
      feeling: entry.feeling,
      sentences: entry.sentences,
      keywords: entry.keywords,
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const cancelEdit = () => {
    setEditingId(null);
    setForm(EMPTY_FORM);
  };

  return (
    <div className="mx-auto max-w-3xl px-5 py-16">
      <p className="text-[13px] font-medium tracking-wide text-primary">MP WORKSHEET</p>
      <h1 className="mt-2 text-[34px]">MP 워크시트</h1>
      <p className="mt-3 text-[16px] text-muted-foreground">
        주제별로 Main Point(직접 답변) → Reason·Detail(이유·구체적 설명) → Feeling(감정)까지 한 줄씩
        정리하고, 실제로 말할 영어 문장과 핵심 키워드까지 채워보세요. 시험장 가는 길에 이 페이지만
        훑어봐도 됩니다.
      </p>
      <p className="mt-2 text-[12px] text-muted-foreground">
        이 브라우저에만 저장돼요. 기기를 바꾸면 안 보일 수 있어요.
      </p>

      {/* 예시 보기 토글 */}
      <button
        type="button"
        onClick={() => setShowExamples((v) => !v)}
        className="mt-6 flex items-center gap-1.5 rounded-full border border-border px-4 py-2 text-[13px] font-medium text-muted-foreground transition-colors hover:bg-accent"
      >
        <BookOpen className="size-4" />
        {showExamples ? '예시 숨기기' : '콤보 주제 16개 예시 보기'}
      </button>

      {showExamples && (
        <div className="mt-4 flex flex-col gap-3">
          {mpWorksheetExamples.map((ex) => (
            <details
              key={ex.topic}
              className="rounded-xl border border-border bg-card p-4 open:pb-5"
            >
              <summary className="cursor-pointer text-[15px] font-medium">{ex.topicName}</summary>
              <div className="mt-3 flex flex-col gap-2 text-[13px]">
                <p>
                  <span className="text-muted-foreground">MP </span>
                  {ex.mp}
                </p>
                <p>
                  <span className="text-muted-foreground">Reason·Detail </span>
                  {ex.reasonDetail}
                </p>
                <p>
                  <span className="text-muted-foreground">Feeling </span>
                  {ex.feeling}
                </p>
                <div className="mt-1 rounded-lg bg-muted p-3">
                  {ex.sentences.map((s, i) => (
                    <p key={i} className="text-[13px]">
                      {s}
                    </p>
                  ))}
                </div>
                <p className="text-[12px] text-muted-foreground">
                  핵심 키워드: {ex.keywords.join(', ')}
                </p>
              </div>
            </details>
          ))}
        </div>
      )}

      {/* 입력 폼 */}
      <section className="mt-8 rounded-xl border border-border bg-card p-6">
        <h2 className="text-[18px]">{editingId ? '워크시트 수정' : '나만의 워크시트 추가'}</h2>

        <div className="mt-4 flex flex-col gap-3">
          <input
            value={form.topic}
            onChange={(e) => setForm({ ...form, topic: e.target.value })}
            placeholder="주제 (예: 집, 카페, 여행...)"
            className="rounded-lg border border-border bg-background px-3 py-2 text-[14px] outline-none focus:border-primary"
          />
          <textarea
            value={form.mp}
            onChange={(e) => setForm({ ...form, mp: e.target.value })}
            placeholder="Main Point — 직접 답변 한 줄 (한글)"
            rows={2}
            className="rounded-lg border border-border bg-background px-3 py-2 text-[14px] outline-none focus:border-primary"
          />
          <textarea
            value={form.reasonDetail}
            onChange={(e) => setForm({ ...form, reasonDetail: e.target.value })}
            placeholder="Reason·Detail — 이유와 구체적 설명 (한글)"
            rows={3}
            className="rounded-lg border border-border bg-background px-3 py-2 text-[14px] outline-none focus:border-primary"
          />
          <textarea
            value={form.feeling}
            onChange={(e) => setForm({ ...form, feeling: e.target.value })}
            placeholder="Feeling — 감정 (한글)"
            rows={2}
            className="rounded-lg border border-border bg-background px-3 py-2 text-[14px] outline-none focus:border-primary"
          />
          <textarea
            value={form.sentences}
            onChange={(e) => setForm({ ...form, sentences: e.target.value })}
            placeholder="영어 문장 — 실제로 말할 완성된 문장 (여러 개면 줄바꿈으로 구분)"
            rows={3}
            className="rounded-lg border border-border bg-background px-3 py-2 text-[14px] outline-none focus:border-primary"
          />
          <input
            value={form.keywords}
            onChange={(e) => setForm({ ...form, keywords: e.target.value })}
            placeholder="핵심 키워드 (쉼표로 구분)"
            className="rounded-lg border border-border bg-background px-3 py-2 text-[14px] outline-none focus:border-primary"
          />
        </div>

        <div className="mt-4 flex gap-2">
          <button
            type="button"
            onClick={submit}
            className="rounded-lg bg-primary px-4 py-2 text-[13px] font-medium text-primary-foreground transition-transform active:scale-[0.97]"
          >
            {editingId ? '수정 완료' : '워크시트 추가'}
          </button>
          {editingId && (
            <button
              type="button"
              onClick={cancelEdit}
              className="rounded-lg border border-border px-4 py-2 text-[13px] font-medium text-muted-foreground transition-colors hover:bg-accent"
            >
              취소
            </button>
          )}
        </div>
      </section>

      {/* 저장된 워크시트 목록 */}
      {entries.length === 0 ? (
        <div className="mt-8 rounded-xl border border-dashed border-border p-10 text-center">
          <p className="text-[15px] text-muted-foreground">아직 만든 워크시트가 없어요.</p>
        </div>
      ) : (
        <div className="mt-8 flex flex-col gap-4">
          <h2 className="text-[18px]">
            내 워크시트{' '}
            <span className="text-[13px] text-muted-foreground">({entries.length})</span>
          </h2>
          {entries.map((entry) => (
            <div key={entry.id} className="rounded-xl border border-border bg-card p-5">
              <div className="flex items-start justify-between gap-3">
                <p className="text-[15px] font-medium">{entry.topic}</p>
                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    aria-label="워크시트 수정"
                    onClick={() => startEdit(entry)}
                    className="shrink-0 rounded-full p-1.5 text-muted-foreground transition-colors hover:bg-accent"
                  >
                    <Pencil className="size-4" />
                  </button>
                  <button
                    type="button"
                    aria-label="워크시트 삭제"
                    onClick={() => removeEntry(entry.id)}
                    className="shrink-0 rounded-full p-1.5 text-muted-foreground transition-colors hover:bg-accent hover:text-destructive"
                  >
                    <Trash2 className="size-4" />
                  </button>
                </div>
              </div>
              <div className="mt-3 flex flex-col gap-1.5 text-[13px]">
                <p>
                  <span className="text-muted-foreground">MP </span>
                  {entry.mp}
                </p>
                {entry.reasonDetail && (
                  <p>
                    <span className="text-muted-foreground">Reason·Detail </span>
                    {entry.reasonDetail}
                  </p>
                )}
                {entry.feeling && (
                  <p>
                    <span className="text-muted-foreground">Feeling </span>
                    {entry.feeling}
                  </p>
                )}
                {entry.sentences && (
                  <div className="mt-1 rounded-lg bg-muted p-3">
                    {entry.sentences.split('\n').map((s, i) =>
                      s.trim() ? (
                        <p key={i} className="text-[13px]">
                          {s}
                        </p>
                      ) : null,
                    )}
                  </div>
                )}
                {entry.keywords && (
                  <p className="text-[12px] text-muted-foreground">핵심 키워드: {entry.keywords}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
