// 주제×컷(묘사/습관/경험) 조합별 예상 질문 + 모범답안 데이터 — SEO 색인용 개별 페이지 소스
// ⚠️ 답안은 학습용 초안이며 오픽 경험자 검증 필요 (LEARNING.md 참고)

export type TopicKey = 'home' | 'cafe' | 'movie' | 'travel' | 'exercise' | 'park';
export type CutKey = 'description' | 'habit' | 'experience';

export const topicInfo: Record<TopicKey, { name: string; slug: TopicKey }> = {
  home: { name: '집', slug: 'home' },
  cafe: { name: '카페', slug: 'cafe' },
  movie: { name: '영화', slug: 'movie' },
  travel: { name: '여행', slug: 'travel' },
  exercise: { name: '운동', slug: 'exercise' },
  park: { name: '공원', slug: 'park' },
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
      "I live in a small apartment in Seoul with my family. It's not huge, but it's cozy and comfortable, so I don't mind the size at all. When you walk in, there's a living room right in the middle, and my bedroom is right next to it. My favorite spot in the house is the couch by the window, because I can see the sky while I'm relaxing there. The apartment is fully furnished, so I didn't have to buy much furniture when I moved in. Honestly, what I like most about my place is that it feels calm the moment I get home. That's mainly because it's quiet and I can just unwind after a long day.",
    keyExpressions: [
      'cozy and comfortable',
      'my favorite spot',
      'fully furnished',
      'unwind after a long day',
    ],
  },
  {
    topic: 'home',
    cut: 'habit',
    question: { ko: '집에서 평소 뭘 하는지 묻는 질문', en: 'What do you usually do at home?' },
    answer:
      "Well, when I have free time, I usually just stay home and relax rather than going out. I tend to spend most of my time in my room, especially on the couch by the window — that's my favorite spot in the house. I've made it a routine to open the window every morning to get some fresh air before I start my day. After that, I usually just do simple things like listening to music or watching a show. What I enjoy most is the moment right after I finish all my chores, because that's when I finally get to relax properly.",
    keyExpressions: [
      'I tend to',
      "I've made it a routine to",
      'get some fresh air',
      'what I enjoy most is',
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
      'Let me think about that for a second... Actually, I remember when I first moved into this apartment. It was such a hectic experience because I had to pack everything by myself and it took almost a whole week. I mean, everything was a mess at first — boxes everywhere, nothing in the right place. But once I got the furniture set up and made my favorite spot by the window, it finally started to feel like home. Looking back, it was actually a rewarding experience because I got to decorate everything exactly the way I wanted.',
    keyExpressions: [
      'Let me think about that for a second',
      'Looking back',
      'It used to be ..., but now ...',
    ],
  },
  {
    topic: 'cafe',
    cut: 'description',
    question: { ko: '자주 가는 카페를 묘사해달라는 질문', en: 'Describe a café you often visit.' },
    answer:
      "There's a small café near my house that I go to pretty often. It has a really cozy vibe, with warm lighting and soft music playing in the background. The place isn't too big, but that's actually what makes it feel more comfortable, if that makes sense. I'm a regular there, so the staff already know what I usually order. Honestly, the smell of freshly brewed coffee the moment you walk in is what I like most about it.",
    keyExpressions: [
      'have a cozy vibe',
      'be a regular (at)',
      'freshly brewed coffee',
      'if that makes sense',
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
      "I usually grab a cup of coffee first, and then I just find a seat by the window. I tend to go there on weekends, mainly to catch up with friends or just to relax by myself. What I enjoy most is people-watching while sipping my coffee, since it's a good way to clear my head. I've made it a habit to visit at least once a week, because honestly, it's become a big part of my routine now.",
    keyExpressions: [
      'grab a cup of coffee',
      'catch up with friends',
      'make it a habit',
      'clear my head',
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
      "Hmm, let me think about that for a second... Actually, I have a pretty vivid memory of this one time I met an old friend at my usual café. We hadn't seen each other in years, so it was such a fun experience catching up over coffee. What I remember most is that we ended up staying there for almost three hours, just talking non-stop. It was such a great experience that I still talk about it sometimes.",
    keyExpressions: [
      'I actually have a pretty vivid memory of this',
      'It was such a ... experience that ...',
      'Looking back',
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
      "I'm a huge fan of action movies, but I also enjoy watching thrillers every now and then. What I like most about action movies is that they keep me on the edge of my seat the whole time. I usually watch them either at home or at the theater, depending on how big the movie is. Honestly, if there's a good plot twist, that's what makes a movie really worth watching for me. There's this one movie I highly recommend to almost everyone I know, because it blew my mind the first time I watched it.",
    keyExpressions: [
      'a huge fan of',
      'keep me on the edge of my seat',
      'the plot twist',
      'highly recommend',
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
      "I usually watch movies when I have free time, especially on weekends. I tend to check reviews first before deciding what to watch, just so I don't waste my time on something boring. Once I pick something, I usually grab some snacks and get comfortable on the couch. What I enjoy most is that quiet moment right before the movie starts, when I'm just excited to see what happens. I've made it a routine to watch at least one movie a week, so it's become a pretty consistent part of my life.",
    keyExpressions: [
      'I usually ... when I have free time',
      'I tend to',
      'what I enjoy most is',
      'make it a routine to',
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
      "Let me see... actually, I remember watching a movie in theaters that had such an unexpected plot twist that the entire audience gasped at the same time. It was such an intense experience that I couldn't stop thinking about it for days. What I remember most is leaving the theater and immediately wanting to watch it again just to catch details I missed. Looking back, that's probably the movie experience that stands out the most to me.",
    keyExpressions: ['Let me see', 'such an ... experience that', 'Looking back'],
  },
  {
    topic: 'travel',
    cut: 'description',
    question: {
      ko: '기억에 남는 여행지를 묘사해달라는 질문',
      en: 'Describe a trip that was memorable to you.',
    },
    answer:
      "The most memorable trip I took was to Jeju Island a couple of years ago. What I liked most about it was the breathtaking scenery, especially the coastline near the beach. It wasn't a packed schedule trip, if that makes sense — we mostly just walked around and soaked up the atmosphere. We also found a small restaurant off the beaten path that turned out to be one of the best meals of the trip. Overall, it was the kind of trip where I could really recharge my batteries.",
    keyExpressions: [
      'a memorable trip',
      'soak up the atmosphere',
      'off the beaten path',
      'recharge my batteries',
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
      "When I travel, I tend to avoid overly packed schedules because I like taking my time at each place. I usually start the day early so I can soak up the atmosphere before it gets too crowded. I've made it a habit to look for local restaurants off the beaten path instead of just touristy spots, since that's where I find the best food. What I enjoy most is just wandering around without a strict plan, because that's when I discover the most interesting things.",
    keyExpressions: ['I tend to', 'make it a habit', 'off the beaten path', 'what I enjoy most is'],
  },
  {
    topic: 'travel',
    cut: 'experience',
    question: {
      ko: '여행 중 예상치 못했던 경험',
      en: 'Tell me about an unexpected experience you had while traveling.',
    },
    answer:
      'Actually, I have a pretty vivid memory of this one trip where our original plan completely fell through because of bad weather. At first, it was pretty frustrating because we had to cancel almost everything. But we ended up finding a small local spot instead, and it turned out to be way more memorable than what we had originally planned. Looking back, it was such a valuable experience because it taught me that sometimes the best travel memories come from unexpected changes.',
    keyExpressions: [
      'I actually have a pretty vivid memory of this',
      'it turned out that',
      'Looking back',
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
      "I mostly just go jogging or walking around my neighborhood to keep myself in shape. It's nothing too intense, if that makes sense — I like exercising at my own pace rather than pushing myself too hard. Usually I go early in the morning or in the evening, whenever I have some free time. Honestly, it's not really about building muscle for me, it's more about clearing my head after a long day.",
    keyExpressions: ['keep myself in shape', 'at my own pace', 'clear my head'],
  },
  {
    topic: 'exercise',
    cut: 'habit',
    question: {
      ko: '운동을 얼마나 자주, 어떻게 하는지 묻는 질문',
      en: "How often do you exercise, and what's your routine like?",
    },
    answer:
      "I've made it a habit to walk at least thirty minutes a day, usually along the river near my house. I tend to go in the evening because that's when the weather is more comfortable. Before I start, I usually just put on some music, and that alone puts me in the mood to move. What I enjoy most is that moment right after I finish, because I feel like I've worked up a good sweat and it just feels refreshing.",
    keyExpressions: [
      'make it a habit to',
      'at my own pace',
      'work up a sweat',
      'what I enjoy most is',
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
      "Let me think about that for a second... Actually, I remember the first time I tried jogging for more than thirty minutes straight. It was such an exhausting experience at first because I wasn't used to it at all. But once I made it to the end, I felt so proud of myself, which was a pretty unexpected feeling. Looking back, that's actually the experience that made me keep exercising regularly.",
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
      "There's a park close to my house that I visit pretty often, especially in the evenings. It's full of lush green trees, so it feels really refreshing just to walk through it. The park isn't too crowded on weekdays, so it's actually a great place to escape the hustle and bustle of the city. Honestly, what I like most is the bench near the pond, where I usually sit for a while before heading back home.",
    keyExpressions: ['lush green trees', 'escape the hustle and bustle', 'take a stroll'],
  },
  {
    topic: 'park',
    cut: 'habit',
    question: {
      ko: '공원에서 평소 뭘 하는지 묻는 질문',
      en: 'What do you usually do at the park?',
    },
    answer:
      "I usually take a stroll around the park in the evenings, mostly to clear my head after work. I tend to bring my earphones and just listen to music while walking. Sometimes I also enjoy people-watching from a bench, since it's a nice way to relax without doing much. I've made it a habit to go there at least a few times a week, mainly because it helps me unwind after a long day.",
    keyExpressions: [
      'take a stroll',
      'people-watching',
      'make it a habit',
      'unwind after a long day',
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
    keyExpressions: ['Come to think of it', 'such an ... experience that', 'Looking back'],
  },
];

export function getTopicQA(topic: string, cut: string) {
  return topicQAs.find((q) => q.topic === topic && q.cut === cut);
}
