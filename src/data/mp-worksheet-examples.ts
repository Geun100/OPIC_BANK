// MP 워크시트 예시 데이터 — 콤보 질문 16개 주제를 기존 topic-qa 답변 기반으로 압축한 예시
import type { TopicKey } from './topic-qa';

export type MPWorksheetExample = {
  topic: TopicKey;
  topicName: string;
  mp: string;
  reasonDetail: string;
  feeling: string;
  sentences: string[];
  keywords: string[];
};

export const mpWorksheetExamples: MPWorksheetExample[] = [
  {
    topic: 'home',
    topicName: '집',
    mp: '집에서 제가 제일 좋아하는 자리는 창가 소파예요.',
    reasonDetail:
      '거기 앉아서 하늘 보면서 쉴 수 있어서 좋고, 이사 올 때 가구가 다 갖춰져 있어서 편했어요. 작은 발코니에서 화분도 키우는데 그게 집을 더 생기있게 만들어줘요.',
    feeling: '집에 들어오는 순간 마음이 편안해지는 게 제가 이 집을 제일 좋아하는 이유예요.',
    sentences: [
      "My favorite spot in the house is the couch by the window, because I can see the sky while I'm relaxing there.",
      "The apartment is fully furnished, so I didn't have to buy much furniture when I moved in.",
      'What I like most about my place is that it feels calm the moment I get home.',
    ],
    keywords: [
      'cozy and comfortable',
      'my favorite spot',
      'fully furnished',
      'unwind after a long day',
    ],
  },
  {
    topic: 'cafe',
    topicName: '카페',
    mp: '집 근처에 자주 가는 작은 카페가 있어요.',
    reasonDetail:
      '따뜻한 조명과 잔잔한 음악 덕분에 분위기가 아늑하고, 단골이라 직원분들이 제 주문을 이미 알고 있어요.',
    feeling: '갓 내린 커피 향을 맡는 순간이 제가 이 카페를 제일 좋아하는 부분이에요.',
    sentences: [
      "I'm a regular at a small café near my house.",
      'The place has a cozy vibe with warm lighting and quiet music.',
      'Honestly, the smell of freshly brewed coffee is my favorite part of walking in.',
    ],
    keywords: ['have a cozy vibe', 'be a regular at', 'freshly brewed coffee'],
  },
  {
    topic: 'movie',
    topicName: '영화',
    mp: '저는 액션 영화의 열렬한 팬이에요.',
    reasonDetail:
      '손에 땀을 쥐게 하는 전개를 좋아하고, 반전이 있는 영화면 더 볼 만한 가치가 있다고 느껴요.',
    feeling: '최근 본 영화 하나는 스토리와 연기가 다 좋아서 주변 사람들한테 강력 추천했어요.',
    sentences: [
      "I'm a huge fan of action movies.",
      'The movie kept me on the edge of my seat the whole time.',
      'I highly recommend it because the plot twist really surprised me.',
    ],
    keywords: [
      'a huge fan of',
      'keep me on the edge of my seat',
      'the plot twist',
      'highly recommend',
    ],
  },
  {
    topic: 'travel',
    topicName: '국내여행',
    mp: '제가 갔던 여행 중 가장 기억에 남는 건 제주도 여행이에요.',
    reasonDetail:
      '숨막히게 아름다운 해안 풍경을 보면서 여기저기 걸어다니며 분위기를 만끽했고, 잘 알려지지 않은 작은 식당도 발견했어요.',
    feeling: '날씨까지 완벽해서 정말 재충전이 되는 여행이었어요.',
    sentences: [
      'The most memorable trip I took was to Jeju Island.',
      'I love walking around and soaking up the atmosphere.',
      'We found a small restaurant off the beaten path, and traveling like that really helps me recharge my batteries.',
    ],
    keywords: [
      'a memorable trip',
      'soak up the atmosphere',
      'off the beaten path',
      'recharge my batteries',
    ],
  },
  {
    topic: 'exercise',
    topicName: '운동',
    mp: '저는 주로 동네에서 조깅이나 걷기를 해요.',
    reasonDetail:
      '무리하지 않고 제 페이스대로 운동하는 걸 좋아하고, 바빠도 짧게라도 걷는 시간을 만들려고 해요.',
    feeling: '근육을 키우는 것보다 긴 하루 끝에 머리를 식히는 게 저한테는 더 큰 목적이에요.',
    sentences: [
      'I go jogging or walking around my neighborhood to keep myself in shape.',
      'I enjoy exercising at my own pace instead of pushing myself too hard.',
      "Honestly, it's more about helping me clear my head after a long day.",
    ],
    keywords: ['keep myself in shape', 'at my own pace', 'clear my head'],
  },
  {
    topic: 'park',
    topicName: '공원',
    mp: '집 근처에 제가 자주 가는 공원이 있어요.',
    reasonDetail:
      '울창한 나무들 덕분에 걷기만 해도 상쾌하고, 평일엔 붐비지 않아서 번잡함에서 벗어나기 좋아요.',
    feeling: '연못 근처 벤치에 잠깐 앉아있는 시간이 저한테는 좋은 재충전이 돼요.',
    sentences: [
      "There's a park near my house that I often visit, especially in the evening.",
      "It's full of lush green trees, so just walking there feels refreshing.",
      "It's a great place to escape the hustle and bustle of the city.",
    ],
    keywords: ['lush green trees', 'escape the hustle and bustle', 'take a stroll'],
  },
  {
    topic: 'performance',
    topicName: '공연',
    mp: '저는 라이브 공연 보러 가는 걸 정말 좋아해요, 특히 뮤지컬이나 댄스 공연이요.',
    reasonDetail:
      '화면으로 보는 것과 달리 공연장 전체에 퍼지는 에너지를 직접 느낄 수 있어서 좋아해요.',
    feeling:
      '예전에 본 공연 하나는 결말이 너무 강렬해서 관객 전체가 기립박수를 쳤던 게 아직도 기억나요.',
    sentences: [
      'I really enjoy going to live performances, especially musicals and dance shows.',
      'Watching it in person is completely different from watching it on screen.',
      'The ending was so powerful that the whole audience gave a standing ovation.',
    ],
    keywords: ['get goosebumps', 'a standing ovation', 'once in a lifetime'],
  },
  {
    topic: 'concert',
    topicName: '콘서트',
    mp: '작년에 제가 제일 좋아하는 가수 콘서트에 갔는데 아직도 최고의 추억 중 하나예요.',
    reasonDetail: '관객 전체가 계속 따라 부르고 있어서 저희도 공연의 일부가 된 느낌이 들었어요.',
    feeling: '티켓이 좀 비쌌지만 돈이 하나도 안 아까울 정도로 잊을 수 없는 밤이었어요.',
    sentences: [
      "Last year, I went to a concert of my favorite singer, and it's still one of my best memories.",
      'Everyone in the crowd was singing along the whole time, so it felt like we were part of the show.',
      'It was worth every penny — honestly, an unforgettable night.',
    ],
    keywords: ['sing along', 'worth every penny', 'an unforgettable night'],
  },
  {
    topic: 'shopping',
    topicName: '쇼핑',
    mp: '저는 딱히 살 게 없어도 아이쇼핑하는 걸 좋아해요.',
    reasonDetail:
      '당장 뭘 사야 한다는 부담 없이 그냥 둘러보는 걸 좋아하고, 입어보는 게 좋아서 온라인보다 매장에 직접 가요.',
    feeling: '제가 정말 필요했던 걸 저렴하게 잘 사는 순간이 쇼핑에서 제일 좋은 부분이에요.',
    sentences: [
      "I enjoy window shopping even when I don't need to buy anything.",
      'I like trying things on, so I usually go to the store instead of shopping online.',
      'Finding something I actually needed at a great deal is my favorite part of shopping.',
    ],
    keywords: ['window shopping', 'browse around', 'a great deal', 'try something on'],
  },
  {
    topic: 'music',
    topicName: '음악 감상',
    mp: '요즘 저는 인디 음악에 푹 빠져 있어요.',
    reasonDetail:
      '상황별로 플레이리스트를 따로 만드는 편인데, 일할 때 듣는 것과 잠들기 전 듣는 게 달라요.',
    feeling:
      '가사가 제가 겪고 있는 일이랑 맞아떨어질 때 특히 와닿아서 음악이 제 일상에서 큰 부분을 차지해요.',
    sentences: [
      "I've been really into indie music lately.",
      'I usually make different playlists depending on the situation, like one for work and one before bed.',
      "It really hits home when the lyrics match exactly what I'm going through.",
    ],
    keywords: ["I've been really into", 'hits home', 'a big part of my day'],
  },
  {
    topic: 'camping',
    topicName: '캠핑',
    mp: '저는 보통 도시에서 멀지 않은 호숫가나 산 근처로 캠핑을 가요.',
    reasonDetail:
      '텐트를 치고 작은 모닥불을 피운 다음 늦게까지 그 주변에서 쉬는데, 모닥불 냄새와 자연의 소리가 일상이랑 완전히 다른 느낌을 줘요.',
    feeling:
      '밤에 별이 선명하게 보이는 것도 도시에서는 못 보는 거라, 갈 때마다 상쾌한 도피처처럼 느껴져요.',
    sentences: [
      'I usually go camping near a lake or in the mountains, not too far from the city.',
      'I set up a tent and build a small campfire, then just relax there until late.',
      "On top of that, the stars are so clear at night, which you just can't see in the city.",
    ],
    keywords: ['set up a tent', 'on top of that', 'a refreshing escape'],
  },
  {
    topic: 'sports',
    topicName: '스포츠 관람',
    mp: '저는 축구 보는 걸 정말 좋아하는데, 특히 강팀끼리 붙는 큰 경기가 있을 때요.',
    reasonDetail:
      '라이브로 보는 걸 제일 좋아하는 이유는 분위기 때문인데, 관중 전체가 다 같이 경기에 몰입하거든요.',
    feeling: '마지막 순간까지 접전인 경기가 저한테는 스포츠 관람을 제일 흥미롭게 만드는 요소예요.',
    sentences: [
      'I really enjoy watching soccer, especially when two strong teams are playing.',
      'What I love most about watching it live is the atmosphere — the whole crowd gets into the game together.',
      'A close match that goes down to the last minute is what makes it so exciting for me.',
    ],
    keywords: ['the atmosphere', 'get into the game', 'down to the last minute'],
  },
  {
    topic: 'overseas',
    topicName: '해외여행',
    mp: '제가 갔던 해외여행 중 가장 기억에 남는 건 일본 여행이에요.',
    reasonDetail:
      '비행 시간이 그렇게 길지 않은데도 일상 풍경이 완전히 다르게 느껴졌고, 주요 관광지에서 좀 떨어진 조용한 동네에 묵어서 여행이 더 여유로웠어요.',
    feeling: '한 번도 안 먹어본 현지 음식을 먹어보는 게 여행에서 제일 좋았던 부분이었어요.',
    sentences: [
      'The most memorable overseas trip I took was to Japan.',
      "It's a fairly short flight away, but everything felt completely different from my daily life.",
      'Trying local food I had never had before was honestly my favorite part of the trip.',
    ],
    keywords: ['a fairly short flight away', 'off the beaten path', 'try something new'],
  },
  {
    topic: 'staycation',
    topicName: '집에서 보내는 휴가',
    mp: '휴가인데 집에 있을 땐, 완전히 속도를 늦추는 기회로 삼아요.',
    reasonDetail:
      '알람 없이 어떤 일정에도 안 맞춰도 되고, 밀린 드라마를 보거나 평소엔 시간 없어서 못 하는 요리를 해요.',
    feeling:
      '여행 갈 때 드는 추가 비용 없이도 여전히 휴가 기분을 느낄 수 있어서 제가 제일 좋아하는 재충전 방법 중 하나예요.',
    sentences: [
      'When I have a staycation, I take it as a chance to slow down completely.',
      "I don't set an alarm or follow any schedule — I just catch up on shows or cook something I don't usually have time for.",
      'It still feels like a vacation, without the extra cost of traveling.',
    ],
    keywords: ['slow down completely', 'without a strict schedule', 'surprisingly restorative'],
  },
  {
    topic: 'beach',
    topicName: '해변',
    mp: '제가 제일 좋아하는 해변은 부산에 있어요.',
    reasonDetail:
      '백사장이 길게 펼쳐져 있어서 여름에도 그렇게 붐비지 않고, 물도 잔잔하고 맑은 편이에요.',
    feeling:
      '파도 소리만 들어도 도착하는 순간 마음이 편안해져서 매년 여름 적어도 한 번은 가려고 해요.',
    sentences: [
      'My favorite beach is in Busan.',
      "The sandy shore stretches out for a long way, so it's not too crowded even in summer.",
      'Just hearing the waves makes me feel relaxed the moment I get there.',
    ],
    keywords: ['right along the coast', 'feel relaxed', 'at least once a year'],
  },
  {
    topic: 'furniture',
    topicName: '가구·전자제품',
    mp: '저희 집엔 화려한 가구보다는 단순하고 실용적인 가구가 대부분이에요.',
    reasonDetail:
      '전자제품은 노트북, TV, 스피커 정도가 있는데 다 매일 쓰는 것들이고, 케이블이랑 충전기도 정리해두는 편이에요.',
    feeling: '다 미니멀해서 공간이 답답하지 않은 게 제가 제일 좋아하는 부분이에요.',
    sentences: [
      'I mostly have simple, functional furniture rather than anything flashy.',
      'I try to keep cables and chargers organized, since a messy desk stresses me out.',
      'What I like most is that everything stays minimal, so the room never feels cramped.',
    ],
    keywords: ['simple, functional furniture', 'keep cables organized', 'stands out'],
  },
];
