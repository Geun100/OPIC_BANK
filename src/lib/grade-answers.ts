// 등급별(IM·IH·AL) 난이도 맞춤 모범답안 추출 및 메타 정보 유틸
import { splitSentences } from './highlight';

export type GradeTier = 'IM' | 'IH' | 'AL';

export type GradeInfo = {
  key: GradeTier;
  label: string;
  subLabel: string;
  badge: string;
  badgeClass: string;
  tabActiveClass: string;
  description: string;
};

export const GRADE_TIER_INFO: Record<GradeTier, GradeInfo> = {
  IM: {
    key: 'IM',
    label: 'IM (IL ~ IM2)',
    subLabel: '기본 4문장 요약',
    badge: 'IM1 ~ IM2 권장',
    badgeClass:
      'bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950 dark:text-blue-300 dark:border-blue-800',
    tabActiveClass:
      'border-blue-600 bg-blue-50 text-blue-700 font-semibold dark:bg-blue-950/60 dark:text-blue-300',
    description:
      '핵심 설명과 두괄식 결론 위주의 4문장 요약 답변입니다. 암기 부담을 대폭 줄이고 기본적인 질문 대응을 목표로 합니다.',
  },
  IH: {
    key: 'IH',
    label: 'IH (IM3 ~ IH)',
    subLabel: '추천 6~7문장 표준',
    badge: 'IM3 ~ IH 권장 (실전 메인)',
    badgeClass:
      'bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950 dark:text-emerald-300 dark:border-emerald-800',
    tabActiveClass:
      'border-emerald-600 bg-emerald-50 text-emerald-700 font-semibold dark:bg-emerald-950/60 dark:text-emerald-300',
    description:
      '구체적인 배경 설명과 자연스러운 문장 연결, 감정 표현이 균형 있게 어우러진 6~7문장 표준 답변입니다.',
  },
  AL: {
    key: 'AL',
    label: 'AL (IH ~ AL)',
    subLabel: '고급 10문장+ 완벽',
    badge: 'IH ~ AL 완벽 대비',
    badgeClass:
      'bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-950 dark:text-purple-300 dark:border-purple-800',
    tabActiveClass:
      'border-purple-600 bg-purple-50 text-purple-700 font-semibold dark:bg-purple-950/60 dark:text-purple-300',
    description:
      '원어민 필러, 풍부한 세부 묘사와 원어민 스타일의 다채로운 어휘, 감정 표현이 결합된 10문장 이상 완성형 고득점 답변입니다.',
  },
};

export type GradeAnswerResult = {
  answerEn: string;
  answerKo: string;
  sentenceCount: number;
};

export function getGradeTailoredAnswer(
  fullAnswerEn: string,
  fullAnswerKo: string,
  grade: GradeTier,
): GradeAnswerResult {
  const enSentences = splitSentences(fullAnswerEn);
  const koSentences = splitSentences(fullAnswerKo);
  const total = enSentences.length;

  if (grade === 'IM') {
    // Pick 3 front sentences + 1 conclusion sentence (total 4 sentences)
    const indices: number[] = [];
    const count = Math.min(3, total - 1);
    for (let i = 0; i < count; i++) {
      indices.push(i);
    }
    if (total > 1 && !indices.includes(total - 1)) {
      indices.push(total - 1);
    }

    const answerEn = indices.map((i) => enSentences[i]).join(' ');
    let answerKo = '';
    if (koSentences.length === enSentences.length) {
      answerKo = indices.map((i) => koSentences[i]).join(' ');
    } else {
      const koCount = Math.max(1, Math.round(koSentences.length * (indices.length / total)));
      answerKo = koSentences.slice(0, koCount).join(' ');
    }

    return {
      answerEn,
      answerKo,
      sentenceCount: indices.length,
    };
  }

  if (grade === 'IH') {
    // Pick 5-6 front sentences + 1 conclusion sentence (total 6-7 sentences)
    const indices: number[] = [];
    const targetCount = Math.min(6, Math.max(5, total - 3));
    for (let i = 0; i < targetCount; i++) {
      indices.push(i);
    }
    if (total > 1 && !indices.includes(total - 1)) {
      indices.push(total - 1);
    }

    const answerEn = indices.map((i) => enSentences[i]).join(' ');
    let answerKo = '';
    if (koSentences.length === enSentences.length) {
      answerKo = indices.map((i) => koSentences[i]).join(' ');
    } else {
      const koCount = Math.max(1, Math.round(koSentences.length * (indices.length / total)));
      answerKo = koSentences.slice(0, koCount).join(' ');
    }

    return {
      answerEn,
      answerKo,
      sentenceCount: indices.length,
    };
  }

  // Grade === 'AL'
  // AL includes ALL sentences, plus AL-exclusive native fillers framing
  let answerEn = fullAnswerEn;
  let answerKo = fullAnswerKo;

  if (!answerEn.startsWith('Well,') && !answerEn.startsWith('Honestly,')) {
    answerEn = `Well, to be completely honest with you, Eva, ${answerEn.charAt(0).toLowerCase()}${answerEn.slice(1)}`;
    answerKo = `솔직히 에바에게 말씀드리자면, ${answerKo}`;
  }

  return {
    answerEn,
    answerKo,
    sentenceCount: enSentences.length,
  };
}
