// AL/IH 표현집 데이터 — 목표 등급별 고득점 표현
// ⚠️ 표현은 초안이며 원어민/오픽 고득점자 검증 필요 (LEARNING.md 참고)

import type { Expression } from './expressions';

export const ihExpressions: Expression[] = [
  {
    en: "I'm really into ...",
    ko: '~에 푹 빠져 있어요',
    example: "I'm really into indie films these days.",
  },
  { en: 'It depends on the situation.', ko: '상황에 따라 달라요' },
  { en: 'It slipped my mind.', ko: '깜빡했어요' },
  {
    en: 'I would say ...',
    ko: '~라고 할 수 있을 것 같아요',
    example: 'I would say my hometown is pretty peaceful.',
  },
  { en: 'Now that I think about it, ...', ko: '지금 생각해 보니 ~' },
  { en: 'It varies from day to day.', ko: '그날그날 달라요' },
  { en: "It's not my cup of tea.", ko: '제 취향은 아니에요' },
  {
    en: 'I make a point of -ing',
    ko: '일부러/꼭 ~하려고 해요',
    example: 'I make a point of walking after dinner.',
  },
];

export const alExpressions: Expression[] = [
  { en: "I couldn't agree more.", ko: '전적으로 동의해요' },
  { en: 'It was a blessing in disguise.', ko: '전화위복이었어요' },
  {
    en: 'I was torn between A and B.',
    ko: 'A와 B 사이에서 고민했어요',
    example: 'I was torn between staying home and going out.',
  },
  { en: 'It exceeded my expectations by far.', ko: '기대를 훨씬 뛰어넘었어요' },
  {
    en: 'If it were not for ..., I would ...',
    ko: '~이 없다면 ~할 거예요',
    example: 'If it were not for coffee, I would never survive Mondays.',
  },
  {
    en: 'What strikes me most is ...',
    ko: '가장 인상적인 건 ~',
    example: 'What strikes me most is how fast the city changes.',
  },
  { en: 'in hindsight', ko: '돌이켜 보면', example: 'In hindsight, it was the right call.' },
  {
    en: 'It speaks volumes about ...',
    ko: '~을 잘 보여줘요',
    example: 'It speaks volumes about how much the neighborhood has changed.',
  },
];

export const highScorePatterns: Expression[] = [
  {
    en: 'The thing is, ...',
    ko: '중요한 건/문제는 ~',
    example: 'The thing is, I rarely have free time on weekdays.',
  },
  { en: "What I'm trying to say is ...", ko: '제가 말하려는 건 ~' },
  {
    en: 'It turned out that ...',
    ko: '알고 보니 ~였어요',
    example: 'It turned out that the café had just closed down.',
  },
  {
    en: 'I ended up -ing',
    ko: '결국 ~하게 됐어요',
    example: 'I ended up staying there for three hours.',
  },
  {
    en: 'Not only ... but also ...',
    ko: '~뿐 아니라 ~도',
    example: 'Not only was the view amazing, but the food was also great.',
  },
];

export const extensionExpressions: Expression[] = [
  {
    en: 'which was totally unexpected',
    ko: '전혀 예상 못 했는데 (관계절 확장)',
    example: 'It started raining, which was totally unexpected.',
  },
  {
    en: 'even though I was exhausted',
    ko: '지쳤는데도 불구하고 (양보 확장)',
    example: 'Even though I was exhausted, I finished the run.',
  },
  {
    en: 'the moment I walked in',
    ko: '들어서자마자 (시간 확장)',
    example: 'The moment I walked in, I knew I would love the place.',
  },
  {
    en: 'as I mentioned earlier',
    ko: '아까 말씀드렸듯이 (담화 연결)',
    example: 'As I mentioned earlier, I live alone.',
  },
  { en: 'if that makes sense', ko: '무슨 말인지 아시겠죠 (구어체 마무리)' },
];
