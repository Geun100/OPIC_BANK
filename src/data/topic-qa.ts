// 주제×컷(묘사/습관/경험) 조합별 예상 질문 + 모범답안 데이터 — SEO 색인용 개별 페이지 소스
// ⚠️ 답안은 학습용 초안이며 오픽 경험자 검증 필요 (LEARNING.md 참고)

export type TopicKey =
  | 'home'
  | 'cafe'
  | 'movie'
  | 'travel'
  | 'exercise'
  | 'park'
  | 'performance'
  | 'concert'
  | 'shopping'
  | 'music';
export type CutKey = 'description' | 'habit' | 'experience';

export const topicInfo: Record<TopicKey, { name: string; slug: TopicKey }> = {
  home: { name: '집', slug: 'home' },
  cafe: { name: '카페', slug: 'cafe' },
  movie: { name: '영화', slug: 'movie' },
  travel: { name: '여행', slug: 'travel' },
  exercise: { name: '운동', slug: 'exercise' },
  park: { name: '공원', slug: 'park' },
  performance: { name: '공연', slug: 'performance' },
  concert: { name: '콘서트', slug: 'concert' },
  shopping: { name: '쇼핑', slug: 'shopping' },
  music: { name: '음악 감상', slug: 'music' },
};

export const cutInfo: Record<CutKey, { name: string; slug: CutKey; hint: string }> = {
  description: { name: '묘사', slug: 'description', hint: '어떤 곳/모습인지 설명하는 질문' },
  habit: { name: '습관·루틴', slug: 'habit', hint: '평소에 뭘 하는지 묻는 질문' },
  experience: { name: '경험', slug: 'experience', hint: '기억에 남는 일화를 묻는 질문' },
};

export type TopicQA = {
  topic: TopicKey;
  cut: CutKey;
  question: { ko: string; en: string };
  answer: string;
  answerKo: string;
  keyExpressions: string[];
};

