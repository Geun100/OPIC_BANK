// 질문 라이브러리 데이터 — 콤보 주제/돌발 주제/출제 경향/예상 질문
// ⚠️ 질문·경향 정보는 공개된 수험 후기 기반 초안이며 최신 기출 검증 필요 (LEARNING.md 참고)

export type Question = { en: string; ko: string };

export type QuestionTopic = {
  name: string;
  note?: string;
  questions: Question[];
};

// 콤보 주제 — 같은 주제로 묘사→습관→경험 순서로 이어지는 출제 형태
export const comboTopics: QuestionTopic[] = [
  {
    name: '집',
    note: '묘사 → 집에서 하는 일 → 기억에 남는 일 순서로 자주 출제',
    questions: [
      {
        en: 'Describe the house or apartment you live in. What does it look like?',
        ko: '살고 있는 집을 묘사해 주세요. 어떻게 생겼나요?',
      },
      {
        en: 'What do you usually do at home on weekends?',
        ko: '주말에 집에서 보통 무엇을 하나요?',
      },
      {
        en: 'Tell me about a memorable thing that happened at your home.',
        ko: '집에서 있었던 기억에 남는 일을 이야기해 주세요.',
      },
    ],
  },
  {
    name: '카페',
    questions: [
      {
        en: 'Describe your favorite café. What does it look like and why do you like it?',
        ko: '좋아하는 카페를 묘사해 주세요. 어떻게 생겼고 왜 좋아하나요?',
      },
      {
        en: 'How often do you go to cafés and what do you usually do there?',
        ko: '카페에 얼마나 자주 가고 거기서 주로 무엇을 하나요?',
      },
      {
        en: 'Tell me about the last time you went to a café. Who did you go with and what happened?',
        ko: '마지막으로 카페에 갔던 때를 이야기해 주세요. 누구와 갔고 무슨 일이 있었나요?',
      },
    ],
  },
  {
    name: '영화 보기',
    questions: [
      {
        en: 'What kind of movies do you like? Why do you like them?',
        ko: '어떤 장르의 영화를 좋아하나요? 왜 좋아하나요?',
      },
      {
        en: 'Who is your favorite actor or actress? Tell me about them.',
        ko: '좋아하는 배우는 누구인가요? 그 배우에 대해 말해 주세요.',
      },
      {
        en: 'Tell me about the most memorable movie you have ever seen.',
        ko: '지금까지 본 영화 중 가장 기억에 남는 영화를 이야기해 주세요.',
      },
    ],
  },
  {
    name: '공원 가기',
    questions: [
      {
        en: 'Describe a park you often go to. What does it look like?',
        ko: '자주 가는 공원을 묘사해 주세요.',
      },
      { en: 'What do people usually do at the park?', ko: '사람들은 공원에서 보통 무엇을 하나요?' },
      {
        en: 'Tell me about a memorable experience you had at a park.',
        ko: '공원에서 있었던 기억에 남는 경험을 이야기해 주세요.',
      },
    ],
  },
  {
    name: '여행 (국내)',
    questions: [
      {
        en: 'Where do you usually go when you travel domestically?',
        ko: '국내 여행 갈 때 보통 어디로 가나요?',
      },
      {
        en: 'What do you usually do to prepare for a trip?',
        ko: '여행 준비는 보통 어떻게 하나요?',
      },
      {
        en: 'Tell me about the most memorable trip you have taken.',
        ko: '가장 기억에 남는 여행을 이야기해 주세요.',
      },
    ],
  },
  {
    name: '걷기·조깅',
    questions: [
      { en: 'Where do you usually go walking or jogging?', ko: '보통 어디에서 걷거나 조깅하나요?' },
      { en: 'When did you first start jogging and why?', ko: '조깅은 언제, 왜 시작했나요?' },
      {
        en: 'Tell me about a time something unexpected happened while you were walking or jogging.',
        ko: '걷거나 조깅하다가 예상치 못한 일이 있었던 경험을 이야기해 주세요.',
      },
    ],
  },
  {
    name: '음악 감상',
    questions: [
      {
        en: 'What kind of music do you listen to? Why do you like it?',
        ko: '어떤 음악을 듣나요? 왜 좋아하나요?',
      },
      {
        en: 'When and where do you usually listen to music?',
        ko: '언제, 어디서 주로 음악을 듣나요?',
      },
      {
        en: 'Tell me about a concert or performance you remember.',
        ko: '기억에 남는 콘서트나 공연을 이야기해 주세요.',
      },
    ],
  },
  {
    name: '공연 보기',
    questions: [
      {
        en: 'What kind of performances do you like to watch?',
        ko: '좋아하는 공연 종류를 묘사해달라는 질문',
      },
      {
        en: "How often do you go see performances, and what's your routine?",
        ko: '공연을 얼마나 자주, 어떻게 보는지 묻는 질문',
      },
      {
        en: 'Tell me about a memorable experience watching a performance.',
        ko: '공연 관람 중 기억에 남는 경험',
      },
    ],
  },
  {
    name: '콘서트 보기',
    questions: [
      {
        en: "Describe a concert you've been to or would like to attend.",
        ko: '콘서트를 묘사해달라는 질문',
      },
      {
        en: 'What do you usually do to prepare for a concert?',
        ko: '콘서트 갈 때 평소 준비하는 방식',
      },
      {
        en: 'Tell me about a memorable experience at a concert.',
        ko: '콘서트에서의 기억에 남는 경험',
      },
    ],
  },
  {
    name: '쇼핑하기',
    questions: [
      { en: 'What kind of shopping do you usually do?', ko: '평소 하는 쇼핑을 묘사해달라는 질문' },
      {
        en: "How often do you go shopping, and what's your routine?",
        ko: '쇼핑을 얼마나 자주, 어떻게 하는지 묻는 질문',
      },
      { en: 'Tell me about a memorable shopping experience.', ko: '쇼핑 중 기억에 남는 경험' },
    ],
  },
  {
    name: '캠핑',
    questions: [
      {
        en: 'Can you describe what camping is usually like for you? Where do you usually go?',
        ko: '캠핑을 묘사해달라는 질문',
      },
      {
        en: 'How often do you go camping, and what do you usually do to prepare?',
        ko: '캠핑을 얼마나 자주, 어떻게 준비하는지 묻는 질문',
      },
      { en: 'Tell me about a memorable camping experience.', ko: '캠핑 중 기억에 남는 경험' },
    ],
  },
  {
    name: '스포츠 관람',
    questions: [
      {
        en: 'What kind of sports do you like to watch?',
        ko: '좋아하는 스포츠 관람을 묘사해달라는 질문',
      },
      {
        en: "How often do you watch sports, and what's your routine?",
        ko: '스포츠 관람을 얼마나 자주, 어떻게 하는지 묻는 질문',
      },
      {
        en: 'Tell me about a memorable experience watching a sports game.',
        ko: '스포츠 관람 중 기억에 남는 경험',
      },
    ],
  },
  {
    name: '해외여행',
    questions: [
      {
        en: 'Describe a trip abroad that you remember well. Where did you go?',
        ko: '기억에 남는 해외여행을 묘사해달라는 질문',
      },
      {
        en: 'How do you usually prepare for an overseas trip?',
        ko: '해외여행을 어떻게 준비하는지 묻는 질문',
      },
      {
        en: 'Tell me about a memorable experience you had on an overseas trip.',
        ko: '해외여행 중 기억에 남는 경험',
      },
    ],
  },
  {
    name: '집에서 보내는 휴가',
    questions: [
      {
        en: 'What do you like to do when you spend your vacation at home?',
        ko: '집에서 보내는 휴가에 뭘 하는지 묻는 질문',
      },
      {
        en: 'How do you usually spend a staycation?',
        ko: '집에서 보내는 휴가를 어떻게 보내는지 묻는 질문',
      },
      { en: 'Tell me about a memorable staycation experience.', ko: '집휴가 중 기억에 남는 경험' },
    ],
  },
  {
    name: '해변 가기',
    questions: [
      {
        en: 'Describe your favorite beach. What does it look like?',
        ko: '좋아하는 해변을 묘사해달라는 질문',
      },
      {
        en: 'How often do you go to the beach, and what do you usually do there?',
        ko: '해변에서 평소 뭘 하는지 묻는 질문',
      },
      {
        en: 'Tell me about a memorable experience at the beach.',
        ko: '해변에서의 기억에 남는 경험',
      },
    ],
  },
  {
    name: '가구·전자제품',
    questions: [
      {
        en: 'What kind of furniture or electronic devices do you have at home?',
        ko: '집에 있는 가구/전자제품을 묻는 질문',
      },
      {
        en: 'Tell me about your favorite piece of furniture or device. Why is it important to you?',
        ko: '제일 좋아하는 가구/기기를 묻는 질문',
      },
      {
        en: 'If you had to buy a new device, what would it be and why?',
        ko: '새로 살 기기가 있다면 뭘지 묻는 질문',
      },
    ],
  },
];

