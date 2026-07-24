// 돌발주제×컷(묘사/습관/경험) 조합별 모범답안 데이터 — questions.ts의 suddenTopics 질문을 그대로 재사용
// ⚠️ 답안은 학습용 초안이며 오픽 경험자 검증 필요 (LEARNING.md 참고)

import type { CutKey } from './topic-qa';

export type SuddenTopicKey =
  | 'weather'
  | 'recycling'
  | 'transportation'
  | 'internet'
  | 'health'
  | 'appointments';

export const suddenTopicInfo: Record<SuddenTopicKey, { name: string; slug: SuddenTopicKey }> = {
  weather: { name: '날씨', slug: 'weather' },
  recycling: { name: '재활용', slug: 'recycling' },
  transportation: { name: '교통·대중교통', slug: 'transportation' },
  internet: { name: '인터넷·기술', slug: 'internet' },
  health: { name: '건강', slug: 'health' },
  appointments: { name: '약속', slug: 'appointments' },
};

export const suddenCutInfo: Record<CutKey, { name: string; hint: string }> = {
  description: { name: '묘사', hint: '전반적인 상황/모습을 설명하는 질문' },
  habit: { name: '습관', hint: '평소에 나는 어떻게 하는지 묻는 질문' },
  experience: { name: '경험', hint: '기억에 남는 일화를 묻는 질문' },
};

export type SuddenQA = {
  topic: SuddenTopicKey;
  cut: CutKey;
  question: { ko: string; en: string };
  answer: string;
  keyExpressions: string[];
};

