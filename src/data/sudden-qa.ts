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
  answerKo: string;
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
    answerKo:
      '저희 나라는 사계절이 꽤 뚜렷해요. 봄은 보통 온화하고 바람이 좀 부는데, 그때 여기저기서 꽃이 피기 시작해요. 여름은 정말 덥고 습해서 대부분 낮에는 실내에 있으려고 해요. 가을은 아마 제가 제일 좋아하는 계절인데, 날씨가 선선하고 쾌적하고 단풍도 예쁘게 물들거든요. 겨울은 특히 12월, 1월엔 꽤 추워지고 어떤 지역은 눈도 와요. 다른 나라랑 비교하면 여름이랑 겨울 기온이 거의 반대라 여기 계절은 꽤 극단적인 편인 것 같아요. 그래서 여기 사람들이 날씨 얘기를 그렇게 많이 하는 거예요, 1년 동안 정말 많이 변하거든요.',
    keyExpressions: ['mild', 'humid', 'Compared to ...', "That's mainly why"],
  },
  {
    topic: 'weather',
    cut: 'habit',
    question: { ko: '가장 좋아하는 계절과 이유는?', en: 'What is your favorite season and why?' },
    answer:
      "If I had to pick, I'd say fall is definitely my favorite season. I tend to feel most comfortable when the weather is cool but not too cold, and fall hits that balance perfectly. What I enjoy most is that I can go for walks outside without sweating or freezing, which makes it easy to just enjoy being outdoors. On top of that, the scenery looks amazing with all the colorful leaves, so it's a great season for taking photos or just going on short trips. Personally, I also feel like fall makes me more productive, maybe because the weather itself feels calm and clear. That's basically why, every year, I look forward to fall more than any other season.",
    answerKo:
      '하나 고르라면 가을이 확실히 제가 제일 좋아하는 계절이에요. 날씨가 선선하면서 너무 춥지 않을 때 제일 편안한 편인데, 가을이 딱 그 균형을 맞춰줘요. 제가 제일 좋아하는 건 땀 흘리거나 얼지 않고 밖에서 산책할 수 있다는 건데, 그래서 야외 활동을 편하게 즐길 수 있어요. 게다가 단풍이 물들어서 풍경도 멋있어서 사진 찍거나 짧은 여행 가기 좋은 계절이에요. 개인적으로는 날씨 자체가 차분하고 맑아서 그런지 가을엔 제가 더 생산적이 되는 것 같기도 해요. 그래서 매년 다른 어떤 계절보다 가을을 제일 기다리는 거예요.',
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
    answerKo:
      '잠깐 생각해볼게요... 갑자기 폭우가 쏟아져서 친구들이랑 계획했던 등산이 완전히 망했던 적이 있어요. 몇 주 동안 기대하고 있었어서 정말 답답한 경험이었어요. 결국 등산은 취소하고 대신 근처 카페에 가서 그날을 최대한 즐기기로 했어요. 제일 기억에 남는 건 원래 계획이 틀어졌는데도 몇 시간이나 얘기하면서 의외로 즐거운 시간을 보냈다는 거예요. 돌이켜보면 날씨 예보가 불확실할 땐 항상 대안을 준비해두는 게 좋다는 걸 배웠어요.',
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
    answerKo:
      '저희 나라는 재활용이 사실 꽤 엄격하고 체계적이에요. 쓰레기를 플라스틱, 종이, 유리, 일반 쓰레기 같은 카테고리로 나눠서 배출해야 해요. 대부분 아파트에는 밖에 지정된 재활용 통이 있고 보통 종류별로 배출하는 요일이 정해져 있어요. 게다가 분리수거를 제대로 안 하면 실제로 소액 벌금을 낼 수도 있어서 대부분 꽤 신경 써서 해요. 다른 나라 얘기를 들어보면 저희 재활용 시스템이 꽤 세세한 편인데, 한 번 익숙해지면 따라 하기는 쉬운 것 같아요. 그래서 여기서는 재활용이 그냥 일상의 당연한 부분이 됐어요.',
    keyExpressions: ["What's more", 'Compared to ...', "That's mainly why"],
  },
  {
    topic: 'recycling',
    cut: 'habit',
    question: { ko: '집에서 재활용을 어떻게 하나요?', en: 'How do you recycle at home?' },
    answer:
      "At home, I usually keep separate bins for plastic, paper, and general trash in my kitchen. I tend to rinse out containers like yogurt cups or bottles before throwing them away, since that's required where I live. I've made it a habit to take out the recycling every few days, mainly because it piles up pretty fast otherwise. What I enjoy most, if I can call it that, is flattening cardboard boxes, since it's oddly satisfying to make everything fit neatly. As a result, my place stays fairly organized, and I don't really mind the extra effort anymore.",
    answerKo:
      '집에서는 보통 부엌에 플라스틱, 종이, 일반 쓰레기용 통을 따로 두고 있어요. 요거트 통이나 병 같은 건 버리기 전에 헹구는 편인데, 제가 사는 곳에서는 그게 필수거든요. 며칠에 한 번씩 재활용 쓰레기를 내놓는 걸 습관으로 만들었어요, 안 그러면 금방 쌓이거든요. 굳이 말하자면 제가 제일 좋아하는 건 박스를 납작하게 접는 건데, 깔끔하게 맞춰지는 게 묘하게 만족스러워요. 그러다 보니 집이 꽤 정리된 상태로 유지되고, 이제는 그 수고도 별로 신경 안 쓰여요.',
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
    answerKo:
      '음식물 쓰레기를 실수로 잘못된 통에 버려서 난리가 났던 적이 꽤 생생하게 기억나요. 이웃이 그걸 지적해줘서 그때 꽤 민망했던, 좀 어색한 경험이었어요. 그 건물에서는 음식물 쓰레기랑 일반 쓰레기 규칙이 다르다는 걸 몰랐거든요. 돌이켜보면 오히려 유용한 실수였어요, 그 후로는 규칙을 꼭 다시 확인해서 다시는 안 헷갈렸거든요.',
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
    answerKo:
      '저희 도시에서는 대부분 지하철이나 버스 같은 대중교통으로 이동해요. 지하철 노선이 꽤 촘촘해서 차 없이도 도시 거의 어디든 갈 수 있어요. 버스도 흔한 편인데, 특히 거리가 짧거나 지하철이 안 닿는 지역에서 많이 타요. 게다가 요즘 젊은 사람들은 아주 짧은 거리는 자전거나 전동 킥보드도 많이 이용해요. 운전이랑 비교하면 출퇴근 시간엔 교통 정체가 심해서 대중교통이 보통 더 빨라요. 그래서 제 주변엔 아예 차를 안 사는 사람도 많아요.',
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
    answerKo:
      '저는 보통 지하철로 출근하는데, 제가 사는 곳에서는 그게 제일 편한 방법이거든요. 러시아워 혼잡을 피하려고 아침에 조금 일찍 나가는 편이에요. 통근 시간이 덜 길게 느껴지게 이동 중에 음악이나 팟캐스트를 듣는 걸 습관으로 만들었어요. 제가 제일 좋아하는 건 운전할 때와 달리 그냥 편하게 있으면서 교통 걱정을 안 해도 된다는 거예요. 그러다 보니 통근 시간이 스트레스라기보다 저만의 여유 시간이 됐어요.',
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
    answerKo:
      '어디 보자... 완전히 실수로 다른 지하철 노선을 타서 한 번도 안 가본 동네까지 간 적이 있어요. 처음엔 몇 정거장 지나서야 실수를 알아차려서 꽤 헷갈리는 경험이었어요. 근데 당황하는 대신 그냥 그 동네를 잠깐 둘러보고 돌아가기로 했어요. 돌이켜보면 꽤 즐거운 작은 모험이었고, 지금도 가끔 가는 괜찮은 식당도 그때 발견했어요.',
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
    answerKo:
      '요즘 사람들은 친구랑 연락하는 것부터 쇼핑, 영상 시청까지 거의 모든 걸 인터넷으로 해요. 많은 사람들이 SNS에서 게시물을 넘겨보거나 메시지를 주고받으며 시간을 보내요. 스트리밍 플랫폼도 큰 비중을 차지하는데, 대부분 TV나 라디오 대신 온라인으로 드라마를 보거나 음악을 들어요. 게다가 재택 회의가 흔해지면서 일할 때도 인터넷을 많이 써요. 그래서 일상의 거의 모든 게 어떻게든 인터넷이랑 연결돼 있는 느낌이에요.',
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
    answerKo:
      '저는 주로 메시지를 확인하고 친구들 근황을 보려고 SNS 앱을 제일 많이 써요. 스트리밍 앱도 거의 매일 쓰는데 보통 자기 전에 뭔가를 봐요. 아침에 뉴스 앱 몇 개를 확인하는 걸 습관으로 만들었어요, 무슨 일이 있는지 알아두려고요. 제가 제일 좋아하는 건 이 모든 걸 컴퓨터 없이 거의 휴대폰 하나로 할 수 있다는 편리함이에요. 그러다 보니 휴대폰이 제가 항상 가지고 다니는 유일한 물건이 됐어요.',
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
    answerKo:
      '솔직히 기술이 사람들 삶을 우리가 생각하는 것보다 훨씬 많이 바꿔놓은 것 같아요. 예전이랑 비교하면 이제는 어디에 있든 사람들이랑 계속 연락할 수 있는데, 예전엔 그게 훨씬 어려웠어요. 제가 제일 인상 깊게 느끼는 건 쇼핑이나 요금 납부 같은 걸 거의 다 온라인으로 할 수 있어서 시간이 정말 많이 절약된다는 거예요. 동시에 사람들이 예전보다 휴대폰에 좀 더 의존하게 된 것 같기도 해요. 그래도 전체적으로 보면, 적어도 제 경험상으로는 편리함이 단점보다 더 크다고 생각해요.',
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
    answerKo:
      '저희 나라에서는 헬스장에 가든 그냥 밖에서 걷든, 규칙적으로 운동하면서 활동적으로 지내려는 사람들이 많아요. 식습관도 중요한 부분인데, 채소가 많이 들어간 균형 잡힌 식사를 하려고 노력하는 사람들이 많아요. 게다가 특히 나이가 들수록 정기 건강검진도 꽤 흔한 편이에요. 게다가 요즘은 정신 건강에 대한 관심도 커져서 사람들이 휴식을 취하고 스트레스를 관리하는 것에 더 개방적이에요. 그래서 여기서 건강 관리는 이제 운동만이 아니라 좀 더 전반적인 개념이 됐어요.',
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
    answerKo:
      '일주일에 몇 번씩 걷거나 조깅하면서 몸 관리를 하려고 해요. 외식은 되도록 자주 안 하려는 편인데, 집밥이 더 건강하게 느껴지거든요. 최소 7시간은 자는 걸 습관으로 만들었어요, 잠이 부족하면 컨디션이 확실히 나빠지는 걸 느꼈거든요. 제가 제일 좋아하는 건 이 습관들을 꾸준히 지켰을 때 전체적으로 몸이 훨씬 좋아진다는 느낌이에요. 그러다 보니 제 일상적인 선택이 건강에 어떻게 영향을 미치는지 훨씬 더 신경 쓰게 됐어요.',
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
    answerKo:
      '잠깐 생각해볼게요... 몇 년 전 조깅하다가 발목을 꽤 심하게 삔 적이 있어요. 그 후로 거의 한 달 동안 제대로 운동을 못 해서 정말 답답한 경험이었어요. 제일 기억에 남는 건 평소엔 당연하게 여겼던 정상적으로 걷는 것조차 그리워졌다는 거예요. 돌이켜보면 오히려 운동 전에 제대로 스트레칭하는 법을 배웠고, 지금은 매번 꼭 챙겨서 해요.',
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
    answerKo:
      '저는 보통 병원 진료, 미용실, 친구 만남 같은 걸 약속으로 잡아요. 회의 같은 업무 관련 약속도 주중 일정에서 꽤 큰 부분을 차지해요. 게다가 가끔은 차량 정비처럼 미리 예약해야 하는 것들도 약속으로 잡아요. 게다가 실수로 일정이 겹치지 않게 휴대폰에 캘린더를 꼼꼼히 관리하는 편이에요. 그렇게 해서 잊어버리지 않고 모든 걸 챙기고 있어요.',
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
    answerKo:
      '보통 다들 가능한 시간을 찾으려고 친구들한테 먼저 문자를 보내요. 하나의 날짜보다는 몇 가지 옵션을 제안하는 편인데, 그래야 다들 일정에 맞는 걸 찾기 쉽거든요. 아무도 깜빡하지 않게 하루 전에 약속을 다시 확인하는 걸 습관으로 만들었어요. 제가 제일 좋아하는 건 이런저런 조율 없이 계획이 술술 맞춰질 때예요. 그러다 보니 친구들이랑 약속 잡는 게 대체로 꽤 편하게 정리되는 편이에요.',
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
    answerKo:
      '갑자기 열이 나서 급하게 저녁 약속을 취소해야 했던 적이 꽤 생생하게 기억나요. 제가 문자를 보내기 전에 친구가 이미 집을 나선 상태라 특히 곤란한 경험이었어요. 다행히 친구가 이해해줘서 그냥 다음 주로 약속을 다시 잡았어요. 돌이켜보면 갑자기 일이 생기더라도 가능하면 사람들한테 미리 좀 더 알려줘야겠다는 걸 깨달았어요.',
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
