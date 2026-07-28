// 롤플레이 유형×시나리오별 모범답안 데이터 — questions.ts의 roleplayTopics 질문을 그대로 재사용
// ⚠️ 답안은 학습용 초안이며 오픽 경험자 검증 필요 (LEARNING.md 참고)

export type RoleplayType = 'request' | 'problem' | 'experience';

export const roleplayTypeInfo: Record<
  RoleplayType,
  { name: string; note: string; slug: RoleplayType }
> = {
  request: {
    name: '유형 ① 정보 요청하기',
    note: '상대에게 궁금한 것을 3~4가지 질문하는 유형',
    slug: 'request',
  },
  problem: {
    name: '유형 ② 문제 설명 + 대안 제시',
    note: '상황을 설명하고 대안 2~3개를 제시하는 유형',
    slug: 'problem',
  },
  experience: {
    name: '유형 ③ 비슷한 경험 말하기',
    note: '"너도 비슷한 경험 있어?"에 과거 경험으로 대응하는 유형',
    slug: 'experience',
  },
};

export type RoleplayQA = {
  type: RoleplayType;
  scenario: string; // URL 슬러그
  scenarioName: string; // 목록에 보여줄 이름
  question: { ko: string; en: string };
  answer: string;
  answerKo: string;
  keyExpressions: string[];
};

