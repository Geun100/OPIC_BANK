// 오픽 TIP 데이터 — 암기용 표현이 아닌 실전 전략/화법 팁 모음
// 출처: 써니(luckysunnyc) 2026 오픽 인사이트 자료를 요약·각색

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
    title: '암기 전략',
    tips: [
      {
        title: '대본 통암기 대신 키워드 암기',
        body: '답변 전체를 외우면 시험장에서 당황하기 쉬워요. 핵심 키워드만 뽑아 흐름을 만들고, 그 키워드를 AL·IH급 표현으로 업그레이드한 리스트만 외우는 게 더 도움이 됩니다.',
      },
      {
        title: '콤보 문제 패턴 미리 구성하기',
        body: '오픽은 [묘사 - 경험 - 습관 - 비교] 순서로 이어지는 콤보 문제가 많아요. 이 카테고리가 나올 때 어떤 구조로 답할지 미리 구성해두는 연습이 효과적입니다.',
      },
      {
        title: '녹음 후 전략집과 비교하기',
        body: '내 답변을 녹음해서 들어본 뒤 천천히 수정해보세요. 녹음하면 객관적인 목소리로 더 냉철하게 분석할 수 있어요.',
      },
    ],
  },
  {
    title: '속도·억양으로 자연스럽게 말하기',
    tips: [
      {
        title: 'Intro는 느리게, Main Story는 속도감 있게, Ending은 안정적으로',
        body: '서론을 천천히 말하며 생각할 시간을 확보하세요. 초반에 조금 버벅대도 중간부터 흐름이 붙으면 빠르게 말해도 괜찮습니다. 너무 천천히 말하거나 반대로 너무 빨리 말하면 외운 티가 나서 부자연스러워요.',
        example: [
          { en: 'Well, honestly, let me think for a second...', ko: 'Intro — 약간 당황한 듯이' },
          {
            en: 'Actually, one place that immediately comes to mind is...',
            ko: 'Main Story — 속도감 있게',
          },
          { en: "So yeah, that's why I really cherish that place.", ko: 'Ending — 차분하게' },
        ],
      },
      {
        title: 'Chunking — 의미 단위로 끊어 말하기',
        body: '단어 단위가 아니라 의미군 단위로 문장을 끊어 말하세요. 슬래시(/) 기준으로 끊어 읽으면서 키워드에 강세를 주면, 흐름이 느려져도 "생각 중"이라는 느낌을 줘서 어색하지 않아요.',
        example: [
          { en: 'I decided to go to the park to get some fresh air.', ko: '❌ 일반 발화' },
          {
            en: 'I decided to go / to the park / to get some fresh air.',
            ko: '⭕ Chunking 발화',
          },
        ],
      },
    ],
  },
  {
    title: '답변 구조',
    tips: [
      {
        title: 'STEP 1~4 — Main Point → Reason → Detail → Feeling',
        body: '질문을 받으면 무조건 Main Point(두괄식)부터 말하고, 바로 Reason을 붙이고, TMI·차별화 Detail을 더한 뒤, Slang과 감정 표현으로 마무리하세요. 암기 티 없이 조리 있게 말하는 척이라도 할 수 있는 구조입니다.',
        example: [
          {
            en: 'My favorite singer is definitely IU. She’s the GOAT.',
            ko: 'Main Point — 두괄식',
          },
          {
            en: 'The reason why I love her is that her lyrics are incredibly touching.',
            ko: 'Reason',
          },
          {
            en: 'Unlike typical K-pop idols who focus mainly on performance, she really emphasizes storytelling and it instantly heals me.',
            ko: 'Detail — 차별화',
          },
          { en: "Well honestly, I'm obsessed.", ko: 'Feeling — 감정 마무리' },
        ],
      },
      {
        title: '감정 표현 + 이유만 붙여도 답변이 길어진다',
        body: '암기 티가 나면 유창하게 말해도 감점될 수 있는 시험이에요. 일반 문장에 감정 표현과 그렇게 느낀 이유만 잘 설명해줘도 문장 길이와 답변 안정감이 확 살아납니다.',
      },
    ],
  },
  {
    title: '서베이 선택 전략',
    tips: [
      {
        title: '비슷한 주제는 묶어서 고르기',
        body: '여가 활동은 "공원 가기·해변 가기·캠핑 가기"처럼 느낌이 비슷한 것끼리 묶어 고르면 질문의 폭이 좁아져요. 해외여행/국내여행도 하나의 여행지 감상만 준비하면 되니 둘 다 골라도 됩니다.',
      },
      {
        title: '전문적 질문을 차단하는 선택',
        body: '직장인 아님, 학생 아님, 혼자 거주, 운동 안 함 등으로 골라서 "행동 기반 전문 질문"이 나올 가능성을 최대한 차단하는 것도 전략이에요.',
      },
    ],
  },
  {
    title: '복습 루틴',
    tips: [
      {
        title: '녹음 + GPT 피드백으로 약점 노트 만들기',
        body: '유튜브로 오픽 모의고사를 진행하고 직접 답변한 뒤, GPT 음성 모드로 내 답변을 텍스트로 변환해 피드백을 받아보세요. 새로 알게 된 표현이나 입에 붙지 않는 단어는 즉시 한글 뜻 → 영어 표현 순으로 메모해서 24시간 안에 복습하는 게 핵심입니다.',
        example: [
          {
            en: '지금부터 나는 오픽 희망 등급: ~이고! 내가 말하는 답변에 맞춰서, 문법 오류/시제 오류/관사 오류 수정해주고, 자연스러운 원어민 같은 20대 느낌을 담아 1분 답변으로 수정해줘.',
            ko: 'GPT 피드백 프롬프트 예시 (최대한 디테일하게 조건을 넣을수록 좋아요)',
          },
        ],
      },
    ],
  },
  {
    title: '마인드셋',
    tips: [
      {
        title: '채점자를 웃게 만들겠다는 마음으로',
        body: '"대답을 잘해야지"보다는 친한 친구랑 수다 떠는 느낌으로 가볍게 임하세요. 지루하지 않게 답하려는 태도와 당당함이 실제로 점수에 도움이 됩니다.',
      },
    ],
  },
];
