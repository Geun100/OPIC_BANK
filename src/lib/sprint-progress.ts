// 스프린트 진행 상황 저장소 — localStorage 기반, "Day N 완료" 체크 상태를 관리
'use client';

const KEY_PREFIX = 'opicsprint.progress.';
const EVENT = 'opicsprint-progress-changed';

function key(sprintKey: string) {
  return `${KEY_PREFIX}${sprintKey}`;
}

export function getDone(sprintKey: string): string[] {
  if (typeof window === 'undefined') return [];
  try {
    return JSON.parse(localStorage.getItem(key(sprintKey)) ?? '[]') as string[];
  } catch {
    return [];
  }
}

export function isDayDone(sprintKey: string, day: string): boolean {
  return getDone(sprintKey).includes(day);
}

export function toggleDay(sprintKey: string, day: string) {
  const done = getDone(sprintKey);
  const next = done.includes(day) ? done.filter((d) => d !== day) : [...done, day];
  localStorage.setItem(key(sprintKey), JSON.stringify(next));
  window.dispatchEvent(new Event(EVENT));
}

export function onProgressChange(cb: () => void): () => void {
  window.addEventListener(EVENT, cb);
  window.addEventListener('storage', cb);
  return () => {
    window.removeEventListener(EVENT, cb);
    window.removeEventListener('storage', cb);
  };
}