export const roleplayQAs: RoleplayQA[] = [
  {
    type: 'request',
    scenario: 'phone',
    scenarioName: '스마트폰',
    question: {
      ko: '친구가 새 스마트폰을 샀어요. 전화해서 궁금한 점을 3~4가지 물어보세요.',
      en: 'Your friend just bought a new smartphone. Call your friend and ask three or four questions about it.',
    },
    answer:
      "Hey, I heard you just got a new phone! I have a few questions about it, if that's okay. First of all, which brand is it, and why did you choose that one over the others? Also, how much did it end up costing you, since I've been thinking about upgrading mine too. On top of that, how's the camera quality? I've heard a lot of newer phones have really improved cameras. Oh, and one more thing — does the battery last a full day for you, because that's honestly my biggest concern with my current phone.",
    answerKo:
      '야, 새 폰 샀다며! 괜찮으면 몇 가지 물어봐도 돼? 우선 어느 브랜드고, 다른 것 대신 왜 그걸 골랐어? 그리고 얼마 줬어, 나도 폰 바꿀까 생각 중이었거든. 그리고 카메라 화질은 어때? 요즘 폰들은 카메라가 많이 좋아졌다고 들었거든. 아 그리고 하나 더 — 배터리는 하루 종일 가? 솔직히 지금 내 폰에서 제일 걱정되는 부분이 그거라서.',
    keyExpressions: ['First of all', 'On top of that', 'Oh, and one more thing'],
  },
  {
    type: 'request',
    scenario: 'hospital',
    scenarioName: '병원 예약',
    question: {
      ko: '병원에 가려고 해요. 전화로 예약에 필요한 질문을 해보세요.',
      en: 'You want to see a doctor. Call the clinic and ask questions to make an appointment.',
    },
    answer:
      "Hi, I'm calling to make an appointment to see a doctor, if possible. Could you tell me what times are available this week? Also, do I need to bring anything specific, like my insurance card or previous medical records? On top of that, about how long is the wait usually, since I have a pretty tight schedule today. Thanks, I'll go ahead and confirm once I hear back from you.",
    answerKo:
      '안녕하세요, 가능하면 진료 예약을 하려고 전화드렸어요. 이번 주에 가능한 시간 좀 알려주실 수 있나요? 그리고 보험증이나 예전 진료기록처럼 따로 챙겨가야 할 게 있을까요? 그리고 오늘 일정이 좀 빡빡한데 보통 대기 시간이 얼마나 되나요? 감사합니다, 답변 주시면 바로 확정할게요.',
    keyExpressions: ['if possible', 'Also', 'On top of that', "I'm calling to"],
  },
  {
    type: 'request',
    scenario: 'travel',
    scenarioName: '여행사',
    question: {
      ko: '여행을 계획 중이에요. 여행사에 전화해 상품에 대해 3~4가지 질문하세요.',
      en: 'You are planning a trip. Call a travel agency and ask three or four questions about the package.',
    },
    answer:
      "Hi, I'm looking into your travel packages and had a few questions. First, what exactly is included in the package, like flights, hotel, and meals? Also, is there any flexibility with the travel dates, since my schedule might change slightly? On top of that, what's your cancellation policy in case something comes up unexpectedly? That's pretty much everything I wanted to check before booking.",
    answerKo:
      '안녕하세요, 여행 상품을 알아보고 있는데 몇 가지 궁금한 게 있어서요. 우선 항공권, 호텔, 식사처럼 패키지에 정확히 뭐가 포함되나요? 그리고 제 일정이 조금 바뀔 수도 있는데 여행 날짜 조정이 가능한가요? 그리고 갑자기 일이 생겼을 때 취소 정책은 어떻게 되나요? 예약 전에 확인하고 싶었던 건 이 정도예요.',
    keyExpressions: ['First', 'Also', 'On top of that', "That's pretty much"],
  },
  {
    type: 'problem',
    scenario: 'phone',
    scenarioName: '스마트폰',
    question: {
      ko: '친구에게 빌린 스마트폰을 고장 냈어요. 상황을 설명하고 대안을 2~3가지 제시하세요.',
      en: 'You broke the smartphone you borrowed from your friend. Explain the situation and offer two or three solutions.',
    },
    answer:
      "Hey, I have something to tell you, and I'm really sorry about this. I accidentally dropped your phone earlier and the screen cracked. I know this is frustrating, so let me suggest a few things. First, I can pay for the full repair cost at the store near my place. Or, if you'd prefer, I could just buy you a replacement screen protector and case for now while we figure out the repair. Actually, another option is that I lend you my old phone temporarily until yours gets fixed. Whatever works best for you, I really want to make this right.",
    answerKo:
      '저기, 할 말이 있는데 정말 미안해. 아까 실수로 네 폰을 떨어뜨려서 화면에 금이 갔어. 짜증 날 거 아는데, 몇 가지 방법을 제안해볼게. 우선 우리 집 근처 매장에서 수리비 전액을 내가 낼게. 아니면 원한다면, 수리하는 동안 일단 액정 보호필름이랑 케이스를 새로 사줄 수도 있어. 아니면 다른 방법으로, 네 폰 고칠 때까지 내 예전 폰을 잠깐 빌려줄 수도 있고. 뭐가 제일 낫든, 정말 제대로 해결하고 싶어.',
    keyExpressions: [
      "I'm really sorry about this",
      'First',
      "Or, if you'd prefer",
      'Whatever works best for you',
      'I have something to tell you',
    ],
  },
  {
    type: 'problem',
    scenario: 'appointment',
    scenarioName: '예약 취소',
    question: {
      ko: '예약 시간에 못 가게 됐어요. 이유를 설명하고 대안을 제시하세요.',
      en: 'You cannot make it to the appointment. Call and explain why, then suggest alternatives.',
    },
    answer:
      "Hi, I'm calling about my appointment today, but something urgent came up and I'm not going to be able to make it. I'm really sorry for the short notice. Would it be possible to reschedule for later this week instead? If that doesn't work, I could also come in early next week, whichever is more convenient for you. I just wanted to let you know as soon as possible instead of just not showing up.",
    answerKo:
      '안녕하세요, 오늘 예약 때문에 전화드렸는데 급한 일이 생겨서 못 갈 것 같아요. 갑자기 말씀드려서 정말 죄송해요. 혹시 이번 주 나중으로 일정을 옮길 수 있을까요? 그게 안 되면 다음 주 초도 괜찮은데, 편하신 쪽으로 말씀해주세요. 그냥 안 나타나는 것보다는 최대한 빨리 알려드리고 싶었어요.',
    keyExpressions: [
      "I'm really sorry for the short notice",
      'Would it be possible to',
      "If that doesn't work",
    ],
  },
  {
    type: 'problem',
    scenario: 'tickets',
    scenarioName: '티켓 문제',
    question: {
      ko: '예매한 티켓에 문제가 생겼어요. 상황을 설명하고 해결 방안을 제시하세요.',
      en: 'The tickets you booked have a problem. Explain the situation and give some options to resolve it.',
    },
    answer:
      "Hi, I think there's a problem with the tickets I booked — it looks like the date on my confirmation doesn't match what I originally selected. Could you check that for me? If it turns out to be a mistake on your end, I'd really appreciate it if you could switch it to the correct date at no extra charge. Or, if that's not possible, a refund would also work for me. I just want to make sure this gets sorted out before the day of the event.",
    answerKo:
      '안녕하세요, 제가 예매한 티켓에 문제가 있는 것 같아요 — 확인서에 있는 날짜가 제가 원래 선택했던 날짜랑 다른 것 같아요. 확인 좀 해주실 수 있나요? 혹시 그쪽 실수라면 추가 비용 없이 정확한 날짜로 바꿔주시면 정말 감사하겠어요. 아니면 그게 안 되면 환불도 괜찮아요. 행사 당일 전에는 꼭 이 문제가 해결됐으면 해서요.',
    keyExpressions: [
      'Could you check that for me',
      'If it turns out to be',
      "Or, if that's not possible",
    ],
  },
  {
    type: 'experience',
    scenario: 'purchase',
    scenarioName: '구매·대여 문제 경험',
    question: {
      ko: '구매하거나 빌린 물건에 문제가 있었던 경험이 있나요? 무슨 일이었고 어떻게 해결했는지 말해주세요.',
      en: 'Have you ever had a problem with something you bought or borrowed? Tell me what happened and how you solved it.',
    },
    answer:
      "Actually, yes, I have a pretty vivid memory of this happening with a laptop I borrowed from a friend a while back. The charger stopped working out of nowhere, and I was pretty worried about how to handle it. What I ended up doing was buying a replacement charger right away and explaining the situation honestly. Looking back, being upfront about it immediately was definitely the right move, because my friend appreciated that I didn't try to hide it.",
    answerKo:
      '네, 사실 예전에 친구한테 빌린 노트북으로 비슷한 일이 있었던 게 꽤 생생하게 기억나요. 갑자기 충전기가 안 되는 거예요, 어떻게 해야 할지 꽤 걱정했었죠. 결국 제가 한 건 바로 충전기를 새로 사고 상황을 솔직하게 설명한 거였어요. 돌이켜보면 바로 솔직하게 말한 게 확실히 옳은 선택이었어요, 친구도 제가 숨기려 하지 않은 걸 고마워했거든요.',
    keyExpressions: [
      'I actually have a pretty vivid memory of this',
      'What I ended up doing was',
      'Looking back',
    ],
  },
  {
    type: 'experience',
    scenario: 'cancel',
    scenarioName: '계획 취소·변경 경험',
    question: {
      ko: '막판에 계획을 취소하거나 바꿔야 했던 경험을 이야기해 주세요.',
      en: 'Tell me about a time you had to cancel or change plans at the last minute.',
    },
    answer:
      'Let me think about that for a second... Actually, I remember having to cancel a weekend trip with friends at the last minute because I suddenly got sick. It was such a frustrating experience because we had already booked everything in advance. I called them right away to explain and apologize, and thankfully they were able to reschedule the trip for a few weeks later. Looking back, I was relieved they understood, and it taught me to always let people know as early as possible whenever plans have to change.',
    answerKo:
      '잠깐 생각해볼게요... 갑자기 아파서 친구들이랑 계획했던 주말 여행을 막판에 취소해야 했던 적이 기억나요. 이미 예약을 다 해둔 상태라 정말 답답한 경험이었어요. 바로 전화해서 설명하고 사과했는데, 다행히 몇 주 뒤로 여행을 다시 잡을 수 있었어요. 돌이켜보면 다들 이해해줘서 다행이었고, 계획이 바뀔 땐 항상 최대한 빨리 알려야 한다는 걸 배웠어요.',
    keyExpressions: ['Let me think about that for a second', 'frustrating', 'Looking back'],
  },
];

export function getRoleplayQA(type: string, scenario: string) {
  return roleplayQAs.find((q) => q.type === type && q.scenario === scenario);
}
