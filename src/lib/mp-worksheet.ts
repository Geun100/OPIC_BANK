// MP 워크시트 저장소 — localStorage 기반, notes.ts와 동일 패턴
'use client';

export type MPWorksheetEntry = {
  id: string;
  topic: string;
  mp: string;
  reasonDetail: string;
  feeling: string;
  sentences: string; // 여러 문장은 줄바꿈으로 구분
  keywords: string; // 쉼표로 구분
  savedAt: number;
};

const KEY = 'opicbank.mp-worksheet.v1';
const EVENT = 'opicbank-mp-worksheet-changed';

export function getEntries(): MPWorksheetEntry[] {
  if (typeof window === 'undefined') return [];
  try {
    return JSON.parse(localStorage.getItem(KEY) ?? '[]') as MPWorksheetEntry[];
  } catch {
    return [];
  }
}

export function addEntry(data: Omit<MPWorksheetEntry, 'id' | 'savedAt'>) {
  const entry: MPWorksheetEntry = { ...data, id: crypto.randomUUID(), savedAt: Date.now() };
  localStorage.setItem(KEY, JSON.stringify([...getEntries(), entry]));
  window.dispatchEvent(new Event(EVENT));
}

export function updateEntry(id: string, data: Omit<MPWorksheetEntry, 'id' | 'savedAt'>) {
  const next = getEntries().map((e) => (e.id === id ? { ...e, ...data } : e));
  localStorage.setItem(KEY, JSON.stringify(next));
  window.dispatchEvent(new Event(EVENT));
}

export function removeEntry(id: string) {
  localStorage.setItem(KEY, JSON.stringify(getEntries().filter((e) => e.id !== id)));
  window.dispatchEvent(new Event(EVENT));
}

export function onEntriesChange(cb: () => void): () => void {
  window.addEventListener(EVENT, cb);
  window.addEventListener('storage', cb);
  return () => {
    window.removeEventListener(EVENT, cb);
    window.removeEventListener('storage', cb);
  };
}