export const topicQAs: TopicQA[] = [
  {
    topic: 'home',
    cut: 'description',
    question: {
      ko: '집을 묘사해달라는 질문',
      en: 'Can you describe your home? What does it look like?',
    },
    answer:
      "I live in a small apartment in Seoul with my family. It's not huge, but it's cozy and comfortable, so I don't mind the size at all. When you walk in, there's a living room right in the middle, and my bedroom is right next to it. My favorite spot in the house is the couch by the window, because I can see the sky while I'm relaxing there. The apartment is fully furnished, so I didn't have to buy much furniture when I moved in. On top of that, there's a small balcony where I keep a few plants, which makes the place feel a bit more alive. Compared to my old place, this apartment gets a lot more natural light, so it always feels bright during the day. Honestly, what I like most about my place is that it feels calm the moment I get home. That's mainly because it's quiet and I can just unwind after a long day. So yeah, that's why I love my home so much.",
    answerKo:
      '저는 가족과 함께 서울의 작은 아파트에 살아요. 크진 않지만 아늑하고 편안해서 크기는 전혀 신경 안 써요. 들어가면 바로 가운데에 거실이 있고, 제 방은 그 바로 옆이에요. 집에서 제가 제일 좋아하는 자리는 창가 소파인데, 거기서 쉬면서 하늘을 볼 수 있거든요. 이사 올 때 가구가 다 갖춰져 있어서 따로 살 필요가 없었어요. 게다가 작은 발코니가 있어서 화분을 몇 개 키우는데, 그게 집을 더 생기 있게 만들어줘요. 예전 집이랑 비교하면 이 아파트는 채광이 훨씬 좋아서 낮에 항상 밝은 느낌이에요. 솔직히 제가 이 집에서 제일 좋아하는 건 집에 들어오는 순간 마음이 편안해진다는 거예요. 조용해서 긴 하루 끝에 그냥 긴장을 풀 수 있거든요. 그래서 제가 이 집을 이렇게 좋아하는 거예요.',
    keyExpressions: [
      'cozy and comfortable',
      'my favorite spot',
      'fully furnished',
      'unwind after a long day',
      'Compared to ...',
    ],
  },
  {
    topic: 'home',
    cut: 'habit',
    question: { ko: '집에서 평소 뭘 하는지 묻는 질문', en: 'What do you usually do at home?' },
    answer:
      "Well, when I have free time, I usually just stay home and relax rather than going out. I tend to spend most of my time in my room, especially on the couch by the window — that's my favorite spot in the house. I've made it a routine to open the window every morning to get some fresh air before I start my day. After that, I usually just do simple things like listening to music or watching a show. Sometimes I also tidy up a bit, since a clean room helps me clear my head. What I enjoy most is the moment right after I finish all my chores, because that's when I finally get to relax properly. Actually, to be honest, I'm someone who feels most comfortable at home, more than anywhere else. So most weekends, you'll probably find me right there on that couch, doing pretty much nothing.",
    answerKo:
      '음, 시간이 나면 저는 보통 밖에 나가기보다 집에서 쉬는 편이에요. 대부분의 시간을 방에서, 특히 창가 소파에서 보내는데 거기가 집에서 제가 제일 좋아하는 자리예요. 하루를 시작하기 전에 매일 아침 창문을 열어서 환기시키는 걸 습관처럼 해요. 그러고 나서는 보통 음악을 듣거나 뭔가를 보는 것처럼 간단한 걸 해요. 가끔은 정리도 조금 하는데, 방이 깨끗하면 머리가 맑아지거든요. 제가 제일 좋아하는 순간은 집안일을 다 끝낸 직후예요, 그때가 드디어 제대로 쉴 수 있는 시간이니까요. 사실 저는 어디보다 집에서 제일 편안함을 느끼는 사람이에요. 그래서 주말엔 대부분 그 소파에 앉아서 별로 하는 것 없이 시간을 보내고 있을 거예요.',
    keyExpressions: [
      'I tend to',
      "I've made it a routine to",
      'get some fresh air',
      'what I enjoy most is',
      'clear my head',
    ],
  },
  {
    topic: 'home',
    cut: 'experience',
    question: {
      ko: '집과 관련된 기억에 남는 경험',
      en: 'Tell me about a memorable experience related to your home.',
    },
    answer:
      "Let me think about that for a second... Actually, I remember when I first moved into this apartment. It was such a hectic experience because I had to pack everything by myself and it took almost a whole week. I mean, everything was a mess at first — boxes everywhere, nothing in the right place. But once I got the furniture set up and made my favorite spot by the window, it finally started to feel like home. What I remember most is the first night I spent there, just sitting on the floor because the furniture hadn't arrived yet, but somehow it still felt exciting. Looking back, it was actually a rewarding experience because I got to decorate everything exactly the way I wanted. It used to be just an empty room, but now it's the place I unwind after a long day. Come to think of it, that's probably why this apartment means so much more to me than my old one.",
    answerKo:
      '잠깐 생각해볼게요... 아, 이 아파트로 처음 이사왔을 때가 기억나요. 혼자 다 짐을 싸야 해서 거의 일주일이 걸렸는데 정말 정신없는 경험이었어요. 처음엔 정말 엉망이었어요, 박스가 여기저기 널려 있고 제자리에 있는 게 하나도 없었죠. 근데 가구를 다 놓고 창가에 제가 좋아하는 자리를 만들고 나니까 그제야 집 같은 느낌이 나기 시작했어요. 제일 기억에 남는 건 첫날 밤인데, 가구가 아직 안 와서 그냥 바닥에 앉아 있었는데 그게 오히려 설레더라고요. 돌이켜보면 제가 원하는 대로 다 꾸밀 수 있어서 꽤 보람 있는 경험이었어요. 예전엔 그냥 빈 방이었는데 지금은 긴 하루 끝에 제가 긴장을 푸는 공간이 됐어요. 생각해보면 그래서 이 아파트가 예전 집보다 저한테 훨씬 더 큰 의미가 있는 것 같아요.',
    keyExpressions: [
      'Let me think about that for a second',
      'Looking back',
      'It used to be ..., but now ...',
      'Come to think of it',
    ],
  },
  {
    topic: 'cafe',
    cut: 'description',
    question: { ko: '자주 가는 카페를 묘사해달라는 질문', en: 'Describe a café you often visit.' },
    answer:
      "There's a small café near my house that I go to pretty often. It has a really cozy vibe, with warm lighting and soft music playing in the background. The place isn't too big, but that's actually what makes it feel more comfortable, if that makes sense. I'm a regular there, so the staff already know what I usually order. Honestly, the smell of freshly brewed coffee the moment you walk in is what I like most about it. On top of that, they have a few seats right by the window, which is where I always try to sit if it's available. What's more, the owner is really friendly, so it almost feels like visiting a friend's place rather than just a café. It's the kind of place where you just want to sit down and stay for a while.",
    answerKo:
      '집 근처에 자주 가는 작은 카페가 있어요. 따뜻한 조명이랑 잔잔한 음악이 흘러서 분위기가 정말 아늑해요. 공간이 크진 않은데, 오히려 그래서 더 편안하게 느껴지는 것 같아요. 거기 단골이라 직원분들이 제가 뭘 주문하는지 이미 알고 있어요. 솔직히 들어가는 순간 나는 갓 내린 커피 향이 제가 제일 좋아하는 부분이에요. 게다가 창가 쪽에 자리가 몇 개 있는데 비어있으면 항상 거기 앉으려고 해요. 사장님도 정말 친절해서 그냥 카페가 아니라 친구 집에 놀러 가는 느낌이 들 정도예요. 그냥 앉아서 오래 머물고 싶어지는 그런 곳이에요.',
    keyExpressions: [
      'have a cozy vibe',
      'be a regular (at)',
      'freshly brewed coffee',
      'if that makes sense',
      "What's more",
    ],
  },
  {
    topic: 'cafe',
    cut: 'habit',
    question: {
      ko: '카페에서 평소 뭘 하는지 묻는 질문',
      en: 'What do you usually do when you go to a café?',
    },
    answer:
      "I usually grab a cup of coffee first, and then I just find a seat by the window. I tend to go there on weekends, mainly to catch up with friends or just to relax by myself. What I enjoy most is people-watching while sipping my coffee, since it's a good way to clear my head. I've made it a habit to visit at least once a week, because honestly, it's become a big part of my routine now. Sometimes I bring a book or my laptop, and I end up staying there for a couple of hours without even noticing the time. As a result, that café has basically become my second workspace. So yeah, that's why I love going there so often.",
    answerKo:
      '보통 커피 한 잔을 먼저 사고 창가 자리를 찾아 앉아요. 주로 주말에 가는데, 친구들이랑 밀린 이야기를 하거나 그냥 혼자 쉬려고 가는 편이에요. 커피 마시면서 사람 구경하는 걸 제일 즐기는데, 머리를 식히기에 좋거든요. 적어도 일주일에 한 번은 가는 걸 습관으로 만들었어요, 이제는 제 일상에서 큰 부분이 됐거든요. 가끔은 책이나 노트북을 가져가서 시간 가는 줄 모르고 몇 시간씩 있기도 해요. 그러다 보니 그 카페가 거의 제 두 번째 작업 공간이 됐어요. 그래서 제가 거기 그렇게 자주 가는 거예요.',
    keyExpressions: [
      'grab a cup of coffee',
      'catch up with friends',
      'make it a habit',
      'clear my head',
      'As a result',
    ],
  },
  {
    topic: 'cafe',
    cut: 'experience',
    question: {
      ko: '카페에서의 기억에 남는 경험',
      en: 'Tell me about a memorable experience at a café.',
    },
    answer:
      "Hmm, let me think about that for a second... Actually, I have a pretty vivid memory of this one time I met an old friend at my usual café. We hadn't seen each other in years, so it was such a fun experience catching up over coffee. What I remember most is that we ended up staying there for almost three hours, just talking non-stop. It was such a great experience that I still talk about it sometimes. The thing is, we hadn't even planned to stay that long, but the conversation just kept going, and neither of us wanted to leave. Looking back, that's actually one of the reasons that café means so much to me now, not just because of the coffee, but because of that memory.",
    answerKo:
      '음, 잠깐 생각해볼게요... 예전 친구를 제가 자주 가는 카페에서 만난 적이 있는데 그게 꽤 생생하게 기억나요. 몇 년 만에 만난 거라 커피 마시면서 밀린 얘기 나누는 게 정말 즐거운 경험이었어요. 제일 기억에 남는 건 거의 세 시간을 쉬지 않고 얘기하면서 그 자리에 있었다는 거예요. 너무 좋은 경험이라 가끔 아직도 그 얘기를 해요. 사실 그렇게 오래 있을 계획은 아니었는데 대화가 끊기질 않아서 둘 다 자리를 뜨고 싶지 않았어요. 돌이켜보면 그게 바로 그 카페가 저한테 커피 때문만이 아니라 그 추억 때문에도 특별한 이유 중 하나예요.',
    keyExpressions: [
      'I actually have a pretty vivid memory of this',
      'It was such a ... experience that ...',
      'Looking back',
      'The thing is',
    ],
  },
  {
    topic: 'movie',
    cut: 'description',
    question: {
      ko: '좋아하는 영화 장르를 묘사해달라는 질문',
      en: 'What kind of movies do you like?',
    },
    answer:
      "I'm a huge fan of action movies, but I also enjoy watching thrillers every now and then. What I like most about action movies is that they keep me on the edge of my seat the whole time. I usually watch them either at home or at the theater, depending on how big the movie is. Honestly, if there's a good plot twist, that's what makes a movie really worth watching for me. There's this one movie I highly recommend to almost everyone I know, because it blew my mind the first time I watched it. Not only was the story well written, but the acting was also incredible, which is rare for this genre. That's mainly why I keep going back to action movies over anything else.",
    answerKo:
      '저는 액션 영화의 열렬한 팬인데, 가끔 스릴러도 즐겨 봐요. 액션 영화에서 제일 좋아하는 건 처음부터 끝까지 손에 땀을 쥐게 한다는 점이에요. 영화 규모에 따라 집에서 보기도 하고 영화관에서 보기도 해요. 솔직히 반전이 좋으면 그게 저한테는 영화를 볼 만한 가치가 있게 만드는 요소예요. 제가 주변 사람들한테 거의 다 강력 추천하는 영화가 하나 있는데, 처음 봤을 때 정말 놀랐거든요. 스토리도 잘 짜여있었고 연기도 훌륭했는데, 이 장르에서는 흔치 않은 일이에요. 그래서 제가 다른 무엇보다 액션 영화를 계속 찾게 되는 거예요.',
    keyExpressions: [
      'a huge fan of',
      'keep me on the edge of my seat',
      'the plot twist',
      'highly recommend',
      'Not only ... but also ...',
    ],
  },
  {
    topic: 'movie',
    cut: 'habit',
    question: {
      ko: '영화를 얼마나 자주, 어떻게 보는지 묻는 질문',
      en: "How often do you watch movies, and what's your routine?",
    },
    answer:
      "I usually watch movies when I have free time, especially on weekends. I tend to check reviews first before deciding what to watch, just so I don't waste my time on something boring. Once I pick something, I usually grab some snacks and get comfortable on the couch. What I enjoy most is that quiet moment right before the movie starts, when I'm just excited to see what happens. I've made it a routine to watch at least one movie a week, so it's become a pretty consistent part of my life. On top of that, I sometimes rewatch old favorites instead of picking something new, especially when I just want something familiar. Either way, it's the one habit I never really get tired of.",
    answerKo:
      '시간이 날 때, 특히 주말에 영화를 보는 편이에요. 지루한 영화에 시간 낭비 안 하려고 보통 먼저 리뷰부터 확인해요. 뭘 볼지 정하면 간식을 챙겨서 소파에 편하게 자리 잡아요. 제가 제일 좋아하는 순간은 영화 시작 직전의 조용한 순간인데, 무슨 일이 일어날지 기대되거든요. 일주일에 최소 한 편은 보는 걸 습관으로 만들어서 이제는 제 삶에서 꽤 꾸준한 부분이 됐어요. 게다가 가끔은 새 영화 대신 예전에 좋아했던 영화를 다시 보기도 해요, 익숙한 게 보고 싶을 때 특히 그래요. 어느 쪽이든 이건 제가 절대 질리지 않는 습관이에요.',
    keyExpressions: [
      'I usually ... when I have free time',
      'I tend to',
      'what I enjoy most is',
      'make it a routine to',
      'On top of that',
    ],
  },
  {
    topic: 'movie',
    cut: 'experience',
    question: {
      ko: '기억에 남는 영화 관람 경험',
      en: 'Tell me about a memorable movie-watching experience.',
    },
    answer:
      "Let me see... actually, I remember watching a movie in theaters that had such an unexpected plot twist that the entire audience gasped at the same time. It was such an intense experience that I couldn't stop thinking about it for days. What I remember most is leaving the theater and immediately wanting to watch it again just to catch details I missed. It turned out that the twist had actually been hinted at earlier in the movie, which made it even more impressive once I noticed it on the second watch. Looking back, that's probably the movie experience that stands out the most to me, because it's rare for a movie to actually surprise me like that.",
    answerKo:
      '어디 보자... 극장에서 영화를 봤는데 반전이 너무 예상 밖이라 관객 전체가 동시에 탄성을 질렀던 게 기억나요. 며칠 동안 계속 생각날 정도로 강렬한 경험이었어요. 제일 기억에 남는 건 극장을 나오자마자 놓친 디테일을 확인하려고 바로 다시 보고 싶어졌다는 거예요. 알고 보니 그 반전이 영화 초반에 이미 암시돼 있었는데, 두 번째로 보면서 그걸 알아채니까 더 인상 깊었어요. 돌이켜보면 그게 저한테 가장 인상적인 영화 경험인 것 같아요, 영화가 저를 그렇게 진짜로 놀라게 하는 경우는 드물거든요.',
    keyExpressions: [
      'Let me see',
      'such an ... experience that',
      'It turned out that ...',
      'Looking back',
    ],
  },
  {
    topic: 'travel',
    cut: 'description',
    question: {
      ko: '기억에 남는 여행지를 묘사해달라는 질문',
      en: 'Describe a trip that was memorable to you.',
    },
    answer:
      "The most memorable trip I took was to Jeju Island a couple of years ago. What I liked most about it was the breathtaking scenery, especially the coastline near the beach. It wasn't a packed schedule trip, if that makes sense — we mostly just walked around and soaked up the atmosphere. We also found a small restaurant off the beaten path that turned out to be one of the best meals of the trip. What's more, the weather was perfect the whole time, which honestly made a huge difference. Overall, it was the kind of trip where I could really recharge my batteries, and I still think about it whenever I need a break.",
    answerKo:
      '제가 갔던 여행 중 가장 기억에 남는 건 몇 년 전 제주도 여행이에요. 제일 좋았던 건 숨막히게 아름다운 풍경, 특히 해변 근처 해안선이었어요. 빡빡한 일정은 아니었고, 그냥 여기저기 걸어다니면서 분위기를 만끽했어요. 잘 알려지지 않은 작은 식당도 발견했는데 여행 중 최고의 식사 중 하나였어요. 게다가 내내 날씨도 완벽해서 그게 큰 차이를 만들었어요. 전체적으로 정말 재충전이 되는 여행이었고, 쉬고 싶을 때마다 아직도 그 여행이 생각나요.',
    keyExpressions: [
      'a memorable trip',
      'soak up the atmosphere',
      'off the beaten path',
      'recharge my batteries',
      "What's more",
    ],
  },
  {
    topic: 'travel',
    cut: 'habit',
    question: {
      ko: '여행할 때 평소 뭘 하는지 묻는 질문',
      en: 'What do you usually do when you travel?',
    },
    answer:
      "When I travel, I tend to avoid overly packed schedules because I like taking my time at each place. I usually start the day early so I can soak up the atmosphere before it gets too crowded. I've made it a habit to look for local restaurants off the beaten path instead of just touristy spots, since that's where I find the best food. What I enjoy most is just wandering around without a strict plan, because that's when I discover the most interesting things. Thanks to that, I've ended up finding some of my favorite places completely by accident. That's basically become my travel style at this point.",
    answerKo:
      '여행할 때는 각 장소에서 여유 있게 시간을 보내고 싶어서 너무 빡빡한 일정은 피하는 편이에요. 너무 붐비기 전에 분위기를 만끽하려고 보통 하루를 일찍 시작해요. 관광지보다는 잘 알려지지 않은 현지 식당을 찾는 걸 습관으로 만들었는데, 거기서 제일 맛있는 음식을 발견하거든요. 제가 제일 즐기는 건 딱히 계획 없이 그냥 돌아다니는 건데, 그럴 때 제일 흥미로운 걸 발견하게 되거든요. 그 덕분에 제가 제일 좋아하는 장소들을 완전히 우연히 찾은 적도 많아요. 이게 이제 거의 제 여행 스타일이 됐어요.',
    keyExpressions: [
      'I tend to',
      'make it a habit',
      'off the beaten path',
      'what I enjoy most is',
      'Thanks to that',
    ],
  },
  {
    topic: 'travel',
    cut: 'experience',
    question: {
      ko: '여행 중 예상치 못했던 경험',
      en: 'Tell me about an unexpected experience you had while traveling.',
    },
    answer:
      'Actually, I have a pretty vivid memory of this one trip where our original plan completely fell through because of bad weather. At first, it was pretty frustrating because we had to cancel almost everything. But we ended up finding a small local spot instead, and it turned out to be way more memorable than what we had originally planned. What I remember most is how everyone just started laughing about it once we realized there was nothing we could do but adapt. Looking back, it was such a valuable experience because it taught me that sometimes the best travel memories come from unexpected changes.',
    answerKo:
      '날씨 때문에 원래 계획이 완전히 틀어졌던 여행이 꽤 생생하게 기억나요. 처음엔 거의 다 취소해야 해서 꽤 답답했어요. 근데 대신 작은 현지 스팟을 발견했는데 원래 계획보다 훨씬 더 기억에 남는 곳이었어요. 제일 기억에 남는 건 어쩔 수 없이 그냥 받아들이기로 한 순간 다들 그 상황에 웃기 시작했다는 거예요. 돌이켜보면 정말 값진 경험이었어요, 가끔은 최고의 여행 추억이 예상치 못한 변화에서 온다는 걸 알려줬거든요.',
    keyExpressions: [
      'I actually have a pretty vivid memory of this',
      'it turned out that',
      'Looking back',
      'frustrating',
    ],
  },
  {
    topic: 'exercise',
    cut: 'description',
    question: {
      ko: '평소 하는 운동을 묘사해달라는 질문',
      en: 'What kind of exercise do you usually do?',
    },
    answer:
      "I mostly just go jogging or walking around my neighborhood to keep myself in shape. It's nothing too intense, if that makes sense — I like exercising at my own pace rather than pushing myself too hard. Usually I go early in the morning or in the evening, whenever I have some free time. Honestly, it's not really about building muscle for me, it's more about clearing my head after a long day. On top of that, I sometimes bring a friend along, which makes the whole thing feel less like exercise and more like just spending time together.",
    answerKo:
      '저는 주로 몸 관리를 위해 동네에서 조깅이나 걷기를 해요. 그렇게 강도 높은 건 아니고, 무리하기보다는 제 페이스대로 운동하는 걸 좋아해요. 보통 시간이 날 때 이른 아침이나 저녁에 나가요. 솔직히 저한테는 근육을 키우는 게 목적이 아니라 긴 하루 끝에 머리를 식히는 게 더 큰 목적이에요. 게다가 가끔은 친구랑 같이 하는데, 그러면 운동이라기보다 그냥 같이 시간을 보내는 느낌이 들어요.',
    keyExpressions: ['keep myself in shape', 'at my own pace', 'clear my head', 'On top of that'],
  },
  {
    topic: 'exercise',
    cut: 'habit',
    question: {
      ko: '운동을 얼마나 자주, 어떻게 하는지 묻는 질문',
      en: "How often do you exercise, and what's your routine like?",
    },
    answer:
      "I've made it a habit to walk at least thirty minutes a day, usually along the river near my house. I tend to go in the evening because that's when the weather is more comfortable. Before I start, I usually just put on some music, and that alone puts me in the mood to move. What I enjoy most is that moment right after I finish, because I feel like I've worked up a good sweat and it just feels refreshing. As a result, I've noticed I sleep a lot better on the days I actually go out and walk.",
    answerKo:
      '하루 최소 30분은 걷는 걸 습관으로 만들었는데 주로 집 근처 강변을 걸어요. 날씨가 더 쾌적한 저녁 시간에 주로 가는 편이에요. 시작하기 전에 보통 음악을 트는데, 그것만으로도 움직이고 싶은 기분이 들어요. 제가 제일 좋아하는 순간은 다 끝낸 직후예요, 땀을 제대로 흘린 느낌이 들면서 상쾌해지거든요. 그 결과 실제로 나가서 걸은 날은 잠을 훨씬 잘 잔다는 걸 느꼈어요.',
    keyExpressions: [
      'make it a habit to',
      'at my own pace',
      'work up a sweat',
      'what I enjoy most is',
      'As a result',
    ],
  },
  {
    topic: 'exercise',
    cut: 'experience',
    question: {
      ko: '운동과 관련된 기억에 남는 경험',
      en: 'Tell me about a memorable experience related to exercising.',
    },
    answer:
      "Let me think about that for a second... Actually, I remember the first time I tried jogging for more than thirty minutes straight. It was such an exhausting experience at first because I wasn't used to it at all. But once I made it to the end, I felt so proud of myself, which was a pretty unexpected feeling. Looking back, that's actually the experience that made me keep exercising regularly, because I realized how good that feeling of accomplishment was.",
    answerKo:
      '잠깐 생각해볼게요... 처음으로 30분 넘게 쉬지 않고 조깅을 했던 때가 기억나요. 처음엔 전혀 익숙하지 않아서 정말 지치는 경험이었어요. 근데 끝까지 해내고 나니까 스스로가 꽤 자랑스러웠는데, 예상치 못한 감정이었어요. 돌이켜보면 그게 저를 꾸준히 운동하게 만든 경험이에요, 그 성취감이 얼마나 좋은지 깨달았거든요.',
    keyExpressions: [
      'Let me think about that for a second',
      'such an ... experience that',
      'Looking back',
    ],
  },
  {
    topic: 'park',
    cut: 'description',
    question: { ko: '자주 가는 공원을 묘사해달라는 질문', en: 'Describe a park you often visit.' },
    answer:
      "There's a park close to my house that I visit pretty often, especially in the evenings. It's full of lush green trees, so it feels really refreshing just to walk through it. The park isn't too crowded on weekdays, so it's actually a great place to escape the hustle and bustle of the city. Honestly, what I like most is the bench near the pond, where I usually sit for a while before heading back home. What's more, there's a small path around the pond that's perfect for a short stroll after dinner.",
    answerKo:
      '집 근처에 제가 자주, 특히 저녁에 가는 공원이 있어요. 울창한 나무들이 가득해서 걷기만 해도 정말 상쾌해요. 평일엔 그렇게 붐비지 않아서 도시의 번잡함에서 벗어나기에 좋은 곳이에요. 솔직히 제가 제일 좋아하는 건 연못 근처 벤치인데, 집에 가기 전에 거기서 잠깐 앉아있곤 해요. 게다가 연못 주변에 작은 산책로가 있는데 저녁 먹고 잠깐 산책하기에 딱이에요.',
    keyExpressions: [
      'lush green trees',
      'escape the hustle and bustle',
      'take a stroll',
      "What's more",
    ],
  },
  {
    topic: 'park',
    cut: 'habit',
    question: {
      ko: '공원에서 평소 뭘 하는지 묻는 질문',
      en: 'What do you usually do at the park?',
    },
    answer:
      "I usually take a stroll around the park in the evenings, mostly to clear my head after work. I tend to bring my earphones and just listen to music while walking. Sometimes I also enjoy people-watching from a bench, since it's a nice way to relax without doing much. I've made it a habit to go there at least a few times a week, mainly because it helps me unwind after a long day. On top of that, it's a good excuse to get some fresh air instead of staying inside all evening.",
    answerKo:
      '저녁에 공원을 산책하는 편인데, 주로 퇴근 후 머리를 식히려고 가요. 이어폰을 가져가서 걸으면서 음악을 듣는 편이에요. 가끔은 벤치에 앉아서 사람 구경도 하는데, 크게 뭘 안 해도 쉬기 좋은 방법이거든요. 일주일에 몇 번은 가는 걸 습관으로 만들었어요, 긴 하루 끝에 긴장을 푸는 데 도움이 되거든요. 게다가 저녁 내내 집 안에만 있지 않고 바람을 쐴 좋은 핑계도 되고요.',
    keyExpressions: [
      'take a stroll',
      'people-watching',
      'make it a habit',
      'unwind after a long day',
      'get some fresh air',
    ],
  },
  {
    topic: 'park',
    cut: 'experience',
    question: {
      ko: '공원에서의 기억에 남는 경험',
      en: 'Tell me about a memorable experience at a park.',
    },
    answer:
      "Come to think of it, I remember one weekend when I went to the park and ended up watching a small outdoor concert that was happening there by chance. It was such an unexpected experience because I hadn't planned on staying that long. What I remember most is how relaxed everyone looked, just sitting on the grass and enjoying the music together. Looking back, it's one of those small experiences that reminded me why I love that park so much.",
    answerKo:
      '생각해보니, 어느 주말에 공원에 갔다가 우연히 열리고 있던 작은 야외 공연을 보게 된 적이 있어요. 그렇게 오래 있을 계획이 아니었는데 정말 예상치 못한 경험이었어요. 제일 기억에 남는 건 다들 잔디에 앉아서 편안하게 음악을 함께 즐기던 모습이에요. 돌이켜보면 그게 제가 그 공원을 왜 이렇게 좋아하는지 다시 떠올리게 해준 소소한 경험 중 하나예요.',
    keyExpressions: ['Come to think of it', 'such an ... experience that', 'Looking back'],
  },
  {
    topic: 'performance',
    cut: 'description',
    question: {
      ko: '좋아하는 공연 종류를 묘사해달라는 질문',
      en: 'What kind of performances do you like to watch?',
    },
    answer:
      "I really enjoy going to see live performances, especially musicals and dance shows. What I like most about watching them live is that the energy feels completely different from watching something on a screen. I usually go with a friend who shares the same interest, so we can talk about it afterward. Honestly, if the performance is really well done, I sometimes get goosebumps just from watching it. There's this one show I saw a while ago that I still remember vividly, because the ending was so powerful that the entire audience gave a standing ovation. Compared to watching a video online, being there in person just makes the whole thing feel once in a lifetime. That's mainly why I try to catch a good performance whenever I get the chance.",
    answerKo:
      '저는 라이브 공연 보러 가는 걸 정말 좋아하는데, 특히 뮤지컬이랑 댄스 공연이요. 실제로 보는 게 제일 좋은 이유는 화면으로 보는 것과 에너지가 완전히 다르게 느껴지기 때문이에요. 보통 같은 관심사를 가진 친구랑 같이 가서 끝나고 얘기를 나눠요. 솔직히 공연이 정말 잘 만들어졌으면 보는 것만으로 소름이 돋을 때도 있어요. 예전에 본 공연 하나가 아직도 생생하게 기억나는데, 결말이 너무 강렬해서 관객 전체가 기립박수를 쳤거든요. 온라인으로 영상 보는 거랑 비교하면 직접 가서 보는 건 일생에 한 번뿐인 느낌이 들어요. 그래서 기회가 될 때마다 좋은 공연을 보려고 해요.',
    keyExpressions: [
      'get goosebumps',
      'a standing ovation',
      'once in a lifetime',
      'Compared to ...',
    ],
  },
  {
    topic: 'performance',
    cut: 'habit',
    question: {
      ko: '공연을 얼마나 자주, 어떻게 보는지 묻는 질문',
      en: "How often do you go see performances, and what's your routine?",
    },
    answer:
      "I tend to check for new shows every few months, mainly through social media or recommendations from friends. Once I find something interesting, I usually book tickets a few weeks in advance so I can get good seats. I've made it a habit to arrive a bit early, just to soak up the atmosphere before it starts. What I enjoy most is that quiet moment right before the lights go down, when everyone gets excited together. After the show, I usually grab a cup of coffee nearby and just talk about it with whoever I went with. As a result, going to see a performance has become more of a whole evening event for me rather than just watching a show.",
    answerKo:
      '몇 달에 한 번씩 새로운 공연이 있는지 주로 SNS나 친구 추천을 통해 확인하는 편이에요. 관심 가는 게 있으면 좋은 좌석을 잡으려고 보통 몇 주 전에 미리 예매해요. 시작 전에 분위기를 만끽하려고 조금 일찍 도착하는 걸 습관으로 만들었어요. 제가 제일 좋아하는 건 조명이 꺼지기 직전, 다 같이 설레하는 그 조용한 순간이에요. 공연이 끝나면 보통 근처에서 커피를 마시면서 같이 간 사람이랑 얘기해요. 그러다 보니 공연 보러 가는 게 그냥 공연 관람이 아니라 저녁 시간 전체를 채우는 이벤트가 됐어요.',
    keyExpressions: ['I tend to', 'soak up the atmosphere', 'what I enjoy most is', 'As a result'],
  },
  {
    topic: 'performance',
    cut: 'experience',
    question: {
      ko: '공연 관람 중 기억에 남는 경험',
      en: 'Tell me about a memorable experience watching a performance.',
    },
    answer:
      "Let me think about that for a second... Actually, I remember watching a performance where something unexpected happened on stage, and the performers just handled it so smoothly that most people didn't even notice. It was such an impressive experience because you could tell how professional they were. What I remember most is how the whole audience gave a standing ovation at the end, which honestly gave me goosebumps. Looking back, that's probably the performance that made me start going to more live shows, because I realized how different it feels compared to watching something recorded.",
    answerKo:
      '잠깐 생각해볼게요... 무대에서 예상치 못한 일이 생겼는데 공연자들이 너무 자연스럽게 처리해서 대부분 관객이 눈치도 못 챈 공연을 본 적이 있어요. 얼마나 프로페셔널한지 느껴져서 정말 인상적인 경험이었어요. 제일 기억에 남는 건 끝날 때 관객 전체가 기립박수를 쳤는데 그게 정말 소름이 돋았다는 거예요. 돌이켜보면 그게 저를 라이브 공연을 더 자주 보러 가게 만든 공연이에요, 녹화된 걸 보는 거랑 얼마나 다른지 깨달았거든요.',
    keyExpressions: [
      'Let me think about that for a second',
      'such an ... experience that',
      'a standing ovation',
      'Looking back',
    ],
  },
  {
    topic: 'concert',
    cut: 'description',
    question: {
      ko: '콘서트를 묘사해달라는 질문',
      en: "Describe a concert you've been to or would like to attend.",
    },
    answer:
      "I went to a concert last year for one of my favorite singers, and it's still one of my favorite memories. What I liked most was that everyone in the crowd was singing along the whole time, so it felt like we were all part of the show. The opening act was also really good, which honestly surprised me since I hadn't expected much from it. Even though the tickets were a bit expensive, it was totally worth every penny. On top of that, the venue had great sound, so every song felt even more powerful live. That's mainly why I'd say it was an unforgettable night for me.",
    answerKo:
      '작년에 제가 제일 좋아하는 가수 콘서트에 갔는데 아직도 제일 좋은 추억 중 하나예요. 제일 좋았던 건 관객 전체가 내내 따라 부르고 있어서 저희도 공연의 일부가 된 느낌이 들었다는 거예요. 오프닝 공연도 정말 좋았는데, 큰 기대를 안 했었어서 솔직히 놀랐어요. 티켓이 좀 비쌌지만 돈이 하나도 안 아까웠어요. 게다가 공연장 음향도 좋아서 노래 하나하나가 라이브로 더 강렬하게 느껴졌어요. 그래서 저한테는 잊을 수 없는 밤이었다고 말할 수 있어요.',
    keyExpressions: [
      'sing along',
      'the opening act',
      'worth every penny',
      'an unforgettable night',
    ],
  },
  {
    topic: 'concert',
    cut: 'habit',
    question: {
      ko: '콘서트 갈 때 평소 준비하는 방식',
      en: 'What do you usually do to prepare for a concert?',
    },
    answer:
      "I usually try to get tickets as early as possible, since good concerts tend to be sold out within minutes. Before the concert, I tend to listen to the artist's songs on repeat, just to get familiar with everything I might hear live. I've made it a habit to go with friends who like the same music, since singing along together makes it way more fun. What I enjoy most is the moment the lights dim and the crowd starts cheering, right before the artist comes out. After it's over, we usually talk about our favorite moments the whole way home.",
    answerKo:
      '좋은 콘서트는 몇 분 안에 매진되는 경우가 많아서 보통 최대한 빨리 티켓을 구하려고 해요. 콘서트 전에는 라이브로 들을 곡들에 익숙해지려고 아티스트 노래를 반복해서 들어요. 같은 음악을 좋아하는 친구들이랑 같이 가는 걸 습관처럼 하는데, 같이 따라 부르면 훨씬 더 재밌거든요. 제가 제일 좋아하는 순간은 조명이 어두워지고 아티스트가 나오기 직전 관객들이 환호하기 시작하는 순간이에요. 끝나고 나면 보통 집에 가는 내내 제일 좋았던 순간들을 얘기해요.',
    keyExpressions: ['get tickets', 'sold out', 'sing along', 'what I enjoy most is'],
  },
  {
    topic: 'concert',
    cut: 'experience',
    question: {
      ko: '콘서트에서의 기억에 남는 경험',
      en: 'Tell me about a memorable experience at a concert.',
    },
    answer:
      "Come to think of it, I remember a concert where the artist suddenly came down into the crowd, which none of us were expecting at all. It was such an exciting experience that everyone started screaming at the same time. What I remember most is being close enough to actually make eye contact for a second, which still feels surreal thinking about it now. Looking back, that's the kind of moment you can't really plan for, and it's exactly why I keep going to concerts.",
    answerKo:
      '생각해보니, 아티스트가 갑자기 관객석으로 내려왔던 콘서트가 기억나요, 아무도 예상 못 한 일이었어요. 다들 동시에 소리를 지를 정도로 정말 흥분되는 경험이었어요. 제일 기억에 남는 건 잠깐이지만 실제로 눈이 마주칠 만큼 가까이 있었다는 건데, 지금 생각해도 비현실적으로 느껴져요. 돌이켜보면 그런 순간은 계획할 수 없는 거라서, 그게 바로 제가 계속 콘서트를 보러 가는 이유예요.',
    keyExpressions: ['Come to think of it', 'such an ... experience that', 'Looking back'],
  },
  {
    topic: 'shopping',
    cut: 'description',
    question: {
      ko: '평소 하는 쇼핑을 묘사해달라는 질문',
      en: 'What kind of shopping do you usually do?',
    },
    answer:
      "I mostly enjoy clothes shopping, but I also like just window shopping even when I'm not planning to buy anything. What I like most about it is browsing around without any pressure to purchase something right away. I usually go to shopping malls rather than online, mainly because I like trying things on before I decide. Honestly, finding a great deal on something I actually needed is probably my favorite part of the whole experience. That's mainly why I enjoy shopping so much, even on days when I don't end up buying anything.",
    answerKo:
      '저는 주로 옷 쇼핑을 즐기는데, 딱히 살 게 없어도 그냥 아이쇼핑하는 것도 좋아해요. 제일 좋아하는 건 당장 뭘 사야 한다는 부담 없이 그냥 둘러보는 거예요. 결정하기 전에 입어보는 걸 좋아해서 온라인보다는 보통 쇼핑몰에 가요. 솔직히 제가 정말 필요했던 걸 저렴하게 잘 사는 게 쇼핑에서 제일 좋아하는 부분인 것 같아요. 그래서 아무것도 안 사는 날에도 쇼핑을 그렇게 즐기는 거예요.',
    keyExpressions: ['window shopping', 'browse around', 'a great deal', 'try something on'],
  },
  {
    topic: 'shopping',
    cut: 'habit',
    question: {
      ko: '쇼핑을 얼마나 자주, 어떻게 하는지 묻는 질문',
      en: "How often do you go shopping, and what's your routine?",
    },
    answer:
      "I tend to go shopping once or twice a month, usually on weekends when I have more free time. I usually start by browsing around a few of my favorite stores before deciding what I actually need. I've made it a habit to try things on first, since sizes can vary a lot between brands. What I enjoy most is that moment when I find something that fits perfectly and looks even better than I expected. Sometimes I end up making an impulse buy, but honestly, that's part of the fun for me.",
    answerKo:
      '한 달에 한두 번 정도, 보통 시간이 더 많은 주말에 쇼핑을 가는 편이에요. 뭐가 진짜 필요한지 정하기 전에 보통 제가 좋아하는 매장 몇 군데를 먼저 둘러봐요. 브랜드마다 사이즈가 많이 달라서 먼저 입어보는 걸 습관으로 만들었어요. 제가 제일 좋아하는 순간은 딱 맞으면서 생각보다 더 예쁜 걸 발견했을 때예요. 가끔은 충동구매를 하기도 하는데, 솔직히 그것도 재미의 일부예요.',
    keyExpressions: ['I tend to', 'try something on', 'what I enjoy most is', 'an impulse buy'],
  },
  {
    topic: 'shopping',
    cut: 'experience',
    question: {
      ko: '쇼핑 중 기억에 남는 경험',
      en: 'Tell me about a memorable shopping experience.',
    },
    answer:
      "Let me see... actually, I remember finding a jacket on sale that I had wanted for months, and it turned out to be the last one in my size. It was such a lucky experience that I still can't believe the timing worked out. What I remember most is how excited I felt at the checkout, like I had actually won something. Looking back, that's probably the best deal I've ever gotten while shopping, and it's the story I tell whenever someone asks about a good find.",
    answerKo:
      '어디 보자... 몇 달 동안 갖고 싶었던 재킷을 세일 중에 발견한 적이 있는데, 알고 보니 제 사이즈로는 마지막 하나였어요. 타이밍이 그렇게 맞아떨어진 게 아직도 믿기지 않을 정도로 운 좋은 경험이었어요. 제일 기억에 남는 건 계산할 때 뭔가에 당첨된 것처럼 신났던 기분이에요. 돌이켜보면 아마 제가 쇼핑하면서 저렴하게 잘 산 것 중 최고인 것 같고, 누가 좋은 득템 얘기 물어보면 항상 하는 얘기예요.',
    keyExpressions: ['Let me see', 'it turned out that', 'a great deal', 'Looking back'],
  },
  {
    topic: 'music',
    cut: 'description',
    question: {
      ko: '좋아하는 음악 취향을 묘사해달라는 질문',
      en: 'What kind of music do you usually listen to?',
    },
    answer:
      "I'm really into indie music these days, but I also enjoy pop and R&B depending on my mood. I usually make a playlist for different situations, like one for working and another for relaxing before bed. Honestly, I think I have a pretty good ear for music, since I can usually tell within the first few seconds whether I'll like a song. What I like most about certain songs is when the lyrics hit different, especially if they match something I'm going through at the time. That's mainly why music has become such a big part of my everyday life.",
    answerKo:
      '요즘 저는 인디 음악에 푹 빠져 있는데, 기분에 따라 팝이나 R&B도 즐겨 들어요. 상황별로 보통 플레이리스트를 만드는 편인데, 일할 때 듣는 것과 자기 전에 쉴 때 듣는 게 따로 있어요. 솔직히 저는 음악 듣는 귀가 꽤 좋은 것 같아요, 몇 초만 들어도 그 노래가 좋을지 아닐지 대체로 알거든요. 특정 노래에서 제가 제일 좋아하는 건 가사가 유난히 와닿을 때인데, 특히 그때 제가 겪고 있는 일이랑 맞아떨어지면 더 그래요. 그래서 음악이 제 일상에서 이렇게 큰 부분을 차지하게 됐어요.',
    keyExpressions: [
      "I'm really into",
      'make a playlist',
      'have a good ear for music',
      'lyrics that hit different',
    ],
  },
  {
    topic: 'music',
    cut: 'habit',
    question: {
      ko: '음악 감상할 때 평소 하는 것',
      en: 'What do you usually do when you listen to music?',
    },
    answer:
      "I usually put on some music the moment I get home, just to set the mood before I do anything else. I tend to discover new artists through playlists that get recommended to me, rather than searching for them myself. I've made it a habit to update my playlist every few weeks, so I don't get tired of listening to the same songs. What I enjoy most is finding a song that fits perfectly with whatever I'm doing at the moment, whether that's studying or just relaxing. As a result, I almost always have something playing in the background throughout the day.",
    answerKo:
      '집에 오는 순간 다른 걸 하기 전에 분위기부터 잡으려고 보통 음악을 틀어요. 직접 찾아보기보다는 추천받는 플레이리스트를 통해 새로운 아티스트를 발견하는 편이에요. 같은 노래만 듣다가 질리지 않게 몇 주마다 플레이리스트를 업데이트하는 걸 습관으로 만들었어요. 제가 제일 좋아하는 건 공부할 때든 그냥 쉴 때든, 그 순간에 딱 맞는 노래를 찾았을 때예요. 그러다 보니 하루 종일 거의 항상 배경음악이 뭔가 흘러나오고 있어요.',
    keyExpressions: ['put on some music', 'discover new artists', 'make a playlist', 'As a result'],
  },
  {
    topic: 'music',
    cut: 'experience',
    question: {
      ko: '음악과 관련된 기억에 남는 경험',
      en: 'Tell me about a memorable experience related to music.',
    },
    answer:
      "Actually, I have a pretty vivid memory of discovering a song completely by accident through a playlist, and it ended up becoming one of my all-time favorites. It was such a surprising experience because I almost skipped past it without listening properly. What I remember most is listening to the lyrics closely for the first time and realizing how much they meant to me. Looking back, that's probably why I always give new songs a real chance now, instead of judging them in the first few seconds.",
    answerKo:
      '플레이리스트를 통해 완전히 우연히 어떤 노래를 발견했는데 그게 제가 제일 좋아하는 노래 중 하나가 된 적이 있어요, 꽤 생생하게 기억나요. 제대로 듣지도 않고 넘길 뻔했던 거라 정말 놀라운 경험이었어요. 제일 기억에 남는 건 처음으로 가사를 자세히 들으면서 그게 저한테 얼마나 큰 의미였는지 깨달았다는 거예요. 돌이켜보면 그래서 제가 지금은 처음 몇 초만 듣고 판단하지 않고 새 노래한테 항상 제대로 기회를 주는 것 같아요.',
    keyExpressions: [
      'I actually have a pretty vivid memory of this',
      'such an ... experience that',
      'Looking back',
    ],
  },
];

export function getTopicQA(topic: string, cut: string) {
  return topicQAs.find((q) => q.topic === topic && q.cut === cut);
}
