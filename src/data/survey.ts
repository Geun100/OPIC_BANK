// 서베이 추천 로직 — 목표 등급/성향에 따라 백그라운드 서베이 조합과 GPT 연습 프롬프트를 생성
// 실제 IH 달성 수험 후기 자료를 기반으로 재구성 (개인 후기 기반이므로 시험 화면과 다를 수 있음)

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
    difficulty: '난이도 5-5 권장',
    difficultyReason:
      '실제 후기 기준으로 5-5는 IM3~IH 목표의 표준 설정이에요. 난이도를 너무 낮추면 받을 수 있는 등급의 상한도 함께 낮아질 수 있어요.',
  },
  IH: {
    label: 'IH (Intermediate High)',
    difficulty: '난이도 5-5',
    difficultyReason:
      '5-5 이상이면 IH를 받는 데 문제가 없다는 것이 다수 후기의 공통 의견이에요. 무리해서 6-6을 고를 필요는 없어요.',
  },
  AL: {
    label: 'AL (Advanced Low)',
    difficulty: '난이도 6-6 (5-5도 가능)',
    difficultyReason:
      'AL은 비교·대조와 이슈 설명 같은 고난도 유형에서 결정돼요. 6-6으로 어려운 질문에 노출되는 것이 유리하지만, 5-5로도 AL 달성 후기가 있어요.',
  },
};

export type SurveyPick = {
  category: string; // 서베이 항목
  pick: string; // 추천 선택지
  reason: string; // 왜 이 선택인지
};

// 검증된 기본 조합 — 다수의 IH 달성 후기가 공통으로 선택한 항목
const basePicks: SurveyPick[] = [
  {
    category: '현재 직업',
    pick: '일 경험 없음',
    reason: '직장 관련 콤보(업무, 회사, 동료) 전체를 출제 범위에서 제거해요.',
  },
  {
    category: '학생 여부',
    pick: '아니요 — 수강한 지 5년 이상 지남',
    reason: '학교·수업 관련 주제를 제거해요. "5년 이상 지남"까지 선택해야 꼬리 질문이 안 나와요.',
  },
  {
    category: '거주 형태',
    pick: '가족과 함께 주택/아파트 거주',
    reason:
      '실제 후기들이 공통으로 고른 검증된 선택이에요. 관련 질문이 무난하고 집·가족 스토리 하나로 대응돼요.',
  },
  {
    category: '여가 활동',
    pick: '공원 가기 · 해변 가기 · 콘서트 보기 · 카페/커피전문점 가기',
    reason:
      '"어디서 · 누구와 · 뭘 했는지" 구조가 같아서 하나의 스토리를 장소만 바꿔 재활용할 수 있어요.',
  },
  {
    category: '취미/관심사',
    pick: '음악 감상하기 · 요리하기',
    reason: '콘서트·카페 스토리와 소재가 겹쳐서 새로 준비할 내용이 적어요.',
  },
  {
    category: '운동',
    pick: '조깅 · 걷기 · 운동을 전혀 하지 않음',
    reason:
      '"동네에서 걷는다" 스토리 하나로 커버돼요. "운동을 전혀 하지 않음"을 함께 고르면 어려운 운동 질문을 피할 수 있어요.',
  },
  {
    category: '휴가/출장',
    pick: '집에서 보내는 휴가 · 국내여행 · 해외여행',
    reason: '여행 경험 하나를 국내/해외/집 버전으로 변형해서 돌려 쓸 수 있어요.',
  },
];

// 성향별 "먼저 깊게 준비할 주제" 추천
const focusByTrait: Record<Trait['place'], Record<Trait['style'], SurveyPick>> = {
  indoor: {
    safe: {
      category: '우선 준비 주제 (선택이 아니라 준비 전략)',
      pick: '카페 → 음악 감상 → 집에서 보내는 휴가 (3개 집중)',
      reason:
        '실내형·안전형이라면 이 3개만 깊게 파도 서로 소재가 겹쳐서 대부분의 콤보에 대응할 수 있어요.',
    },
    variety: {
      category: '우선 준비 주제 (선택이 아니라 준비 전략)',
      pick: '카페 → 음악 감상 → 콘서트 → 요리 → 집에서 보내는 휴가 (5개)',
      reason: '다양한 소재를 선호하니 실내 주제 5개로 넓혀 에피소드가 겹치지 않게 준비해요.',
    },
  },
  outdoor: {
    safe: {
      category: '우선 준비 주제 (선택이 아니라 준비 전략)',
      pick: '공원 → 해변 → 국내여행 (3개 집중)',
      reason:
        '야외형·안전형이라면 "야외에서 보낸 하루" 스토리 하나를 장소만 바꿔 3개 주제에 돌려 쓸 수 있어요.',
    },
    variety: {
      category: '우선 준비 주제 (선택이 아니라 준비 전략)',
      pick: '공원 → 해변 → 걷기/조깅 → 국내여행 → 해외여행 (5개)',
      reason: '야외 주제 5개로 넓혀 각기 다른 에피소드를 준비하면 답변이 단조롭지 않아요.',
    },
  },
};

export function recommend(grade: GoalGrade, trait: Trait): SurveyPick[] {
  return [...basePicks, focusByTrait[trait.place][trait.style]];
}

export function buildGptPrompt(grade: GoalGrade, trait: Trait): string {
  const picks = recommend(grade, trait)
    .slice(0, -1) // 우선 준비 주제는 서베이 항목이 아니므로 제외
    .map((p) => `- ${p.category}: ${p.pick}`)
    .join('\n');
  const focus = focusByTrait[trait.place][trait.style].pick;
  return `당신은 오픽(OPIc) 시험관 Ava입니다. 아래는 제가 백그라운드 서베이에서 선택한 항목입니다.

${picks}

목표 등급: ${grade}
설정 난이도: ${goalGradeInfo[grade].difficulty}
우선 준비 주제: ${focus}

실제 오픽 시험 구조(15문항)처럼 진행해주세요. 같은 주제로 묘사 → 습관/루틴 → 경험 순서로 이어지는 콤보 형식으로 영어 질문을 하나씩 출제하고, 중간에 롤플레이(정보 요청하기, 문제 상황 해결하기)와 돌발 주제도 섞어주세요.

제가 영어로 답변하면 다음 기준으로 피드백해주세요.
1. 이 시험은 일상 회화 시험이므로 casual하고 natural한 표현 기준으로 문법·표현을 교정해주세요.
2. 자연스러운 필러(filler)는 허용되니, 제 답변에 어울리는 필러도 추천해주세요.
3. ${grade} 기준에서 잘한 점 1가지와 아쉬운 점 1가지를 짚고 다음 질문으로 넘어가주세요.`;
}