// 돌발 주제 — 서베이와 무관하게 출제될 수 있는 주제
export const suddenTopics: QuestionTopic[] = [
  {
    name: '날씨',
    questions: [
      {
        en: 'How is the weather in your country? Describe the four seasons.',
        ko: '당신 나라의 날씨는 어떤가요? 사계절을 묘사해 주세요.',
      },
      { en: 'What is your favorite season and why?', ko: '가장 좋아하는 계절과 이유는?' },
      {
        en: 'Tell me about a time when the weather affected your plans.',
        ko: '날씨 때문에 계획이 바뀌었던 경험을 이야기해 주세요.',
      },
    ],
  },
  {
    name: '재활용',
    questions: [
      {
        en: 'How do people recycle in your country?',
        ko: '당신 나라에서는 재활용을 어떻게 하나요?',
      },
      { en: 'How do you recycle at home?', ko: '집에서 재활용을 어떻게 하나요?' },
      {
        en: 'Tell me about a problem you had while recycling.',
        ko: '재활용하면서 겪었던 문제를 이야기해 주세요.',
      },
    ],
  },
  {
    name: '교통·대중교통',
    questions: [
      {
        en: 'How do people get around in your city?',
        ko: '당신 도시에서 사람들은 어떻게 이동하나요?',
      },
      { en: 'How do you usually get to work or school?', ko: '보통 어떻게 출근/등교하나요?' },
      {
        en: 'Tell me about a memorable experience on public transportation.',
        ko: '대중교통에서 있었던 기억에 남는 경험을 이야기해 주세요.',
      },
    ],
  },
  {
    name: '인터넷·기술',
    questions: [
      {
        en: 'What do people usually do on the Internet?',
        ko: '사람들은 인터넷으로 주로 무엇을 하나요?',
      },
      {
        en: 'What websites or apps do you use often?',
        ko: '자주 쓰는 웹사이트나 앱은 무엇인가요?',
      },
      {
        en: "How has technology changed people's lives?",
        ko: '기술이 사람들의 삶을 어떻게 바꿨나요?',
      },
    ],
  },
  {
    name: '건강',
    questions: [
      {
        en: 'What do people do to stay healthy in your country?',
        ko: '당신 나라 사람들은 건강을 위해 무엇을 하나요?',
      },
      { en: 'What do you do to take care of your health?', ko: '건강 관리를 위해 무엇을 하나요?' },
      {
        en: 'Tell me about a time you were sick or injured.',
        ko: '아프거나 다쳤던 경험을 이야기해 주세요.',
      },
    ],
  },
  {
    name: '약속',
    questions: [
      { en: 'What kind of appointments do you usually make?', ko: '보통 어떤 약속을 잡나요?' },
      {
        en: 'How do you usually make appointments with friends?',
        ko: '친구와 약속은 어떻게 잡나요?',
      },
      {
        en: 'Tell me about a time you had to cancel or change an appointment.',
        ko: '약속을 취소하거나 바꿔야 했던 경험을 이야기해 주세요.',
      },
    ],
  },
  {
    name: '은행',
    questions: [
      {
        en: 'Describe what a typical bank in your country looks like.',
        ko: '일반적인 은행의 모습을 묻는 질문',
      },
      {
        en: 'Tell me about the last time you went to a bank. What was the purpose?',
        ko: '마지막으로 은행 간 목적을 묻는 질문',
      },
      {
        en: 'Imagine a foreigner asks you how to open a bank account. How would you explain the process?',
        ko: '외국인에게 계좌 개설 과정을 설명하는 질문',
      },
    ],
  },
  {
    name: '휴일·명절',
    questions: [
      {
        en: 'Tell me about a holiday or special day you celebrate.',
        ko: '기념하는 명절/휴일을 묻는 질문',
      },
      {
        en: 'Describe what people usually do during that holiday.',
        ko: '명절에 사람들이 하는 것을 묻는 질문',
      },
      {
        en: 'Imagine you are explaining a Korean holiday to a foreigner. What would you say?',
        ko: '외국인에게 한국 명절을 설명하는 질문',
      },
    ],
  },
  {
    name: '패션',
    questions: [
      { en: 'What kind of clothes do you usually wear?', ko: '평소 옷차림을 묻는 질문' },
      {
        en: 'Describe a fashion trend that you like or dislike.',
        ko: '좋아하거나 싫어하는 패션 트렌드를 묻는 질문',
      },
      {
        en: 'If you had to recommend Korean fashion to a foreigner, what would it be?',
        ko: '외국인에게 추천할 한국 패션을 묻는 질문',
      },
    ],
  },
  {
    name: '산업',
    questions: [
      { en: 'What industries are popular in your country?', ko: '인기 있는 산업을 묻는 질문' },
      {
        en: "How do these industries affect people's everyday lives in your country?",
        ko: '산업이 일상에 미치는 영향을 묻는 질문',
      },
      {
        en: "Tell me about a change you've noticed in an industry in your country.",
        ko: '산업의 변화를 묻는 질문',
      },
    ],
  },
];

