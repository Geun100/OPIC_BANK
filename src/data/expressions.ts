// 표현 라이브러리 데이터 — 주제별/필러/만능 패턴/감정/연결 5개 카테고리
// ⚠️ 표현·예문은 초안이며 오픽 경험자/원어민 검증 필요 (LEARNING.md 참고)

export type Expression = {
  en: string;
  ko: string;
  example?: string;
};

export type ExpressionCategory = {
  slug: string;
  name: string;
  description: string;
  groups: { title: string; items: Expression[] }[];
};

export const expressionCategories: ExpressionCategory[] = [
  {
    slug: 'topics',
    name: '주제별 표현',
    description: '오픽 빈출 주제마다 바로 쓸 수 있는 핵심 표현',
    groups: [
      {
        title: '집',
        items: [
          {
            en: 'cozy and comfortable',
            ko: '아늑하고 편안한',
            example: 'My room is cozy and comfortable, so I spend most of my time there.',
          },
          {
            en: 'my favorite spot',
            ko: '내가 제일 좋아하는 자리',
            example: 'The couch by the window is my favorite spot in my house.',
          },
          {
            en: 'get some fresh air',
            ko: '바람을 쐬다',
            example: 'I open the window every morning to get some fresh air.',
          },
          {
            en: 'unwind after a long day',
            ko: '긴 하루 끝에 긴장을 풀다',
            example: 'Home is where I unwind after a long day.',
          },
          {
            en: 'fully furnished',
            ko: '가구가 다 갖춰진',
            example: 'I live in a fully furnished studio apartment.',
          },
        ],
      },
      {
        title: '카페',
        items: [
          {
            en: 'be a regular (at)',
            ko: '단골이다',
            example: "I'm a regular at a small café near my house.",
          },
          {
            en: 'have a cozy vibe',
            ko: '분위기가 아늑하다',
            example: 'The place has a cozy vibe with warm lighting.',
          },
          {
            en: 'grab a cup of coffee',
            ko: '커피 한 잔을 사다/마시다',
            example: 'I usually grab a cup of coffee on my way to work.',
          },
          {
            en: 'catch up with friends',
            ko: '친구들과 밀린 수다를 떨다',
            example: 'I go there to catch up with friends on weekends.',
          },
          {
            en: 'freshly brewed coffee',
            ko: '갓 내린 커피',
            example: 'Nothing beats the smell of freshly brewed coffee.',
          },
        ],
      },
      {
        title: '영화',
        items: [
          { en: 'a huge fan of', ko: '~의 열렬한 팬', example: "I'm a huge fan of action movies." },
          {
            en: 'keep me on the edge of my seat',
            ko: '손에 땀을 쥐게 하다',
            example: 'The movie kept me on the edge of my seat the whole time.',
          },
          {
            en: 'highly recommend',
            ko: '강력 추천하다',
            example: 'I highly recommend watching it in theaters.',
          },
          { en: 'the plot twist', ko: '반전', example: 'The plot twist at the end blew my mind.' },
          {
            en: 'worth watching',
            ko: '볼 만한 가치가 있는',
            example: "It's definitely worth watching twice.",
          },
        ],
      },
      {
        title: '여행',
        items: [
          {
            en: 'a memorable trip',
            ko: '기억에 남는 여행',
            example: 'The most memorable trip I took was to Jeju Island.',
          },
          {
            en: 'soak up the atmosphere',
            ko: '분위기를 만끽하다',
            example: 'I love walking around and soaking up the atmosphere.',
          },
          {
            en: 'off the beaten path',
            ko: '잘 알려지지 않은',
            example: 'We found a small restaurant off the beaten path.',
          },
          {
            en: 'recharge my batteries',
            ko: '재충전하다',
            example: 'Traveling helps me recharge my batteries.',
          },
          {
            en: 'breathtaking scenery',
            ko: '숨막히게 아름다운 풍경',
            example: 'The scenery from the top was breathtaking.',
          },
        ],
      },
      {
        title: '운동 (걷기·조깅)',
        items: [
          {
            en: 'keep myself in shape',
            ko: '건강/몸매를 유지하다',
            example: 'I go jogging every morning to keep myself in shape.',
          },
          {
            en: 'clear my head',
            ko: '머리를 식히다',
            example: 'Walking along the river helps me clear my head.',
          },
          {
            en: 'work up a sweat',
            ko: '땀을 흘리다',
            example: 'I like to work up a sweat before breakfast.',
          },
          {
            en: 'at my own pace',
            ko: '내 페이스대로',
            example: 'I enjoy jogging at my own pace without pressure.',
          },
          {
            en: 'make it a habit',
            ko: '습관으로 만들다',
            example: "I've made it a habit to walk at least 30 minutes a day.",
          },
        ],
      },
      {
        title: '공원',
        items: [
          {
            en: 'take a stroll',
            ko: '산책하다',
            example: 'I take a stroll in the park every evening.',
          },
          {
            en: 'people-watching',
            ko: '사람 구경',
            example: 'I enjoy people-watching on a bench.',
          },
          {
            en: 'have a picnic',
            ko: '소풍을 즐기다',
            example: 'Families have picnics on the grass on weekends.',
          },
          {
            en: 'lush green trees',
            ko: '울창한 푸른 나무들',
            example: 'The park is full of lush green trees in summer.',
          },
          {
            en: 'escape the hustle and bustle',
            ko: '번잡함에서 벗어나다',
            example: "It's a great place to escape the hustle and bustle of the city.",
          },
        ],
      },
    ],
  },
  {
    slug: 'filler',
    name: '필러 (Filler)',
    description: '답변이 끊기지 않게 자연스럽게 시간을 벌어주는 연결 표현',
    groups: [
      {
        title: '답변 시작할 때',
        items: [
          { en: 'Well...', ko: '음...', example: "Well, that's an interesting question." },
          { en: "That's a good question.", ko: '좋은 질문이네요 (생각할 시간 벌기)' },
          { en: 'Hmm, let me think...', ko: '음, 생각해볼게요...' },
          { en: 'Oh, where do I start?', ko: '오, 어디서부터 말하지?' },
        ],
      },
      {
        title: '생각이 안 날 때',
        items: [
          { en: 'What was it called...', ko: '그게 뭐였더라...' },
          { en: "It's on the tip of my tongue.", ko: '혀끝에서 맴도네요.' },
          { en: 'As far as I remember...', ko: '내 기억으로는...' },
          { en: 'If I remember correctly...', ko: '내가 제대로 기억한다면...' },
        ],
      },
      {
        title: '말 이어갈 때',
        items: [
          { en: 'Actually...', ko: '사실은...' },
          { en: 'To be honest...', ko: '솔직히 말하면...' },
          { en: 'Come to think of it...', ko: '생각해 보니...' },
          { en: 'You know what?', ko: '있잖아요' },
        ],
      },
      {
        title: '마무리할 때',
        items: [
          { en: "That's pretty much it.", ko: '대충 그게 다예요.' },
          { en: "So yeah, that's the story.", ko: '네, 그런 이야기예요.' },
          { en: 'Anyway, long story short...', ko: '어쨌든 요약하자면...' },
        ],
      },
    ],
  },
  {
    slug: 'patterns',
    name: '만능 문장 패턴',
    description: '어떤 주제가 나와도 답변 뼈대로 쓸 수 있는 문장 구조',
    groups: [
      {
        title: '습관·일상 말하기',
        items: [
          {
            en: 'I usually ... when I have free time.',
            ko: '시간 나면 보통 ~해요',
            example: 'I usually watch movies when I have free time.',
          },
          {
            en: 'I tend to ...',
            ko: '~하는 편이에요',
            example: 'I tend to stay home on weekends.',
          },
          {
            en: "I've made it a routine to ...",
            ko: '~하는 게 루틴이 됐어요',
            example: "I've made it a routine to jog every morning.",
          },
        ],
      },
      {
        title: '좋아하는 이유 말하기',
        items: [
          {
            en: 'One thing I really like about ... is ...',
            ko: '~에서 정말 좋은 점 하나는 ~',
            example: 'One thing I really like about my neighborhood is the quiet park.',
          },
          {
            en: 'What I enjoy most is ...',
            ko: '내가 가장 즐기는 건 ~',
            example: 'What I enjoy most is the moment right after finishing a run.',
          },
          {
            en: 'The reason I ... is that ...',
            ko: '내가 ~하는 이유는 ~',
            example: 'The reason I go there often is that the coffee is amazing.',
          },
        ],
      },
      {
        title: '경험 말하기 (과거)',
        items: [
          {
            en: 'The most memorable ... was when ...',
            ko: '가장 기억에 남는 ~는 ~했을 때',
            example: 'The most memorable trip was when I visited Busan with my friends.',
          },
          {
            en: 'It was such a ... experience that ...',
            ko: '너무 ~한 경험이라 ~',
            example: 'It was such a fun experience that I still talk about it.',
          },
          {
            en: 'Looking back, ...',
            ko: '돌이켜 보면 ~',
            example: 'Looking back, it was one of the best decisions I made.',
          },
        ],
      },
      {
        title: '비교·변화 말하기',
        items: [
          {
            en: 'Compared to before, ...',
            ko: '예전과 비교하면 ~',
            example: 'Compared to before, I exercise a lot more these days.',
          },
          {
            en: 'It used to be ..., but now ...',
            ko: '예전엔 ~였는데 지금은 ~',
            example: "It used to be a quiet town, but now it's full of cafés.",
          },
        ],
      },
    ],
  },
  {
    slug: 'emotions',
    name: '감정 표현',
    description: '답변에 생동감을 더하는 감정·리액션 표현',
    groups: [
      {
        title: '기쁨·신남',
        items: [
          { en: 'I was over the moon.', ko: '정말 뛸 듯이 기뻤어요.' },
          { en: 'It totally made my day.', ko: '그 덕에 하루가 행복했어요.' },
          { en: "I couldn't stop smiling.", ko: '웃음이 멈추지 않았어요.' },
        ],
      },
      {
        title: '놀람',
        items: [
          { en: 'It blew my mind.', ko: '정말 놀라웠어요.' },
          { en: "I couldn't believe my eyes.", ko: '내 눈을 의심했어요.' },
          { en: 'It caught me off guard.', ko: '허를 찔렸어요/예상 못 했어요.' },
        ],
      },
      {
        title: '아쉬움·당황',
        items: [
          { en: 'It was a bummer.', ko: '아쉬웠어요.' },
          { en: 'I was at a loss.', ko: '어쩔 줄 몰랐어요.' },
          { en: 'My mind went blank.', ko: '머릿속이 하얘졌어요.' },
        ],
      },
    ],
  },
  {
    slug: 'connectors',
    name: '연결 표현',
    description: '문장과 문장을 자연스럽게 이어주는 표현',
    groups: [
      {
        title: '순서·전개',
        items: [
          { en: 'First of all / To begin with', ko: '우선 / 먼저' },
          { en: 'After that / And then', ko: '그 후에 / 그리고 나서' },
          { en: 'In the end / Eventually', ko: '결국 / 마침내' },
        ],
      },
      {
        title: '이유·결과',
        items: [
          { en: "That's why ...", ko: '그래서 ~' },
          { en: 'Thanks to that, ...', ko: '그 덕분에 ~' },
          { en: 'As a result, ...', ko: '그 결과 ~' },
        ],
      },
      {
        title: '추가·강조',
        items: [
          { en: 'On top of that, ...', ko: '게다가 ~' },
          { en: "What's more, ...", ko: '더구나 ~' },
          { en: 'Most importantly, ...', ko: '무엇보다도 ~' },
        ],
      },
    ],
  },
];

export function getCategory(slug: string) {
  return expressionCategories.find((c) => c.slug === slug);
}