export const suddenQAs: SuddenQA[] = [
  {
    topic: 'weather',
    cut: 'description',
    question: {
      ko: '당신 나라의 날씨는 어떤가요? 사계절을 묘사해 주세요.',
      en: 'How is the weather in your country? Describe the four seasons.',
    },
    answer:
      "In my country, we have four pretty distinct seasons. Spring is usually mild and a bit windy, and that's when the flowers start blooming everywhere. Summer gets really hot and humid, so most people try to stay indoors during the day. Fall is probably my favorite season, since the weather is cool and comfortable, and the leaves change color beautifully. Winter can get quite cold, especially in December and January, and it sometimes snows in certain areas. Compared to other countries, I'd say the seasons here are pretty extreme, since summer and winter are almost opposite in temperature. That's mainly why people always talk about the weather here — it changes so much throughout the year.",
    keyExpressions: ['mild', 'humid', 'Compared to ...', "That's mainly why"],
  },
  {
    topic: 'weather',
    cut: 'habit',
    question: { ko: '가장 좋아하는 계절과 이유는?', en: 'What is your favorite season and why?' },
    answer:
      "If I had to pick, I'd say fall is definitely my favorite season. I tend to feel most comfortable when the weather is cool but not too cold, and fall hits that balance perfectly. What I enjoy most is that I can go for walks outside without sweating or freezing, which makes it easy to just enjoy being outdoors. On top of that, the scenery looks amazing with all the colorful leaves, so it's a great season for taking photos or just going on short trips. Personally, I also feel like fall makes me more productive, maybe because the weather itself feels calm and clear. That's basically why, every year, I look forward to fall more than any other season.",
    keyExpressions: ['I tend to', 'what I enjoy most is', 'On top of that', 'Personally'],
  },
  {
    topic: 'weather',
    cut: 'experience',
    question: {
      ko: '날씨 때문에 계획이 바뀌었던 경험을 이야기해 주세요.',
      en: 'Tell me about a time when the weather affected your plans.',
    },
    answer:
      "Let me think about that for a second... Actually, I remember planning a hiking trip with friends that got completely ruined because of sudden heavy rain. It was such a frustrating experience because we had been looking forward to it for weeks. We ended up canceling the hike and going to a nearby café instead, just to make the most of the day. What I remember most is that even though the original plan fell through, we still had a surprisingly fun time just talking for hours. Looking back, it taught me that it's always a good idea to have a backup plan whenever the weather forecast looks uncertain.",
    keyExpressions: ['Let me think about that for a second', 'frustrating', 'Looking back'],
  },
  {
    topic: 'recycling',
    cut: 'description',
    question: {
      ko: '당신 나라에서는 재활용을 어떻게 하나요?',
      en: 'How do people recycle in your country?',
    },
    answer:
      "In my country, recycling is actually pretty strict and well organized. People are required to separate their trash into categories like plastic, paper, glass, and general waste. Most apartments have designated recycling bins outside, usually with specific days for each type of waste. What's more, if you don't sort your trash properly, you can actually get a small fine, so most people take it pretty seriously. Compared to some other countries I've heard about, I think our recycling system is fairly detailed and easy to follow once you get used to it. That's mainly why recycling has just become a normal part of everyday life here.",
    keyExpressions: ["What's more", 'Compared to ...', "That's mainly why"],
  },
  {
    topic: 'recycling',
    cut: 'habit',
    question: { ko: '집에서 재활용을 어떻게 하나요?', en: 'How do you recycle at home?' },
    answer:
      "At home, I usually keep separate bins for plastic, paper, and general trash in my kitchen. I tend to rinse out containers like yogurt cups or bottles before throwing them away, since that's required where I live. I've made it a habit to take out the recycling every few days, mainly because it piles up pretty fast otherwise. What I enjoy most, if I can call it that, is flattening cardboard boxes, since it's oddly satisfying to make everything fit neatly. As a result, my place stays fairly organized, and I don't really mind the extra effort anymore.",
    keyExpressions: ['I tend to', "I've made it a habit to", 'what I enjoy most is', 'As a result'],
  },
  {
    topic: 'recycling',
    cut: 'experience',
    question: {
      ko: '재활용하면서 겪었던 문제를 이야기해 주세요.',
      en: 'Tell me about a problem you had while recycling.',
    },
    answer:
      "Actually, I have a pretty vivid memory of accidentally putting food waste in the wrong bin once, which caused a whole mess. It was such an awkward experience because my neighbor pointed it out, and I felt pretty embarrassed at the time. I mean, I hadn't realized the rules were different for food waste versus general trash in that building. Looking back, it was actually a useful mistake, because I made sure to double-check the rules afterward and never mixed them up again.",
    keyExpressions: ['I actually have a pretty vivid memory of this', 'awkward', 'Looking back'],
  },
  {
    topic: 'transportation',
    cut: 'description',
    question: {
      ko: '당신 도시에서 사람들은 어떻게 이동하나요?',
      en: 'How do people get around in your city?',
    },
    answer:
      "In my city, most people rely on public transportation like the subway and buses to get around. The subway system is pretty extensive, so you can reach almost anywhere in the city without needing a car. Buses are also common, especially for shorter distances or areas the subway doesn't cover. On top of that, a lot of younger people also use bikes or electric scooters for really short trips. Compared to driving, public transportation is usually faster during rush hour because of how heavy the traffic gets. That's mainly why most people I know don't even bother owning a car.",
    keyExpressions: ['On top of that', 'Compared to ...', "That's mainly why"],
  },
  {
    topic: 'transportation',
    cut: 'habit',
    question: {
      ko: '보통 어떻게 출근/등교하나요?',
      en: 'How do you usually get to work or school?',
    },
    answer:
      "I usually take the subway to get to work, since it's the most convenient option from where I live. I tend to leave a bit early in the morning to avoid the worst of the rush hour crowd. I've made it a habit to listen to music or podcasts during the ride, just to make the commute feel shorter. What I enjoy most is that I can just relax and not worry about traffic, unlike if I were driving. As a result, my commute has become a kind of personal downtime rather than something stressful.",
    keyExpressions: ['I tend to', "I've made it a habit to", 'what I enjoy most is', 'As a result'],
  },
  {
    topic: 'transportation',
    cut: 'experience',
    question: {
      ko: '대중교통에서 있었던 기억에 남는 경험을 이야기해 주세요.',
      en: 'Tell me about a memorable experience on public transportation.',
    },
    answer:
      "Let me see... actually, I remember one time I got on the wrong subway line completely by accident and ended up in a part of the city I had never been to. It was such a confusing experience at first, since I didn't realize my mistake until several stops later. But instead of panicking, I decided to just walk around the area for a bit before heading back. Looking back, it turned out to be a pretty enjoyable little adventure, and I even found a nice restaurant I still go back to sometimes.",
    keyExpressions: [
      'Let me see',
      'such an ... experience that',
      'it turned out that',
      'Looking back',
    ],
  },
  {
    topic: 'internet',
    cut: 'description',
    question: {
      ko: '사람들은 인터넷으로 주로 무엇을 하나요?',
      en: 'What do people usually do on the Internet?',
    },
    answer:
      "People use the Internet for pretty much everything these days, from communicating with friends to shopping and watching videos. A lot of people spend time on social media, just scrolling through posts or messaging others. Streaming platforms are also huge, since most people watch shows or listen to music online instead of through traditional TV or radio. On top of that, a lot of people also use the Internet for work, especially with how common remote meetings have become. That's mainly why it feels like almost everything in daily life is connected to the Internet somehow.",
    keyExpressions: ['On top of that', "That's mainly why"],
  },
  {
    topic: 'internet',
    cut: 'habit',
    question: {
      ko: '자주 쓰는 웹사이트나 앱은 무엇인가요?',
      en: 'What websites or apps do you use often?',
    },
    answer:
      "I tend to use social media apps the most, mainly to check messages and see what my friends are up to. I also use streaming apps almost every day, usually to watch a show before going to bed. I've made it a habit to check a few news apps in the morning, just to stay updated on what's happening. What I enjoy most is how convenient everything is now, since I can basically do all of this from my phone without needing a computer. As a result, my phone has become the one thing I always have with me.",
    keyExpressions: ['I tend to', "I've made it a habit to", 'what I enjoy most is', 'As a result'],
  },
  {
    topic: 'internet',
    cut: 'experience',
    question: {
      ko: '기술이 사람들의 삶을 어떻게 바꿨나요?',
      en: "How has technology changed people's lives?",
    },
    answer:
      "Honestly, I think technology has changed people's lives more than most of us even realize. Compared to before, we can now stay connected with people no matter where they are, which used to be a lot harder. What strikes me most is how much time we save on things like shopping or paying bills, since almost everything can be done online now. At the same time, I do think it's made people a bit more dependent on their phones than they used to be. Overall, though, I'd say the convenience it brings outweighs the downsides, at least in my own experience.",
    keyExpressions: ['Compared to ...', 'What strikes me most is', 'At the same time'],
  },
  {
    topic: 'health',
    cut: 'description',
    question: {
      ko: '당신 나라 사람들은 건강을 위해 무엇을 하나요?',
      en: 'What do people do to stay healthy in your country?',
    },
    answer:
      "In my country, a lot of people try to stay active by exercising regularly, whether that's going to the gym or just walking outside. Eating habits are also a big part of it, since a lot of people try to eat balanced meals with plenty of vegetables. On top of that, regular health checkups are pretty common, especially as people get older. What's more, there's been a growing interest in mental health lately, so people are more open about taking breaks and managing stress. That's mainly why staying healthy here isn't just about exercise anymore, it's a bit more holistic these days.",
    keyExpressions: ['On top of that', "What's more", "That's mainly why"],
  },
  {
    topic: 'health',
    cut: 'habit',
    question: {
      ko: '건강 관리를 위해 무엇을 하나요?',
      en: 'What do you do to take care of your health?',
    },
    answer:
      "I try to keep myself in shape by going for walks or jogging a few times a week. I tend to avoid eating out too often, mainly because home-cooked meals feel healthier to me. I've made it a habit to get at least seven hours of sleep, since I noticed I feel a lot worse without enough rest. What I enjoy most is just how much better I feel overall when I stick to these habits consistently. As a result, I've become a lot more aware of how my daily choices affect my health.",
    keyExpressions: ['keep myself in shape', 'I tend to', "I've made it a habit to", 'As a result'],
  },
  {
    topic: 'health',
    cut: 'experience',
    question: {
      ko: '아프거나 다쳤던 경험을 이야기해 주세요.',
      en: 'Tell me about a time you were sick or injured.',
    },
    answer:
      "Let me think about that for a second... Actually, I remember spraining my ankle pretty badly while jogging a couple of years ago. It was such a frustrating experience because I couldn't exercise properly for almost a month afterward. What I remember most is how much I missed just being able to walk normally, since I usually took that for granted. Looking back, it actually taught me to stretch properly before exercising, which I make sure to do every time now.",
    keyExpressions: ['Let me think about that for a second', 'frustrating', 'Looking back'],
  },
  {
    topic: 'appointments',
    cut: 'description',
    question: {
      ko: '보통 어떤 약속을 잡나요?',
      en: 'What kind of appointments do you usually make?',
    },
    answer:
      "I usually make appointments for things like doctor visits, haircuts, or meeting up with friends. Work-related appointments, like meetings, also take up a good part of my schedule during the week. On top of that, I sometimes make appointments for things like car maintenance, since those need to be scheduled in advance. What's more, I try to keep a calendar on my phone so I don't accidentally double-book anything. That's mainly how I manage to keep track of everything without forgetting.",
    keyExpressions: ['On top of that', "What's more", "That's mainly"],
  },
  {
    topic: 'appointments',
    cut: 'habit',
    question: {
      ko: '친구와 약속은 어떻게 잡나요?',
      en: 'How do you usually make appointments with friends?',
    },
    answer:
      "I usually text my friends first to find a time that works for everyone. I tend to suggest a few options rather than just one date, since it's easier to find something that fits everyone's schedule. I've made it a habit to confirm the appointment a day before, just to make sure no one forgot about it. What I enjoy most is when the plan comes together smoothly without too much back and forth. As a result, most of my appointments with friends end up being pretty relaxed to organize.",
    keyExpressions: ['I tend to', "I've made it a habit to", 'what I enjoy most is', 'As a result'],
  },
  {
    topic: 'appointments',
    cut: 'experience',
    question: {
      ko: '약속을 취소하거나 바꿔야 했던 경험을 이야기해 주세요.',
      en: 'Tell me about a time you had to cancel or change an appointment.',
    },
    answer:
      'Actually, I have a pretty vivid memory of having to cancel a dinner appointment last minute because I suddenly came down with a fever. It was such an inconvenient experience, especially since my friend had already left home before I texted her. Thankfully, she was understanding about it, and we just rescheduled for the following week instead. Looking back, it made me realize I should try to give people more notice whenever possible, even if something comes up unexpectedly.',
    keyExpressions: [
      'I actually have a pretty vivid memory of this',
      'such an ... experience that',
      'Looking back',
    ],
  },
];

export function getSuddenQA(topic: string, cut: string) {
  return suddenQAs.find((q) => q.topic === topic && q.cut === cut);
}