// 롤플레이 — 11~13번 콤보로 출제되는 상황극 유형 (실제 후기 기반 3유형)
export const roleplayTopics: QuestionTopic[] = [
  {
    name: '유형 ① 정보 요청하기 (질문 3~4개 던지기)',
    note: '주어진 상황에서 상대에게 궁금한 것을 3~4가지 질문하는 유형',
    questions: [
      {
        en: 'Your friend just bought a new smartphone. Call your friend and ask three or four questions about it.',
        ko: '친구가 새 스마트폰을 샀어요. 전화해서 궁금한 점을 3~4가지 물어보세요.',
      },
      {
        en: 'You want to see a doctor. Call the clinic and ask questions to make an appointment.',
        ko: '병원에 가려고 해요. 전화로 예약에 필요한 질문을 해보세요.',
      },
      {
        en: 'You are planning a trip. Call a travel agency and ask three or four questions about the package.',
        ko: '여행을 계획 중이에요. 여행사에 전화해 상품에 대해 3~4가지 질문하세요.',
      },
    ],
  },
  {
    name: '유형 ② 문제 상황 설명 + 대안 제시',
    note: '유형 ①의 상황에서 문제가 생기고, 상황을 설명한 뒤 대안 2~3개를 제시하는 유형',
    questions: [
      {
        en: 'You broke the smartphone you borrowed from your friend. Explain the situation and offer two or three solutions.',
        ko: '친구에게 빌린 스마트폰을 고장 냈어요. 상황을 설명하고 대안을 2~3가지 제시하세요.',
      },
      {
        en: 'You cannot make it to the appointment. Call and explain why, then suggest alternatives.',
        ko: '예약 시간에 못 가게 됐어요. 이유를 설명하고 대안을 제시하세요.',
      },
      {
        en: 'The tickets you booked have a problem. Explain the situation and give some options to resolve it.',
        ko: '예매한 티켓에 문제가 생겼어요. 상황을 설명하고 해결 방안을 제시하세요.',
      },
    ],
  },
  {
    name: '유형 ③ 비슷한 문제를 겪은 내 경험 말하기',
    note: '유형 ②에 이어 “너도 비슷한 경험 있어?”로 마무리되는 유형 — 과거 경험 스토리로 대응',
    questions: [
      {
        en: 'Have you ever had a problem with something you bought or borrowed? Tell me what happened and how you solved it.',
        ko: '구매하거나 빌린 물건에 문제가 있었던 경험이 있나요? 무슨 일이었고 어떻게 해결했는지 말해주세요.',
      },
      {
        en: 'Tell me about a time you had to cancel or change plans at the last minute.',
        ko: '막판에 계획을 취소하거나 바꿔야 했던 경험을 이야기해 주세요.',
      },
    ],
  },
];

