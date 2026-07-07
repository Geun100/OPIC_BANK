// 서베이 추천 로직 — 목표 등급/성향에 따라 백그라운드 서베이 조합과 GPT 연습 프롬프트를 생성
// ⚠️ 추천 규칙은 통용되는 수험 전략 기반 초안이며, 실제 오픽 경험자/공식 자료 검증 필요 (LEARNING.md 참고)

export type GoalGrade = 'IM' | 'IH' | 'AL';
export type Trait = {
  style: 'safe' | 'variety'; // 한 스토리 재활용 선호 vs 다양한 소재 선호
  place: 'indoor' | 'outdoor'; // 실내 취미 vs 야외 활동
};

export const goalGradeInfo: Record<
  GoalGrade,
  { label: string; difficulty: string; difficultyReason: string }
> = {
  IM: {
    label: 'IM (Intermediate Mid)',
    difficulty: '난이도 3-3 (쉬운 질문 위주)',
    difficultyReason:
      '난이도를 낮게 잡으면 돌발·롤플레이의 부담이 줄어요. 기본 주제를 안정적으로 답하는 것이 IM의 핵심이에요.',
  },
  IH: {
    label: 'IH (Intermediate High)',
    difficulty: '난이도 5-5 (다소 어려운 질문 포함)',
    difficultyReason:
      'IH 이상을 받으려면 어려운 난이도의 질문에 노출되어야 해요. 5-5는 IH 목표에서 가장 많이 선택되는 설정이에요.',
  },
  AL: {
    label: 'AL (Advanced Low)',
    difficulty: '난이도 6-6 (가장 어려운 질문)',
    difficultyReason:
      'AL은 최고 난이도 질문에서 유창함을 보여줘야 해요. 6-6을 선택해야 AL 채점 범위의 질문을 받을 수 있어요.',
  },
};

export type SurveyPick = {
  category: string; // 서베이 항목
  pick: string; // 추천 선택지
  reason: string; // 왜 이 선택인지
};

// 모든 목표 등급 공통 기본 전략 — 출제 범위를 좁히는 선택
const basePicks: SurveyPick[] = [
  {
    category: '현재 직업',
    pick: '일 경험 없음',
    reason: '직장 관련 콤보(업무, 회사 소개, 동료) 전체를 출제 범위에서 제거할 수 있어요.',
  },
  {
    category: '학생 여부',
    pick: '아니요 (수업 수강 안 함)',
    reason: '학교·수업·교수님 관련 주제를 제거해서 준비할 주제를 좁혀요.',
  },
  {
    category: '거주 형태',
    pick: '개인 주택/아파트에 홀로 거주',
    reason: '가족·룸메이트 묘사 질문을 줄이고, 혼자 사는 집 하나의 스토리로 대응할 수 있어요.',
  },
];

// 성향별 여가/취미 추천 — 서로 소재가 겹쳐 스토리를 재활용할 수 있는 조합
const leisurePicks: Record<Trait['place'], SurveyPick[]> = {
  indoor: [
    {
      category: '여가 활동',
      pick: '영화 보기 · TV/리얼리티 쇼 시청 · 음악 감상',
      reason:
        '세 주제 모두 "무엇을·언제·왜 좋아하는지" 구조가 같아서 하나의 답변 틀을 재활용할 수 있어요.',
    },
    {
      category: '휴가/출장',
      pick: '집에서 보내는 휴가',
      reason: '집·영화·음악 스토리와 소재가 겹쳐서 새로 외울 내용이 거의 없어요.',
    },
  ],
  outdoor: [
    {
      category: '여가 활동',
      pick: '공원 가기 · 해변 가기 · 캠핑하기',
      reason: '전부 "야외 + 사람들과 + 활동 묘사" 구조라 한 세트의 표현으로 대응돼요.',
    },
    {
      category: '휴가/출장',
      pick: '국내 여행',
      reason: '공원·해변 스토리를 여행 답변에 그대로 확장할 수 있어요.',
    },
  ],
};

const exercisePick: SurveyPick = {
  category: '운동',
  pick: '걷기 · 조깅',
  reason: '"동네에서 걷는다"는 하나의 스토리로 두 항목을 모두 커버할 수 있어요.',
};

export function recommend(grade: GoalGrade, trait: Trait): SurveyPick[] {
  const picks = [...basePicks, ...leisurePicks[trait.place], exercisePick];
  if (trait.style === 'variety') {
    picks.push({
      category: '추가 선택',
      pick: trait.place === 'indoor' ? '요리하기' : '자전거 타기',
      reason:
        '다양한 소재를 선호하는 성향이라 주제 하나를 추가했어요. 단, 선택 항목이 늘수록 준비량도 늘어난다는 점은 기억하세요.',
    });
  }
  return picks;
}

export function buildGptPrompt(grade: GoalGrade, trait: Trait): string {
  const picks = recommend(grade, trait)
    .map((p) => `- ${p.category}: ${p.pick}`)
    .join('\n');
  return `당신은 오픽(OPIc) 시험관입니다. 아래는 제가 백그라운드 서베이에서 선택한 항목입니다.

${picks}

목표 등급: ${grade}
설정 난이도: ${goalGradeInfo[grade].difficulty}

위 서베이 선택 기반으로 실제 오픽 시험처럼 콤보 형식(같은 주제로 묘사→습관→경험 순서로 이어지는 2~3개 질문)의 연습 질문을 영어로 하나씩 출제해주세요. 제가 영어로 답변하면 (1) ${grade} 기준 잘한 점, (2) 더 자연스러운 표현 1~2개, (3) 다음 질문 순서로 진행해주세요. 돌발 주제도 5번에 1번꼴로 섞어주세요.`;
}
