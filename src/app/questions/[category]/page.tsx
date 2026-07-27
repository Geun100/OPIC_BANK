// 질문 카테고리 페이지 — 콤보/돌발/경향/예상 질문을 렌더링
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import {
  comboTopics,
  suddenTopics,
  roleplayTopics,
  trendNotes,
  expectedQuestions,
} from '@/data/questions';
import { SaveButton } from '@/components/save-button';
import { suddenCutInfo, type SuddenTopicKey } from '@/data/sudden-qa';
import { cutInfo, type CutKey, type TopicKey } from '@/data/topic-qa';
import { roleplayQAs, type RoleplayType } from '@/data/roleplay-qa';

const suddenSlugByName: Record<string, SuddenTopicKey> = {
  날씨: 'weather',
  재활용: 'recycling',
  '교통·대중교통': 'transportation',
  '인터넷·기술': 'internet',
  건강: 'health',
  약속: 'appointments',
  은행: 'bank',
  '휴일·명절': 'holiday',
  패션: 'fashion',
  산업: 'industry',
};

const comboSlugByName: Record<string, TopicKey> = {
  집: 'home',
  카페: 'cafe',
  '영화 보기': 'movie',
  '공원 가기': 'park',
  '여행 (국내)': 'travel',
  '걷기·조깅': 'exercise',
  '음악 감상': 'music',
  '공연 보기': 'performance',
  '콘서트 보기': 'concert',
  쇼핑하기: 'shopping',
  캠핑: 'camping',
  '스포츠 관람': 'sports',
  해외여행: 'overseas',
  '집에서 보내는 휴가': 'staycation',
  '해변 가기': 'beach',
  '가구·전자제품': 'furniture',
};

const roleplaySlugByName: Record<string, RoleplayType> = {
  '유형 ① 정보 요청하기 (질문 3~4개 던지기)': 'request',
  '유형 ② 문제 상황 설명 + 대안 제시': 'problem',
  '유형 ③ 비슷한 문제를 겪은 내 경험 말하기': 'experience',
};

const categories = {
  combo: {
    title: '콤보 주제',
    desc: '같은 주제로 묘사 → 습관 → 경험 순서로 이어지는 질문 세트예요. 내 서베이에서 고른 주제만 골라 준비하세요.',
  },
  sudden: {
    title: '돌발 주제',
    desc: '서베이 선택과 무관하게 출제되는 주제예요. 빈출 주제는 기본 답변을 만들어 두는 것이 안전해요.',
  },
  roleplay: {
    title: '롤플레이 (11~13번)',
    desc: '유형이 3가지로 고정된 상황극이에요. ① 질문 3~4개 던지기 → ② 문제 설명 + 대안 제시 → ③ 비슷한 내 경험 순서로 이어지니, 뼈대 문장을 만들어두고 단어만 바꿔 쓰세요.',
  },
  trends: {
    title: '최신 출제 경향',
    desc: '시험 구조와 최근 출제 패턴을 요약했어요.',
  },
  expected: {
    title: '예상 질문 모음',
    desc: '사실상 고정으로 출제되는 질문이에요. 첫 질문인 자기소개는 반드시 준비하세요.',
  },
} as const;

type Category = keyof typeof categories;

