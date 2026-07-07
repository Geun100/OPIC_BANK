// 나만의 노트 저장소 — localStorage 기반 (Supabase 키 설정 시 서버 동기화로 확장 예정)
'use client';

export type NoteItem = {
  id: string; // 표현/질문의 en 텍스트를 id로 사용
  type: 'expression' | 'question';
  en: string;
  ko: string;
  savedAt: number;
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

export function onNotesChange(cb: () => void): () => void {
  window.addEventListener(EVENT, cb);
  window.addEventListener('storage', cb);
  return () => {
    window.removeEventListener(EVENT, cb);
    window.removeEventListener('storage', cb);
  };
}
