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
