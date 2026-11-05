// 주제 허브 페이지에 붙는 운영자 직접 해설 — 출제 포인트·흔한 실수·서베이 팁·시험 경험. 비어 있으면 허브에 표시하지 않는다.

export type HubNote = {
  points?: string[]; // 이 주제에서 자주 묻는 포인트
  mistakes?: string[]; // 자주 하는 실수
  survey?: string; // 서베이에서 이 주제를 고를 때의 팁
  experience?: string; // 직접 본 시험에서 겪은 일
};

// 키 형식: 'topics/home' | 'sudden/weather' | 'roleplay/request'
// ⚠️ 직접 겪은 경험과 검증한 내용만 채울 것. AI가 지어낸 경험담은 넣지 않는다.
export const hubNotes: Record<string, HubNote> = {};
