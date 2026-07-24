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