// 최신 출제 경향 메모 — 2026년 기준 15문항 세트 구조 기반
export const trendNotes: { title: string; body: string }[] = [
  {
    title: '시험은 15문항 · 5개 세트로 구성돼요 (2026 기준)',
    body: '1번 자기소개(채점 제외, 입 풀기용) → 세트1(2~4번: 서베이 주제) → 세트2(5~7번: 서베이 또는 돌발) → 세트3(8~10번: 돌발 주제) → 세트4(11~13번: 롤플레이) → 세트5(14~15번: 어드밴스 — 난이도 5~6 선택자만 출제). 각 세트는 묘사 → 루틴 → 경험 순서로 이어져요.',
  },
  {
    title: '서베이 주제 6개 중 약 3개가 실제 출제돼요',
    body: '서베이 선택이 곧 출제 범위예요. 고른 주제 전부가 나오는 게 아니라 약 절반이 출제되고 나머지는 돌발로 채워져요. 그래서 "고른 주제는 전부, 돌발은 빈출만" 준비하는 게 효율적이에요.',
  },
  {
    title: '내가 고른 주제의 롤플레이는 돌발이 아니에요',
    body: '음악 감상을 골랐다면 MP3 관련 롤플레이, 콘서트를 골랐다면 티켓 예약 롤플레이가 나올 수 있어요. 수험생들이 가장 흔하게 "돌발이 나왔다"고 착각하는 유형인데, 사실 서베이 선택과 연결된 출제라 미리 준비할 수 있어요.',
  },
  {
    title: '배점이 높은 건 “기억에 남는 경험”이에요',
    body: '단순 묘사(2번 유형)는 배점이 낮으니 답변을 길게 끌지 마세요. 대신 memorable·unforgettable이 들어간 경험 질문에는 누가 들어도 인상적인 에피소드로 힘을 실어야 해요. 과거 경험 답변은 초반에 언제·어디서·누구와·무엇을·왜·어떻게(육하원칙)를 먼저 깔면 안정적이에요.',
  },
  {
    title: 'IH와 AL을 가르는 건 14~15번 어드밴스예요',
    body: '난이도 5~6 선택자에게만 출제되는 비교·대조(과거 vs 현재, A vs B)와 관련 이슈 설명 유형이 등급을 가르는 구간이에요. 비교 답변은 “A는 이렇고 B는 이런데, 나는 이런 이유로 A가 좋다”처럼 선호로 마무리하면 완성도가 올라가요. IH 기준 발화량은 문항당 평균 10문장, 1분 30초 내외예요.',
  },
  {
    title: '롤플레이는 3유형이 반복돼요',
    body: '약속/예약 잡기·취소, 물건 구매·문제 해결 상황에서 ① 질문 3~4개 던지기 → ② 문제 설명 + 대안 제시 → ③ 비슷한 내 경험 순서로 이어져요. 유형이 고정적이라 뼈대 문장을 미리 만들어두면 단어만 바꿔 대응할 수 있어요.',
  },
  {
    title: '50~60초 끊기지 않고 말하는 게 핵심이에요',
    body: '오픽은 유창성·시제·구체성을 종합 평가해요. 문법이 틀려도 멈추지 않는 게 더 중요해요. 막히면 침묵 대신 필러로 잇고, 문제당 한 문장은 접속사를 활용해 의도적으로 길게 만들어 보세요.',
  },
  {
    title: '난이도 설정에 따라 질문 수준이 달라져요',
    body: '시험 중간의 난이도 재선택에서 고른 수준에 따라 이후 질문이 달라져요. 목표 등급별 난이도 전략(5-5/6-6)은 서베이 추천 페이지를 참고하세요.',
  },
];

// 예상 질문 모음 — 자기소개 등 사실상 고정 출제
export const expectedQuestions: Question[] = [
  {
    en: "Let's start the interview now. Tell me something about yourself.",
    ko: '인터뷰를 시작하겠습니다. 자기소개를 해주세요. (1번 고정 출제)',
  },
  {
    en: 'Describe your neighborhood. What can you see around your house?',
    ko: '동네를 묘사해 주세요. 집 주변에 무엇이 보이나요?',
  },
  { en: 'What do you usually do on weekends?', ko: '주말에 보통 무엇을 하나요?' },
  {
    en: 'Compare life today with life in the past. What has changed?',
    ko: '과거와 현재의 생활을 비교해 보세요. 무엇이 달라졌나요?',
  },
];
