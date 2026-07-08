// OPIC Sprint 커리큘럼 — D-14 / D-7 / D-1 일자(시간)별 학습 경로
// D-14는 "2주 독학 IH", D-1은 "7시간 벼락치기" 실전 후기 자료의 구조를 그대로 반영함

export type SprintLink = { label: string; href: string };
export type SprintDay = {
  day: string; // "Day 1" 또는 "00:00~01:00"
  title: string;
  tasks: string[];
  links?: SprintLink[];
};
export type SprintKey = 'd14' | 'd7' | 'd1';
export type Sprint = {
  key: SprintKey;
  label: string;
  sub: string;
  headline: string;
  strategy: string;
  days: SprintDay[];
};

export const sprints: Record<SprintKey, Sprint> = {
  d14: {
    key: 'd14',
    label: 'D-14',
    sub: '2주 남음',
    headline: '14일 정석 스프린트 — 스토리 자산을 쌓아 등급 상한을 노린다',
    strategy:
      '2주면 "준비"와 "연습"을 나눌 수 있어요. 앞주엔 스토리를 만들고, 뒷주엔 입에 붙이는 데 집중해요.',
    days: [
      {
        day: 'Day 1',
        title: '시험 구조 이해',
        tasks: [
          '15문항 · 5콤보 구조를 이해해요 (자기소개 → 콤보1~5).',
          '내 목표 등급 구간과 권장 난이도를 확인해요.',
        ],
        links: [
          { label: '시험 진행 방식 보기', href: '/guide/exam-process' },
          { label: '최신 출제 경향 보기', href: '/questions/trends' },
        ],
      },
      {
        day: 'Day 2',
        title: '서베이 확정',
        tasks: [
          '서베이 추천을 받고 조합을 그대로 고정해요. 이후 준비는 전부 이 안에서만 해요.',
          'GPT 연습 프롬프트를 미리 복사해둬요.',
        ],
        links: [{ label: '서베이 추천 받기', href: '/survey' }],
      },
      {
        day: 'Day 3',
        title: '자기소개 완성',
        tasks: [
          '자기소개는 채점 대상은 아니지만 첫인상을 좌우해요. 30초 분량으로 완성해요.',
          '"오늘 시험이 중요한 이유"를 한 문장 넣으면 자연스러운 어필이 돼요.',
        ],
        links: [{ label: '예상 질문 모음 보기', href: '/questions/expected' }],
      },
      {
        day: 'Day 4',
        title: '카페 스토리 만들기',
        tasks: ['카페 표현으로 묘사·습관·경험 3각도 스토리를 만들어요.'],
        links: [
          { label: '주제별 표현 (카페)', href: '/expressions/topics' },
          { label: '콤보 질문 보기', href: '/questions/combo' },
        ],
      },
      {
        day: 'Day 5',
        title: '공원 스토리 만들기',
        tasks: ['공원 표현으로 스토리를 만들고, 카페 스토리와 겹치는 부분을 재활용해요.'],
        links: [{ label: '주제별 표현 (공원)', href: '/expressions/topics' }],
      },
      {
        day: 'Day 6',
        title: '여행 스토리 만들기',
        tasks: ['국내·해외·집 휴가를 하나의 여행 스토리로 변형해서 준비해요.'],
        links: [{ label: '주제별 표현 (여행)', href: '/expressions/topics' }],
      },
      {
        day: 'Day 7',
        title: '운동(걷기·조깅) 스토리 만들기',
        tasks: ['"동네에서 걷는다" 스토리 하나로 운동 관련 질문 전체를 커버해요.'],
        links: [{ label: '주제별 표현 (운동)', href: '/expressions/topics' }],
      },
      {
        day: 'Day 8',
        title: '영화 스토리 만들기',
        tasks: ['좋아하는 장르·배우·인상 깊은 영화 하나를 정해 스토리를 고정해요.'],
        links: [{ label: '주제별 표현 (영화)', href: '/expressions/topics' }],
      },
      {
        day: 'Day 9',
        title: '집 스토리 마무리',
        tasks: [
          '1주차 스토리 세트를 완성해요. 지금까지 만든 6개 스토리를 소리 내어 한 번씩 읽어봐요.',
        ],
        links: [{ label: '주제별 표현 (집)', href: '/expressions/topics' }],
      },
      {
        day: 'Day 10',
        title: '필러 & 감정 표현 익히기',
        tasks: ['침묵 대신 필러로 잇는 연습을 해요. 감정 형용사로 답변에 생동감을 더해요.'],
        links: [
          { label: '필러 보기', href: '/expressions/filler' },
          { label: '감정 표현 보기', href: '/expressions/emotions' },
        ],
      },
      {
        day: 'Day 11',
        title: '만능 문장 패턴 익히기',
        tasks: ['What·Feeling·Why 뼈대와 비교 답변 패턴으로 어떤 질문에도 대응할 준비를 해요.'],
        links: [{ label: '만능 문장 패턴 보기', href: '/expressions/patterns' }],
      },
      {
        day: 'Day 12',
        title: '돌발 주제 대응',
        tasks: ['날씨·재활용·교통 등 빈출 돌발 6개에 기본 답변을 하나씩 만들어요.'],
        links: [{ label: '돌발 주제 보기', href: '/questions/sudden' }],
      },
      {
        day: 'Day 13',
        title: '롤플레이 대응',
        tasks: ['질문하기 → 문제 설명+대안 제시 → 내 경험 말하기, 3유형 뼈대 문장을 연습해요.'],
        links: [{ label: '롤플레이 보기', href: '/questions/roleplay' }],
      },
      {
        day: 'Day 14',
        title: '총복습 + 실전 연습',
        tasks: [
          '나만의 노트에 저장한 표현만 모아 최종 복습해요.',
          '서베이 추천의 GPT 프롬프트로 실전처럼 모의 연습을 1회 진행해요.',
        ],
        links: [
          { label: '나만의 노트 보기', href: '/notes' },
          { label: '등급별 표현 보강', href: '/grade' },
        ],
      },
    ],
  },
  d7: {
    key: 'd7',
    label: 'D-7',
    sub: '1주 남음',
    headline: '7일 집중 스프린트 — 하루 하나씩 끝낸다',
    strategy: '7일이면 최소 준비는 가능해요. 매일 정해진 만큼만 끝내면 시험 전날 여유가 생겨요.',
    days: [
      {
        day: 'Day 1',
        title: '구조 이해 + 서베이 확정 + 자기소개',
        tasks: [
          '시험 진행 방식을 읽고 콤보 구조를 이해해요.',
          '서베이 추천에서 조합을 확정하고, 자기소개를 완성해요.',
        ],
        links: [
          { label: '시험 진행 방식', href: '/guide/exam-process' },
          { label: '서베이 추천 받기', href: '/survey' },
        ],
      },
      {
        day: 'Day 2',
        title: '카페 · 공원 스토리',
        tasks: ['두 주제의 묘사·습관·경험 스토리를 만들어요.'],
        links: [{ label: '주제별 표현', href: '/expressions/topics' }],
      },
      {
        day: 'Day 3',
        title: '여행 · 운동 스토리',
        tasks: ['여행과 운동 스토리를 만들고, 앞의 스토리와 겹치는 부분을 재활용해요.'],
        links: [{ label: '주제별 표현', href: '/expressions/topics' }],
      },
      {
        day: 'Day 4',
        title: '집 · 영화 스토리 + 필러',
        tasks: ['남은 두 주제를 마무리하고, 필러로 침묵을 없애는 연습을 시작해요.'],
        links: [
          { label: '주제별 표현', href: '/expressions/topics' },
          { label: '필러 보기', href: '/expressions/filler' },
        ],
      },
      {
        day: 'Day 5',
        title: '만능 패턴 + 감정 표현',
        tasks: ['What·Feeling·Why 뼈대와 감정 형용사로 답변에 힘을 실어요.'],
        links: [
          { label: '만능 문장 패턴', href: '/expressions/patterns' },
          { label: '감정 표현', href: '/expressions/emotions' },
        ],
      },
      {
        day: 'Day 6',
        title: '돌발 + 롤플레이',
        tasks: ['돌발 빈출 주제와 롤플레이 3유형에 기본 답변을 만들어요.'],
        links: [
          { label: '돌발 주제', href: '/questions/sudden' },
          { label: '롤플레이', href: '/questions/roleplay' },
        ],
      },
      {
        day: 'Day 7',
        title: '총복습 + 실전 연습',
        tasks: ['나만의 노트 복습 + GPT 프롬프트로 실전 모의 연습.'],
        links: [
          { label: '나만의 노트', href: '/notes' },
          { label: '서베이 추천(GPT 프롬프트)', href: '/survey' },
        ],
      },
    ],
  },
  d1: {
    key: 'd1',
    label: 'D-1',
    sub: '내일 시험',
    headline: '7시간 벼락치기 — 버릴 건 버리고 3가지만',
    strategy:
      '오픽은 암기 시험이 아니라 말하기 시험이에요. 벼락치기로도 목표 등급 달성이 가능해요. 시간이 없을 땐 범위를 줄이는 게 전략이에요.',
    days: [
      {
        day: '00:00~01:00',
        title: '시험 이해 + 서베이 선정',
        tasks: [
          '시험 구조(콤보·롤플레이·난이도 설정)를 빠르게 파악해요.',
          '서베이 추천을 받아 조합을 그대로 확정해요. 고민할 시간도 아까워요.',
        ],
        links: [
          { label: '시험 진행 방식', href: '/guide/exam-process' },
          { label: '서베이 추천 받기', href: '/survey' },
        ],
      },
      {
        day: '01:00~04:00',
        title: '내 답변 구성 (What·Feeling·Why)',
        tasks: [
          '완벽한 문장 대신 키워드+흐름만 잡아요.',
          'What(무엇을) · Feeling(감정) · Why(왜) 뼈대로 문장을 짜보세요.',
          '어려운 단어는 굳이 안 써도 돼요. 최소한의 관계대명사만 준비해요.',
        ],
        links: [
          { label: '만능 문장 패턴 (What·Feeling·Why)', href: '/expressions/patterns' },
          { label: '주제별 표현', href: '/expressions/topics' },
        ],
      },
      {
        day: '04:00~05:00',
        title: '롤플레이 대비',
        tasks: [
          '유형이 3가지로 고정돼 있어요: 질문하기 / 문제 설명+대안 제시 / 내 경험 말하기.',
          '단어만 바꿔 쓸 수 있는 만능 뼈대 문장을 암기해요.',
        ],
        links: [{ label: '롤플레이 3유형 보기', href: '/questions/roleplay' }],
      },
      {
        day: '05:00~07:00',
        title: '모의고사 + GPT 피드백',
        tasks: [
          '모의고사 질문에 답변을 녹음해요.',
          '녹음을 텍스트로 옮겨 GPT 프롬프트로 피드백을 받아요 — 실전에 가장 도움 된다는 후기가 많아요.',
          '정말 모르는 질문이 나오면 "위기 탈출" 문장으로 자연스럽게 다음으로 넘어가요.',
        ],
        links: [
          { label: '위기 탈출 문장 보기', href: '/expressions/patterns' },
          { label: '서베이 추천(GPT 프롬프트)', href: '/survey' },
        ],
      },
    ],
  },
};
