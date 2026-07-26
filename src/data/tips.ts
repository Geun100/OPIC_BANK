// 오픽 TIP 데이터 — 암기용 표현이 아닌 실전 전략/화법 팁 모음

export type Tip = {
  title: string;
  body: string;
  example?: { en: string; ko: string }[];
};

export type TipGroup = {
  title: string;
  tips: Tip[];
};

export const tipGroups: TipGroup[] = [
  {
    title: 'Answer Framework (답변 구조)',
    tips: [
      {
        title: 'STEP 1~4 — Main Point → Reason → Detail → Feeling',
        body: '질문을 받으면 결론(Main Point)부터 두괄식으로 말하고, 이유(Reason), 세부 에피소드(Detail), 그리고 본인의 감정과 느낌(Feeling) 순서로 답변을 구성하세요. 외운 티 없이 답변이 조리 있고 풍성해지는 기본 프레임워크입니다.',
        example: [
          {
            en: 'My favorite singer is definitely IU. She’s the GOAT.',
            ko: 'Main Point — 두괄식 결론',
          },
          {
            en: 'The reason why I love her is that her lyrics are incredibly touching.',
            ko: 'Reason — 핵심 이유',
          },
          {
            en: 'Unlike typical K-pop idols, she really emphasizes storytelling and it instantly heals me.',
            ko: 'Detail — 세부 차별화 설명',
          },
          { en: "Well honestly, I'm just obsessed with her music.", ko: 'Feeling — 감정 마무리' },
        ],
      },
      {
        title: '감정 표현 + 연결어로 논리 연결하기',
        body: '단순 사실 나열은 답변이 짧아지고 부자연스럽습니다. "Honestly", "To be fair", "What I love most about it is..."와 같은 감정 연결어를 활용하여 문장 사이의 흐름을 이어가면 발화량과 논리성이 크게 향상됩니다.',
      },
    ],
  },
  {
    title: 'Natural Speaking (자연스러운 말하기)',
    tips: [
      {
        title: '완급 조절 (Intro - Main Story - Ending)',
        body: '답변 초반 Intro는 천천히 말하며 생각할 시간을 확보하세요. 초반에 약간의 머뭇거림이 있더라도 Main Story에서 속도감 있게 흐름을 타고, Ending에서는 차분하고 안정적으로 마무리하면 감점 없이 유창한 인상을 줍니다.',
        example: [
          { en: 'Well, honestly, let me think for a second...', ko: 'Intro — 생각하며 천천히' },
          {
            en: 'Actually, one place that immediately comes to mind is...',
            ko: 'Main Story — 속도감 있게',
          },
          {
            en: "So yeah, that's pretty much why I really cherish that place.",
            ko: 'Ending — 차분한 마무리',
          },
        ],
      },
      {
        title: 'Chunking — 의미 단위로 끊어 말하기',
        body: '단어 단위가 아닌 의미 덩어리(Chunk) 단위로 끊어서 말하세요. 슬래시(/) 단위로 호흡을 가다듬고 주요 키워드에 강세를 주면, 말하는 속도가 조금 느려져도 외운 티 없이 "생각하며 자연스럽게 대화하는 느낌"을 줄 수 있습니다.',
        example: [
          { en: 'I decided to go to the park to get some fresh air.', ko: '❌ 기계적인 연속 발화' },
          {
            en: 'I decided to go / to the park / to get some fresh air.',
            ko: '⭕ Chunking을 적용한 자연스러운 발화',
          },
        ],
      },
    ],
  },
  {
    title: 'Survey Strategy (서베이 전략)',
    tips: [
      {
        title: '유사한 카테고리 묶어 고르기',
        body: '여가 활동이나 취미 선택 시 "공원 가기, 해변 가기, 캠핑 가기"처럼 성격과 분위기가 유사한 항목들을 묶어서 선택하세요. 하나의 에피소드와 묘사 표현을 여러 질문에 재활용(돌려막기)할 수 있어 암기 부담이 대폭 줄어듭니다.',
      },
      {
        title: '전문/돌발 질문 차단 선택법 (일명 백수/독신 전략)',
        body: '서베이에서 "직장인 아님", "학생 아님", "혼자 거주" 등을 선택하세요. 업무 프로세스, 학무 과제, 가사 노동 등 난이도 높고 전문적인 질문이 출제될 확률을 사전에 차단할 수 있습니다.',
      },
    ],
  },
  {
    title: 'Smart Study (효율적인 공부법)',
    tips: [
      {
        title: '대본 통암기 대신 키워드 마인드맵',
        body: '답변 전체 문장을 외우면 시험장에서 한 단어만 막혀도 당황해서 정적이 흐르게 됩니다. 답변의 핵심 키워드 흐름만 마인드맵으로 정리하고, 이를 AL·IH급 고득점 표현으로 교체하는 연습이 훨씬 효율적입니다.',
      },
      {
        title: '3콤보 문제 패턴 사전 구성',
        body: '오픽은 주로 [장소/대상 묘사 → 과거 경험 → 계기 및 변화/습관]의 3콤보 구조로 질문이 나옵니다. 자주 나오는 주제별로 3콤보 질문 흐름에 맞춘 만능 스토리라인을 미리 준비해두세요.',
      },
    ],
  },
  {
    title: 'AI Practice (GPT 활용법)',
    tips: [
      {
        title: '유튜브 모의고사 + 클로바노트 + GPT 3단계 실전 피드백 훈련',
        body: '1단계: 유튜브에서 오픽 실전 모의고사 영상(또는 질문)을 재생하고 타이머에 맞춰 직접 답변합니다.\n\n2단계: 스마트폰의 "클로바노트(Clova Note)" 앱을 켜두어 답변 음성을 실시간 녹음하고, 음성-텍스트 변환(STT) 기능으로 발화 내용을 텍스트로 추출합니다.\n\n3단계: 추출된 텍스트를 ChatGPT에 입력하고 교정 프롬프트를 사용하여 문법/시제 오류 수정 및 자연스러운 20대 원어민 톤(IH~AL급) 교정 피드백을 받습니다.',
        example: [
          {
            en: 'I am preparing for the OPIc exam targeting IH/AL level. Below is my answer transcript generated via Clova Note from a mock test.\n\nPlease:\n1. Fix all grammatical, tense, and article errors.\n2. Upgrade plain vocabulary to natural, vivid native-like expressions (20s American conversational style).\n3. Reorganize it into a clean 1-minute response keeping my original story framework.',
            ko: 'GPT 교정 및 등급 업그레이드 요청 프롬프트 예시',
          },
        ],
      },
    ],
  },
  {
    title: 'Test Day Tips (시험 당일 전략)',
    tips: [
      {
        title: '채점자와 1:1 대화하는 마인드셋',
        body: '시험장 화면 속 Eva(에바)를 친한 친구나 대화 상대라고 생각하세요. 발표나 시험 대답을 한다는 부담감 대신, 내 흥미로운 일상 이야기를 들려준다는 편안한 태도가 발화의 자연스러운 억양과 감정 표현을 끌어냅니다.',
      },
      {
        title: '당황스러운 질문엔 만능 시간 벌기(Filler) 활용',
        body: '예상치 못한 돌발 질문이나 어려운 질문을 만나도 멈추거나 정적을 만들지 마세요. "Oh wow, that is a tough question. Honestly, I haven\'t thought about that before, but let me see..."와 같은 시간 벌기용 Filler 문장을 먼저 던지면서 답변 구상을 마치는 훈련이 중요합니다.',
      },
    ],
  },
];
