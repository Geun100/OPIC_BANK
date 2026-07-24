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
      {
        title: '공연',
        items: [
          {
            en: 'get goosebumps',
            ko: '소름이 돋다',
            example: 'The ending was so powerful that I got goosebumps.',
          },
          {
            en: 'a standing ovation',
            ko: '기립박수',
            example: 'The whole audience gave a standing ovation at the end.',
          },
          {
            en: 'once in a lifetime',
            ko: '일생에 한 번뿐인',
            example: 'Watching it live felt like a once in a lifetime experience.',
          },
          {
            en: 'worth every penny',
            ko: '돈이 하나도 안 아까운',
            example: 'The tickets were expensive, but it was worth every penny.',
          },
        ],
      },
      {
        title: '콘서트',
        items: [
          {
            en: 'sing along',
            ko: '따라 부르다',
            example: 'Everyone was singing along the whole time.',
          },
          {
            en: 'the opening act',
            ko: '오프닝 공연',
            example: 'The opening act was surprisingly good.',
          },
          { en: 'sold out', ko: '매진된', example: 'The concert was sold out within minutes.' },
          {
            en: 'an unforgettable night',
            ko: '잊을 수 없는 밤',
            example: 'It turned out to be an unforgettable night.',
          },
        ],
      },
      {
        title: '쇼핑',
        items: [
          {
            en: 'window shopping',
            ko: '아이쇼핑',
            example: 'I like window shopping even when I have no money to spend.',
          },
          { en: 'browse around', ko: '둘러보다', example: 'I usually just browse around first.' },
          {
            en: 'a great deal',
            ko: '저렴하게 잘 산 것',
            example: 'I got a great deal on this jacket.',
          },
          {
            en: 'try something on',
            ko: '(옷을) 입어보다',
            example: 'I always try things on before I buy them.',
          },
        ],
      },
      {
        title: '음악 감상',
        items: [
          {
            en: 'make a playlist',
            ko: '플레이리스트를 만들다',
            example: 'I make a playlist for different moods.',
          },
          {
            en: 'have a good ear for music',
            ko: '음악 듣는 귀가 있다',
            example: 'I think I have a pretty good ear for music.',
          },
          {
            en: 'put on some music',
            ko: '음악을 틀다',
            example: 'I put on some music the moment I get home.',
          },
          {
            en: 'lyrics that hit different',
            ko: '유난히 와닿는 가사',
            example: 'This song has lyrics that hit different.',
          },
        ],
      },
    ],
  },
  {
    slug: 'filler',
    name: '필러 (Filler)',
    description:
      '답변이 끊기지 않게 자연스럽게 시간을 벌어주는 연결 표현 — 침묵 대신 필러로 잇는 것이 유창성 점수의 핵심이에요',
    groups: [
      {
        title: '답변 시작 — 쉬운 질문이 나왔을 때',
        items: [
          {
            en: 'Oh, I love this question.',
            ko: '오, 이 질문 너무 좋아요 (자신 있게 시작하는 인상)',
          },
          {
            en: 'I actually have a pretty vivid memory of this.',
            ko: '이건 꽤 생생하게 기억나요 (경험 답변 도입에 최적)',
          },
        ],
      },
      {
        title: '답변 시작 — 어려운 질문이 나왔을 때',
        items: [
          { en: "That's a tough one.", ko: '어려운 질문이네요 (생각할 시간 벌기)' },
          {
            en: 'Let me think about that for a second.',
            ko: '잠깐 생각해볼게요',
            example: 'Hmm, let me think about that for a second... Oh, I remember!',
          },
          {
            en: 'How should I put this?',
            ko: '이걸 어떻게 표현해야 하지? (암기 답변이 아니라는 인상을 주는 혼잣말)',
          },
        ],
      },
      {
        title: '말 보정·구체화할 때',
        items: [
          {
            en: 'I mean...',
            ko: '그러니까 제 말은... (방금 한 말을 구체화·정정)',
            example: 'It was fun. I mean, it was the best trip I ever had.',
          },
          { en: 'Actually, to be honest...', ko: '사실 솔직히 말하면... (반전·솔직한 생각 앞에)' },
          {
            en: 'You know...',
            ko: '있잖아요, 알다시피 (문장 사이 자연스러운 연결)',
            example: 'It was, you know, a really great experience.',
          },
          { en: 'Basically...', ko: '기본적으로/한마디로...' },
        ],
      },
      {
        title: '생각이 안 날 때',
        items: [
          { en: 'What was it called...', ko: '그게 뭐였더라...' },
          { en: 'As far as I remember...', ko: '내 기억으로는...' },
          {
            en: 'Let me see...',
            ko: '어디 보자, 그러니까',
            example: 'Let me see... I think it was about two years ago.',
          },
        ],
      },
      {
        title: '말 안 끊기는 필러 치트키',
        items: [
          { en: 'Well', ko: '글쎄, 음', example: "Well, I've never thought about that before." },
          {
            en: 'Actually',
            ko: '사실은, 실제로',
            example: "Actually, I've been there a couple of times.",
          },
          {
            en: 'Like',
            ko: '뭐랄까, ~같은',
            example: "It was like the best movie I've ever seen.",
          },
          {
            en: 'To be honest',
            ko: '솔직히 말해서',
            example: 'To be honest, I was a bit nervous at first.',
          },
          {
            en: 'You know what I mean?',
            ko: '내 말 무슨 뜻인지 알지?',
            example: 'It was so crowded, you know what I mean?',
          },
          {
            en: 'Kind of / Sort of',
            ko: '약간, 어느 정도',
            example: 'It was kind of expensive, but worth it.',
          },
        ],
      },
      {
        title: '다음 이야기로 넘어갈 때 (브릿지)',
        items: [
          {
            en: 'What else can I say...',
            ko: '또 무슨 말을 할 수 있을까... (말이 끊길 것 같을 때 다음 에피소드를 떠올리는 다리)',
          },
          { en: 'Come to think of it...', ko: '생각해 보니...' },
          { en: 'Oh, and one more thing.', ko: '아, 하나 더요.' },
        ],
      },
      {
        title: '마무리할 때',
        items: [
          { en: "That's pretty much it.", ko: '대충 그게 다예요.' },
          {
            en: "So yeah, that's why I love it.",
            ko: '그래서 제가 좋아하는 거예요 (이유로 마무리)',
          },
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
          {
            en: 'A is ..., while B is ..., but personally I prefer A because ...',
            ko: 'A는 ~고 B는 ~지만, 나는 ~해서 A가 좋아요 (비교 답변은 선호로 마무리하면 완성도가 올라가요)',
            example:
              'Parks are free and relaxing, while cafés cost money, but personally I prefer parks because I can bring my dog.',
          },
        ],
      },
      {
        title: '관계대명사로 문장 늘리기',
        items: [
          {
            en: 'I have a friend who lives in Canada.',
            ko: '[Who] 캐나다에 사는 친구가 있어요',
          },
          {
            en: 'I bought a new phone which has a great camera.',
            ko: '[Which] 카메라 기능이 좋은 새 폰을 샀어요',
          },
          {
            en: 'This is the cafe that I told you about.',
            ko: '[That] 이게 내가 말했던 그 카페야',
          },
          {
            en: 'I visited the park where I used to play.',
            ko: '[Where] 내가 예전에 놀던 그 공원에 갔어',
          },
          {
            en: 'I remember the day when we first met.',
            ko: '[When] 우리가 처음 만난 날이 기억나',
          },
        ],
      },
      {
        title: '부사로 원어민 느낌 내기',
        items: [
          {
            en: 'Basically',
            ko: '기본적으로, 결국',
            example: "Basically, I'm a big fan of action movies, so I watch them every weekend.",
          },
          { en: 'Literally', ko: '말 그대로, 진짜' },
          { en: 'Definitely', ko: '확실히, 당연히' },
          { en: 'Totally', ko: '완전히, 전적으로' },
          { en: 'Personally', ko: '개인적으로는' },
          { en: 'Obviously', ko: '누가 봐도, 분명히' },
        ],
      },
      {
        title: '질문 반응·마무리 패턴',
        items: [
          {
            en: "Oh, that's an interesting question! Let me think about it for a second... okay.",
            ko: '일반적인 주제 — 바로 답하지 말고 질문에 먼저 반응하기',
          },
          {
            en: "Wow, I've never really thought about that before. To be honest, it's a bit of a tough one, but let me try.",
            ko: '어렵거나 처음 들어본 질문일 때',
          },
          {
            en: 'Actually, I was just talking about this with my friend the other day!',
            ko: '익숙한 주제가 나왔을 때',
          },
          {
            en: "So, basically, that's why I love hiking. Anyway, it was a memorable experience.",
            ko: '요약하며 마무리할 때',
          },
          {
            en: 'What about you, Eva? Have you ever been there? I high-key recommend it!',
            ko: '면접관에게 역질문하며 끝내기',
          },
          {
            en: "That's all I can say about this.",
            ko: '답변을 완전히 끝맺을 때',
          },
        ],
      },
      {
        title: '답변 뼈대 — What · Feeling · Why',
        items: [
          {
            en: 'I usually ... (What)',
            ko: '1단계: 무엇을 하는지',
            example: 'I usually listen to music at the café.',
          },
          {
            en: 'It makes me feel ... (Feeling)',
            ko: '2단계: 어떤 감정인지',
            example: 'It makes me feel so refreshed.',
          },
          {
            en: "That's mainly because ... (Why)",
            ko: '3단계: 왜 그런지 — 이 3단계만 지켜도 문장이 자연스럽게 늘어나요',
            example: "That's mainly because I'm really into dance music these days.",
          },
        ],
      },
      {
        title: '위기 탈출 — 정말 모르는 질문이 나왔을 때',
        items: [
          {
            en: "Hmm... that's a tough question, Ava.",
            ko: '음... 어려운 질문이네요 (침묵하지 말고 일단 반응)',
          },
          {
            en: "Actually, I don't have any experience with this.",
            ko: '사실 이건 경험이 없어요 (솔직하게 말하는 것도 전략)',
          },
          {
            en: "So I think I'd better move on to the next question.",
            ko: '다음 질문으로 넘어가는 게 좋겠어요 (한 문제는 이렇게 패스해도 IH 달성 후기가 있어요)',
          },
        ],
      },
    ],
  },
  {
    slug: 'emotions',
    name: '감정 표현',
    description:
      '"It was good"만 반복하면 암기한 답처럼 들려요. 구체적인 감정 형용사가 진짜 내 경험처럼 만들어줘요',
    groups: [
      {
        title: '긍정 — good을 업그레이드',
        items: [
          { en: 'amazing / awesome / fantastic', ko: 'good 대신 쓰는 업그레이드 3종' },
          { en: 'I was thrilled.', ko: '완전 신났어요/설렜어요.' },
          {
            en: 'relaxed / peaceful',
            ko: '편안한, 평화로운 (힐링 스토리에)',
            example: 'I felt so relaxed after the walk in the park.',
          },
          {
            en: "I'm really into ...",
            ko: '~에 푹 빠져 있어요 (몰입·애정)',
            example: "I'm really into indie music these days.",
          },
          {
            en: 'chill',
            ko: '느긋한, 여유로운 (집·카페 답변의 필수템)',
            example: 'I just stayed home and had a chill day.',
          },
        ],
      },
      {
        title: '부정 — bad를 업그레이드',
        items: [
          {
            en: 'frustrating',
            ko: '답답한, 짜증 나는 (문제 상황 답변 필수템)',
            example: "It was so frustrating because the app didn't work.",
          },
          {
            en: 'exhausted',
            ko: 'tired를 넘어 완전히 녹초가 된',
            example: 'After the trip, I was totally exhausted.',
          },
          { en: 'overwhelmed / stressful', ko: '벅찬, 스트레스 받는' },
          { en: 'annoyed / irritated', ko: '짜증 난' },
          { en: 'disappointed', ko: '실망한' },
        ],
      },
      {
        title: '상황에 생동감을 주는 표현',
        items: [
          {
            en: 'breathtaking',
            ko: '숨이 멎을 듯한 (풍경·공연 묘사)',
            example: 'The view from the top was just breathtaking.',
          },
          {
            en: 'awkward',
            ko: '어색한, 민망한 (에피소드에 감칠맛)',
            example: 'I forgot her name, and it was so awkward.',
          },
          { en: 'It blew my mind.', ko: '정말 놀라웠어요.' },
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