export function generateStaticParams() {
  return Object.keys(categories).map((category) => ({ category }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;
  const meta = categories[category as Category];
  if (!meta) return {};
  return {
    title: `오픽 ${meta.title}`,
    description: meta.desc,
  };
}

export default async function QuestionCategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const meta = categories[category as Category];
  if (!meta) notFound();

  return (
    <div className="mx-auto max-w-3xl px-5 py-16">
      <Link href="/questions" className="text-[13px] text-primary hover:underline">
        ← 질문 라이브러리
      </Link>
      <h1 className="mt-3 text-[32px]">{meta.title}</h1>
      <p className="mt-2 text-[15px] text-muted-foreground">{meta.desc}</p>

      <div className="mt-10 flex flex-col gap-8">
        {(category === 'combo' || category === 'sudden' || category === 'roleplay') &&
          (category === 'combo'
            ? comboTopics
            : category === 'sudden'
              ? suddenTopics
              : roleplayTopics
          ).map((topic) => {
            const suddenSlug = category === 'sudden' ? suddenSlugByName[topic.name] : undefined;
            const comboSlug = category === 'combo' ? comboSlugByName[topic.name] : undefined;
            const roleplayType =
              category === 'roleplay' ? roleplaySlugByName[topic.name] : undefined;
            return (
              <section key={topic.name} className="rounded-xl border border-border bg-card p-6">
                <div className="flex items-center justify-between gap-3">
                  <h2 className="text-[20px]">{topic.name}</h2>
                  {suddenSlug && (
                    <div className="flex gap-2">
                      {(Object.keys(suddenCutInfo) as CutKey[]).map((cut) => (
                        <Link
                          key={cut}
                          href={`/questions/sudden/${suddenSlug}/${cut}`}
                          className="rounded-full border border-border px-3 py-1 text-[12px] text-muted-foreground hover:border-primary/40 hover:text-primary"
                        >
                          {suddenCutInfo[cut].name} 답변
                        </Link>
                      ))}
                    </div>
                  )}
                  {comboSlug && (
                    <div className="flex gap-2">
                      {(Object.keys(cutInfo) as CutKey[]).map((cut) => (
                        <Link
                          key={cut}
                          href={`/expressions/topics/${comboSlug}/${cut}`}
                          className="rounded-full border border-border px-3 py-1 text-[12px] text-muted-foreground hover:border-primary/40 hover:text-primary"
                        >
                          {cutInfo[cut].name} 답변
                        </Link>
                      ))}
                    </div>
                  )}
                  {roleplayType && (
                    <div className="flex flex-wrap justify-end gap-2">
                      {roleplayQAs
                        .filter((q) => q.type === roleplayType)
                        .map((q) => (
                          <Link
                            key={q.scenario}
                            href={`/questions/roleplay/${roleplayType}/${q.scenario}`}
                            className="rounded-full border border-border px-3 py-1 text-[12px] text-muted-foreground hover:border-primary/40 hover:text-primary"
                          >
                            {q.scenarioName} 답변
                          </Link>
                        ))}
                    </div>
                  )}
                </div>
                {topic.note && <p className="mt-1 text-[13px] text-primary">{topic.note}</p>}
                <ul className="mt-4 flex flex-col gap-3">
                  {topic.questions.map((q) => (
                    <li key={q.en} className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-[15px]">{q.en}</p>
                        <p className="mt-0.5 text-[13px] text-muted-foreground">{q.ko}</p>
                      </div>
                      <SaveButton id={q.en} type="question" en={q.en} ko={q.ko} />
                    </li>
                  ))}
                </ul>
              </section>
            );
          })}

        {category === 'trends' &&
          trendNotes.map((n) => (
            <section key={n.title} className="rounded-xl border border-border bg-card p-6">
              <h2 className="text-[18px]">{n.title}</h2>
              <p className="mt-2 text-[14px] leading-relaxed text-muted-foreground">{n.body}</p>
            </section>
          ))}

        {category === 'expected' && (
          <section className="rounded-xl border border-border bg-card p-6">
            <ul className="flex flex-col gap-4">
              {expectedQuestions.map((q) => (
                <li key={q.en} className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-[15px]">{q.en}</p>
                    <p className="mt-0.5 text-[13px] text-muted-foreground">{q.ko}</p>
                  </div>
                  <SaveButton id={q.en} type="question" en={q.en} ko={q.ko} />
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>

      <p className="mt-10 rounded-lg bg-muted p-4 text-[12px] text-muted-foreground">
        질문은 공개된 수험 후기 기반으로 정리한 연습용 예시예요. 실제 시험 문항과 다를 수 있어요.
      </p>
    </div>
  );
}
