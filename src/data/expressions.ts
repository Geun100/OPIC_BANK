// 표현 라이브러리 데이터 — 주제별/필러/만능 패턴/감정/연결 5개 카테고리
// ⚠️ 표현·예문은 초안이며 오픽 경험자/원어민 검증 필요 (LEARNING.md 참고)

export type Expression = {
  en: string;
  ko: string;
  example?: string;
  exampleKo?: string;
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
        title: '국내여행',
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
        title: '해외여행',
        items: [
          {
            en: 'a fairly short flight away',
            ko: '비행으로 그렇게 오래 안 걸리는',
            example: "It's a fairly short flight away, but it feels completely different.",
          },
          {
            en: 'off the beaten path',
            ko: '주요 관광지에서 벗어난',
            example: 'We stayed in a small area off the beaten path.',
          },
          {
            en: 'a language barrier',
            ko: '언어 장벽',
            example: 'Even with a language barrier, the local helped me out.',
          },
          {
            en: 'feel like an adventure',
            ko: '모험처럼 느껴지다',
            example: 'Relying on basic phrases made the trip feel like an adventure.',
          },
        ],
      },
      {
        title: '집에서 보내는 휴가',
        items: [
          {
            en: 'slow down completely',
            ko: '완전히 속도를 늦추다',
            example: 'A staycation is a chance to slow down completely.',
          },
          {
            en: 'without a strict schedule',
            ko: '엄격한 일정 없이',
            example: 'I plan a loose list of things to do without a strict schedule.',
          },
          {
            en: 'sleep in',
            ko: '늦잠을 자다',
            example: 'I usually sleep in later than normal on a staycation.',
          },
          {
            en: 'surprisingly restorative',
            ko: '의외로 재충전이 되는',
            example: 'Staycations end up feeling surprisingly restorative.',
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
      {
        title: '캠핑',
        items: [
          {
            en: 'set up a tent',
            ko: '텐트를 치다',
            example: 'We set up a tent near the lake.',
          },
          {
            en: 'build a small fire',
            ko: '작은 모닥불을 피우다',
            example: 'We build a small fire and relax around it until late.',
          },
          {
            en: 'a refreshing escape',
            ko: '상쾌한 도피처',
            example: 'Camping feels like such a refreshing escape from the city.',
          },
          {
            en: 'disconnect from my daily routine',
            ko: '일상에서 벗어나다',
            example: 'Camping helps me disconnect from my daily routine.',
          },
        ],
      },
      {
        title: '스포츠 관람',
        items: [
          {
            en: 'a close match',
            ko: '접전인 경기',
            example: 'A close match that comes down to the final minutes is the most exciting.',
          },
          {
            en: 'the atmosphere',
            ko: '(경기장의) 분위기',
            example: 'What I like most about watching sports live is the atmosphere.',
          },
          {
            en: 'go into overtime',
            ko: '연장전에 들어가다',
            example: 'The match went into overtime.',
          },
          {
            en: 'the winning goal',
            ko: '결승골',
            example: 'Everyone jumped up when the winning goal went in.',
          },
        ],
      },
      {
        title: '해변',
        items: [
          {
            en: 'a long stretch of white sand',
            ko: '길게 펼쳐진 백사장',
            example: 'The beach has a long stretch of white sand.',
          },
          {
            en: 'calm and clear',
            ko: '잔잔하고 맑은',
            example: 'The water is usually calm and clear.',
          },
          {
            en: 'right along the coast',
            ko: '해안가를 따라',
            example: 'There are cafes right along the coast.',
          },
        ],
      },
      {
        title: '가구·전자제품',
        items: [
          {
            en: 'simple, functional furniture',
            ko: '단순하고 실용적인 가구',
            example: 'I mostly have simple, functional furniture.',
          },
          {
            en: 'keep cables organized',
            ko: '케이블을 정리해두다',
            example: 'I try to keep cables and chargers organized.',
          },
          {
            en: "the one spot I'd miss the most",
            ko: '제일 그리워할 자리',
            example: "It's the piece of furniture I'd miss the most.",
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
          {
            en: 'This question is so my thing.',
            ko: '이 질문은 나랑 정말 잘 맞는 주제다 (관심 있는 주제일 때)',
          },
        ],
      },
      {
        title: '좋아하는 것 표현',
        items: [
          { en: 'I am a big fan of...', ko: '나는 ~의 완전 팬이다' },
          { en: "I've been really into...", ko: '나 요즘 ~에 푹 빠져 있다' },
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
          { en: "That's why I like them.", ko: '그래서 나는 그들이 좋다.' },
          { en: 'It just relieves my stress.', ko: '그건 내 스트레스를 해소해 준다.' },
          { en: 'It makes me feel really happy.', ko: '그건 나를 정말 행복하게 만든다.' },
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
      {
        title: '고득점 복문 — 주어+동사 문장 연결',
        items: [
          { en: 'There was a time when...', ko: '~했던 적이 있다' },
          { en: 'The best thing is that...', ko: '가장 좋은 점은 ~라는 것이다' },
          { en: 'What I love the most is that...', ko: '내가 가장 좋아하는 부분은 ~라는 것이다' },
          { en: 'The reason is that...', ko: '그 이유는 ~이기 때문이다' },
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
  {
    slug: 'essentials',
    name: '필수 기본 표현',
    description:
      '자기소개, 일상생활, 취미, 의견, 문제 해결 — 오픽 어디서나 쓰이는 뼈대 문장 5종. [ ] 자리에 내 이야기를 채워 넣으세요',
    groups: [
      {
        title: '자기소개',
        items: [
          {
            en: "Hi, my name is [name]. I'm from [city]. I work as a [job].",
            ko: '안녕하세요, 제 이름은 [이름]입니다. 저는 [도시]에서 왔고, [직업]으로 일하고 있습니다.',
            example: "Hi, my name is Jimin. I'm from Seoul. I work as a marketer.",
          },
          {
            en: 'In my free time, I enjoy [hobby].',
            ko: '여가 시간에는 [취미]를 즐깁니다.',
            example: 'In my free time, I enjoy watching movies.',
          },
          {
            en: "I'm passionate about [interest].",
            ko: '저는 [관심사]에 열정을 가지고 있습니다.',
            example: "I'm passionate about photography.",
          },
        ],
      },
      {
        title: '일상생활',
        items: [
          {
            en: 'I wake up at [time] and have [meal] for breakfast.',
            ko: '저는 [시간]에 일어나서 [식사]를 아침으로 먹습니다.',
            example: 'I wake up at 7 and have toast for breakfast.',
          },
          {
            en: 'I usually go to work by [transportation].',
            ko: '저는 보통 [교통수단]으로 출근합니다.',
            example: 'I usually go to work by subway.',
          },
          {
            en: 'After work, I like to relax by [activity].',
            ko: '퇴근 후, 저는 [활동]을 하며 휴식을 취합니다.',
            example: 'After work, I like to relax by watching a show.',
          },
        ],
      },
      {
        title: '취미·관심사',
        items: [
          {
            en: 'One of my hobbies is [hobby]. I find it really interesting because [reason].',
            ko: '제 취미 중 하나는 [취미]입니다. [이유] 때문에 정말 흥미롭다고 생각합니다.',
            example:
              'One of my hobbies is jogging. I find it really interesting because it clears my head.',
          },
          {
            en: "I'm very interested in [interest]. I spend a lot of time [activity].",
            ko: '저는 [관심사]에 매우 관심이 많습니다. [활동]에 많은 시간을 보냅니다.',
            example: "I'm very interested in music. I spend a lot of time making playlists.",
          },
          {
            en: 'In my free time, I enjoy [activity] with my friends/family.',
            ko: '여가 시간에는 친구/가족과 [활동]을 즐깁니다.',
            example: 'In my free time, I enjoy going to cafés with my friends.',
          },
        ],
      },
      {
        title: '의견 표현',
        items: [
          {
            en: 'In my opinion, [subject] is [adjective] because [reason].',
            ko: '제 의견으로는 [주제]는 [형용사]입니다. 그 이유는 [이유]입니다.',
            example:
              'In my opinion, working from home is convenient because it saves commuting time.',
          },
          {
            en: 'I think [subject] is a great idea because [reason].',
            ko: '저는 [주제]가 좋은 아이디어라고 생각합니다. 그 이유는 [이유]입니다.',
            example:
              'I think recycling programs are a great idea because they help the environment.',
          },
          {
            en: 'Personally, I believe [subject] is important because [reason].',
            ko: '개인적으로, 저는 [주제]가 중요하다고 믿습니다. 그 이유는 [이유]입니다.',
            example:
              'Personally, I believe exercise is important because it keeps me both physically and mentally healthy.',
          },
        ],
      },
      {
        title: '문제 해결 표현',
        items: [
          {
            en: 'If I were in that situation, I would [action].',
            ko: '제가 그 상황이라면, 저는 [행동]할 것 같아요.',
            example:
              'If I were in that situation, I would apologize first and offer a replacement.',
          },
          {
            en: 'The best way to solve this would be to [action].',
            ko: '이걸 해결하는 가장 좋은 방법은 [행동]하는 거예요.',
            example: 'The best way to solve this would be to contact customer service directly.',
          },
          {
            en: "I would try to fix it by [action], and if that doesn't work, I would [backup action].",
            ko: '저는 [행동]으로 해결하려고 할 거고, 그게 안 되면 [대안 행동]할 거예요.',
            example:
              "I would try to fix it by explaining the situation calmly, and if that doesn't work, I would ask for a refund.",
          },
        ],
      },
    ],
  },
  {
    slug: 'everyday',
    name: '일상 회화 표현',
    description:
      '오픽 답변뿐 아니라 실제 대화에서도 자주 쓰는 숙어·패턴 문장·리액션 모음. 표현·뜻·예문·예문 해석까지 한 번에 확인하세요.',
    groups: [
      {
        title: '숙어 표현',
        items: [
          {
            en: 'I tend to',
            ko: '~하는 편이다',
            example: 'I tend to start my day with a cup of coffee.',
            exampleKo: '나는 하루를 커피 한 잔으로 시작하는 편이다.',
          },
          {
            en: 'be used to',
            ko: '~에 익숙하다',
            example: "I'm used to exercising three times a week.",
            exampleKo: '나는 주 3회 운동하는 것에 익숙하다.',
          },
          {
            en: 'be all about',
            ko: '~을 매우 좋아하다',
            example: "I'm all about trying different kinds of food.",
            exampleKo: '나는 다양한 음식을 시도해보는 걸 정말 좋아한다.',
          },
          {
            en: 'be planning on',
            ko: '무엇을 할 계획 중이다',
            example: "I'm planning on visiting a new country this summer.",
            exampleKo: '나는 이번 여름에 새로운 나라를 방문할 계획이다.',
          },
          {
            en: 'get stressed out',
            ko: '스트레스 받다',
            example: 'I go out when I get stressed out.',
            exampleKo: '나는 스트레스를 받으면 밖에 나간다.',
          },
          {
            en: 'stay away from',
            ko: '무엇을 피하려고 하다',
            example: 'I try to stay away from junk food to stay healthy.',
            exampleKo: '나는 건강을 위해 정크푸드를 피하려고 노력한다.',
          },
          {
            en: 'be hooked on',
            ko: '무엇에 푹 빠져 있다',
            example: "I'm hooked on listening to K-pop music lately.",
            exampleKo: '나는 요즘 K팝 음악 듣는 것에 푹 빠져 있다.',
          },
          {
            en: 'make time for',
            ko: '무엇을 하는 시간을 만들다',
            example: 'I always make time for my family no matter how busy I am.',
            exampleKo: '나는 아무리 바빠도 항상 가족을 위한 시간을 만든다.',
          },
          {
            en: 'rarely have time to',
            ko: '무엇을 할 시간이 거의 없다',
            example: 'I rarely have time to hang out with my friends these days.',
            exampleKo: '나는 요즘 친구들과 어울릴 시간이 거의 없다.',
          },
          {
            en: "can't stand",
            ko: '무엇을 참을 수 없다',
            example: "I can't stand waiting in long lines.",
            exampleKo: '나는 긴 줄을 서서 기다리는 걸 못 참는다.',
          },
          {
            en: 'end up -ing',
            ko: '결국 무엇무엇하다',
            example: 'I ended up staying home all weekend.',
            exampleKo: '나는 결국 주말 내내 집에 있었다.',
          },
          {
            en: "can't live without",
            ko: '무엇 없이는 못 살아',
            example: "I can't live without music.",
            exampleKo: '나는 음악 없이는 못 산다.',
          },
          {
            en: 'on the go',
            ko: '매우 바쁜',
            example: "These days I'm always on the go because of school.",
            exampleKo: '요즘 나는 학교 때문에 항상 정신없이 바쁘다.',
          },
          {
            en: 'I wish I could',
            ko: '~할 수 있으면 좋겠다',
            example: 'I wish I could travel more often.',
            exampleKo: '더 자주 여행할 수 있으면 좋겠다.',
          },
          {
            en: "I wasn't expecting to",
            ko: '~하게 될 줄 몰랐다',
            example: 'I wasn’t expecting to enjoy camping this much.',
            exampleKo: '캠핑을 이렇게까지 즐기게 될 줄 몰랐다.',
          },
          {
            en: 'get frustrated when',
            ko: '~하면 답답하다',
            example: 'I get frustrated when the internet is slow.',
            exampleKo: '나는 인터넷이 느리면 답답함을 느낀다.',
          },
          {
            en: 'used to (동사)',
            ko: '~했었다',
            example: 'I used to think yoga was boring, but now I love it.',
            exampleKo: '예전엔 요가가 지루하다고 생각했었는데, 지금은 정말 좋아한다.',
          },
          {
            en: 'motivates me to',
            ko: '~하게 하다',
            example: 'Listening to podcasts motivates me to study.',
            exampleKo: '팟캐스트를 듣는 것은 나를 공부하게 만든다.',
          },
          {
            en: 'can relate to',
            ko: '~에 공감하다',
            example: 'When my friend said she was burned out, I could totally relate to that.',
            exampleKo: '친구가 번아웃됐다고 말했을 때, 나는 정말 공감했다.',
          },
          {
            en: 'reminds me of',
            ko: '~이 생각나게 하다',
            example: 'That song reminds me of my childhood.',
            exampleKo: '그 노래는 내 어린 시절을 떠올리게 한다.',
          },
          {
            en: 'what I like most about',
            ko: '내가 ~에서 가장 좋아하는 것',
            example: 'What I like most about Christmas is the festive atmosphere.',
            exampleKo: '크리스마스에서 내가 가장 좋아하는 점은 축제 같은 분위기다.',
          },
          {
            en: 'take something seriously',
            ko: '무엇을 진지하게 여기다',
            example: 'Mental health is something I take seriously.',
            exampleKo: '정신 건강은 내가 진지하게 여기는 부분이다.',
          },
          {
            en: "it's common to see",
            ko: '~보기 흔하다',
            example: "It's common to see people using their phones all the time.",
            exampleKo: '사람들이 항상 휴대폰을 사용하는 모습을 보는 건 흔한 일이다.',
          },
          {
            en: 'the downside of',
            ko: '~의 단점',
            example: 'The downside of the subway is that it can be crowded sometimes.',
            exampleKo: '지하철의 단점은 가끔 붐빌 수 있다는 것이다.',
          },
          {
            en: 'make an effort',
            ko: '노력하다',
            example: 'Most Koreans make an effort to sort their waste carefully.',
            exampleKo: '대부분의 한국인들은 쓰레기를 꼼꼼히 분리배출하려고 노력한다.',
          },
        ],
      },
      {
        title: '패턴 문장',
        items: [
          {
            en: "I'm trying to ~",
            ko: '요즘 ~하려고 노력 중이야',
            example: 'I’m trying to stay healthy.',
            exampleKo: '나는 요즘 건강을 유지하려고 노력하고 있어.',
          },
          {
            en: "I'm supposed to ~",
            ko: '~하기로 되어 있어 / 원래 ~해야 해',
            example: 'I’m supposed to meet him today.',
            exampleKo: '나는 오늘 그를 만나기로 되어 있어.',
          },
          {
            en: 'I was about to ~',
            ko: '막 ~하려던 참이었어',
            example: 'I was about to call you.',
            exampleKo: '막 너한테 전화하려던 참이었어.',
          },
          {
            en: "I'm here to ~",
            ko: '~하러 왔어',
            example: 'I’m here to help you.',
            exampleKo: '너를 도와주러 왔어.',
          },
          {
            en: "I've been ~ing",
            ko: '요즘 계속 ~하고 있어',
            example: 'I’ve been working a lot lately.',
            exampleKo: '나는 요즘 계속 일을 많이 하고 있어.',
          },
          {
            en: 'Let me ~',
            ko: '내가 ~해볼게',
            example: 'Let me check that.',
            exampleKo: '내가 그거 확인해볼게.',
          },
          {
            en: 'Can I get ~?',
            ko: '~주세요',
            example: 'Can I get a coffee?',
            exampleKo: '커피 한 잔 주세요.',
          },
          {
            en: 'Can you ~?',
            ko: '~해줄 수 있어?',
            example: 'Can you help me?',
            exampleKo: '나 좀 도와줄 수 있어?',
          },
          {
            en: 'Do you mind ~ing?',
            ko: '~해도 될까? (정중)',
            example: 'Do you mind opening the window?',
            exampleKo: '창문 좀 열어주시겠어요?',
          },
          {
            en: "I'm not sure if ~",
            ko: '~인지 잘 모르겠어',
            example: 'I’m not sure if it will work.',
            exampleKo: '그게 될지 잘 모르겠어.',
          },
          {
            en: "I don't think ~",
            ko: '~인 것 같진 않아',
            example: 'I don’t think that’s a good idea.',
            exampleKo: '그게 좋은 생각인 것 같진 않아.',
          },
          {
            en: 'I think you should ~',
            ko: '~하는 게 좋을 것 같아',
            example: 'I think you should try it.',
            exampleKo: '네가 그걸 시도해보는 게 좋을 것 같아.',
          },
          {
            en: 'It feels like ~',
            ko: '~인 느낌이야',
            example: 'It feels like summer.',
            exampleKo: '여름 같은 느낌이야.',
          },
          {
            en: 'It looks like ~',
            ko: '~인 것 같아 (보기에)',
            example: 'It looks like rain.',
            exampleKo: '비가 올 것 같아.',
          },
          {
            en: 'It sounds like ~',
            ko: '~인 것 같아 (들어보니)',
            example: 'It sounds like a good plan.',
            exampleKo: '좋은 계획인 것 같아.',
          },
          {
            en: 'There is / There are ~',
            ko: '~가 있어',
            example: 'There is a problem.',
            exampleKo: '문제가 있어.',
          },
          {
            en: "I'd like to ~",
            ko: '~하고 싶어요 (정중)',
            example: 'I’d like to order now.',
            exampleKo: '지금 주문하고 싶어요.',
          },
          {
            en: 'I need you to ~',
            ko: '네가 ~해줘야 해',
            example: 'I need you to wait.',
            exampleKo: '네가 기다려줘야 해.',
          },
          {
            en: 'I just wanted to ~',
            ko: '그냥 ~하려고 했어',
            example: 'I just wanted to say thanks.',
            exampleKo: '그냥 고맙다고 말하고 싶었어.',
          },
          {
            en: 'I was wondering if ~',
            ko: '~가능할지 궁금했어',
            example: 'I was wondering if you could help.',
            exampleKo: '네가 도와줄 수 있는지 궁금했어.',
          },
          {
            en: 'The thing is ~',
            ko: '문제는 말이야 / 상황이',
            example: 'The thing is, I’m busy today.',
            exampleKo: '문제는, 내가 오늘 바쁘다는 거야.',
          },
          {
            en: 'As far as I know ~',
            ko: '내가 알기론',
            example: 'As far as I know, he’s abroad.',
            exampleKo: '내가 알기론, 그는 해외에 있어.',
          },
          {
            en: "You don't have to ~",
            ko: '~안 해도 돼',
            example: 'You don’t have to worry.',
            exampleKo: '걱정 안 해도 돼.',
          },
          {
            en: 'You might want to ~',
            ko: '~하는 게 좋을 수도 있어',
            example: 'You might want to check again.',
            exampleKo: '다시 확인해보는 게 좋을 수도 있어.',
          },
          {
            en: 'It depends on ~',
            ko: '~에 달려 있어',
            example: 'It depends on the situation.',
            exampleKo: '그건 상황에 달려 있어.',
          },
          {
            en: "I'll let you know",
            ko: '알려줄게',
            example: 'I’ll let you know later.',
            exampleKo: '나중에 알려줄게.',
          },
          {
            en: "I didn't mean to ~",
            ko: '~하려던 건 아니었어',
            example: 'I didn’t mean to hurt you.',
            exampleKo: '너에게 상처 주려던 건 아니었어.',
          },
          {
            en: "I can't wait to ~",
            ko: '빨리 ~하고 싶어',
            example: 'I can’t wait to see you.',
            exampleKo: '빨리 너를 보고 싶어.',
          },
          {
            en: "That's why ~",
            ko: '그래서 ~한 거야',
            example: 'That’s why I left early.',
            exampleKo: '그래서 내가 일찍 떠난 거야.',
          },
          {
            en: "That's what I mean",
            ko: '그 말이야 / 내 말이 그거야',
            example: 'That’s what I mean.',
            exampleKo: '내 말이 그거야.',
          },
        ],
      },
      {
        title: '공감·리액션',
        items: [
          { en: 'I got it.', ko: '알겠어.' },
          { en: 'That makes sense.', ko: '그거 말 되네.' },
          { en: 'I know what you mean.', ko: '무슨 말인지 알아.' },
          { en: 'Exactly.', ko: '맞아. / 정확해.' },
          { en: 'I think so too.', ko: '나도 그렇게 생각해.' },
          { en: 'I feel the same way.', ko: '나도 같은 생각이야.' },
          { en: "I couldn't agree more.", ko: '완전 동감이야.' },
          { en: 'I see your point, but', ko: '네 말은 알겠는데' },
          { en: "I get what you're saying, but", ko: '무슨 말인지는 알겠는데' },
          { en: 'Personally,', ko: '개인적으로,' },
          { en: 'In my case,', ko: '제 경우에는,' },
        ],
      },
      {
        title: '롤플레이 — 전화·요청 (11번 문제)',
        items: [
          { en: "I'm calling to...", ko: '~하려고 전화했다' },
          { en: "I'm thinking about...", ko: '~할까 생각 중이다' },
          { en: "I'm planning to...", ko: '~할 계획이다' },
          { en: 'Is it possible to...', ko: '~하는 것이 가능한가요?' },
          { en: 'Could you...?', ko: '~해주실 수 있나요?' },
          { en: 'Do I need to...', ko: '~해야 하나요? (의무 문의)' },
          { en: 'Should I...?', ko: '~해야 할까요? (의무 문의)' },
        ],
      },
      {
        title: '롤플레이 — 정보 문의',
        items: [
          { en: 'Do you have any recommendations?', ko: '추천해주실 만한 게 있나요?' },
          { en: 'How much does that cost?', ko: '그거 얼마인가요?' },
          { en: 'Is there parking around?', ko: '주변에 주차장이 있나요?' },
          { en: 'What are your business hours?', ko: '영업시간이 어떻게 되나요?' },
          { en: 'Could you text me the details?', ko: '자세한 내용을 문자로 보내주실 수 있나요?' },
        ],
      },
      {
        title: '롤플레이 — 문제 발생·일정 변경 (12번 문제)',
        items: [
          { en: 'I have something to tell you.', ko: '할 말이 좀 있어.' },
          { en: "I don't think I can make it.", ko: '(약속 장소에) 못 갈 것 같아.' },
          {
            en: "I won't be able to make it.",
            ko: '(상대적으로 격식 있게) 갈 수 없을 것 같습니다.',
          },
          { en: 'Something came up.', ko: '갑자기 무슨 일이 생겼다.' },
          {
            en: 'I think we need to reschedule our plan.',
            ko: '우리 일정을 다시 잡아야 할 것 같아.',
          },
          { en: 'How about next weekend?', ko: '다음 주말은 어때요?' },
        ],
      },
    ],
  },
];

export function getCategory(slug: string) {
  return expressionCategories.find((c) => c.slug === slug);
}
