// 답변 본문 안에서 핵심 표현을 찾아 굵게 표시하기 위한 텍스트 분리 유틸
export function splitByExpressions(text: string, expressions: string[]): string[] {
  const literal = expressions.filter((e) => !e.includes('...'));
  if (literal.length === 0) return [text];

  const pattern = literal
    .slice()
    .sort((a, b) => b.length - a.length)
    .map((e) => e.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
    .join('|');
  return text.split(new RegExp(`(${pattern})`, 'g'));
}

// 문장 단위로 분리 (마침표/물음표/느낌표 뒤 공백 기준)
export function splitSentences(text: string): string[] {
  return text
    .split(/(?<=[.?!])\s+/)
    .map((s) => s.trim())
    .filter(Boolean);
}

// 앞에서부터 n개 문장만 잘라 붙이기 — 기본(IM) 난이도용 짧은 버전 생성
export function truncateSentences(text: string, n: number): string {
  return splitSentences(text).slice(0, n).join(' ');
}

// 답변 문장 중 핵심 표현이 들어간 문장을 최대 3개 뽑아 "암기 추천 문장"으로 제공
export function pickMemorizeSentences(answer: string, expressions: string[], max = 3): string[] {
  const literal = expressions.filter((e) => !e.includes('...'));
  const sentences = splitSentences(answer);

  const picked: string[] = [];
  for (const sentence of sentences) {
    if (picked.length >= max) break;
    if (literal.some((e) => sentence.includes(e))) picked.push(sentence);
  }
  return picked;
}
