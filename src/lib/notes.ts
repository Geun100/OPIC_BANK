// 나만의 노트 저장소 — localStorage 기반 (Supabase 키 설정 시 서버 동기화로 확장 예정)
'use client';

export type MemoCategory = '단어' | '숙어' | '문장';

export type NoteItem = {
  id: string; // 표현/질문은 en 텍스트, 메모는 랜덤 UUID를 id로 사용
  type: 'expression' | 'question' | 'memo';
  en: string;
  ko: string;
  savedAt: number;
  category?: MemoCategory; // memo 타입에서만 사용
};

const KEY = 'opicbank.notes.v1';
const EVENT = 'opicbank-notes-changed';

export function getNotes(): NoteItem[] {
  if (typeof window === 'undefined') return [];
  try {
    return JSON.parse(localStorage.getItem(KEY) ?? '[]') as NoteItem[];
  } catch {
    return [];
  }
}

export function isSaved(id: string): boolean {
  return getNotes().some((n) => n.id === id);
}

export function toggleNote(item: Omit<NoteItem, 'savedAt'>): boolean {
  const notes = getNotes();
  const exists = notes.some((n) => n.id === item.id);
  const next = exists
    ? notes.filter((n) => n.id !== item.id)
    : [...notes, { ...item, savedAt: Date.now() }];
  localStorage.setItem(KEY, JSON.stringify(next));
  window.dispatchEvent(new Event(EVENT));
  return !exists; // 저장됐으면 true
}

export function removeNote(id: string) {
  localStorage.setItem(KEY, JSON.stringify(getNotes().filter((n) => n.id !== id)));
  window.dispatchEvent(new Event(EVENT));
}

export function addMemo(en: string, ko: string, category: MemoCategory) {
  const item: NoteItem = {
    id: crypto.randomUUID(),
    type: 'memo',
    en,
    ko,
    category,
    savedAt: Date.now(),
  };
  localStorage.setItem(KEY, JSON.stringify([...getNotes(), item]));
  window.dispatchEvent(new Event(EVENT));
}

export function updateMemo(id: string, en: string, ko: string, category: MemoCategory) {
  const next = getNotes().map((n) => (n.id === id ? { ...n, en, ko, category } : n));
  localStorage.setItem(KEY, JSON.stringify(next));
  window.dispatchEvent(new Event(EVENT));
}

export function exportNotes() {
  const blob = new Blob([JSON.stringify(getNotes(), null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'opicbank-notes.json';
  a.click();
  URL.revokeObjectURL(url);
}

export function importNotes(json: string) {
  const imported = JSON.parse(json) as NoteItem[];
  const existing = getNotes();
  const existingIds = new Set(existing.map((n) => n.id));
  const merged = [...existing, ...imported.filter((n) => !existingIds.has(n.id))];
  localStorage.setItem(KEY, JSON.stringify(merged));
  window.dispatchEvent(new Event(EVENT));
}

export function onNotesChange(cb: () => void): () => void {
  window.addEventListener(EVENT, cb);
  window.addEventListener('storage', cb);
  return () => {
    window.removeEventListener(EVENT, cb);
    window.removeEventListener('storage', cb);
  };
}
