// 가이드 3 — 등급 체계 설명
import type { Metadata } from 'next';
import Link from 'next/link';
import { GuideArticle } from '@/components/guide-article';

export const metadata: Metadata = {
  title: '오픽 등급 체계 — IM, IH, AL 차이',
  description:
    '오픽 등급이 어떻게 나뉘는지, IM·IH·AL이 각각 어떤 수준인지, 취업에는 보통 어떤 등급이 필요한지 정리했습니다.',
};

const grades = [
  { grade: 'NL · NM · NH', level: 'Novice', desc: '단어·암기 문장 수준의 초보 단계' },
  { grade: 'IL', level: 'Intermediate Low', desc: '간단한 문장으로 익숙한 주제를 말할 수 있음' },
  {
    grade: 'IM1 · IM2 · IM3',
    level: 'Intermediate Mid',
    desc: '일상 주제를 문장으로 이어 말할 수 있음. 많은 기업의 최소 요건 구간',
    highlight: true,
  },
  {
    grade: 'IH',
    level: 'Intermediate High',
    desc: '예상 못 한 질문에도 당황하지 않고 설명·비교 가능. 대기업 선호 구간',
    highlight: true,
  },
  {
    grade: 'AL',
    level: 'Advanced Low',
    desc: '경험·의견을 구체적 근거와 함께 유창하게 전개. 어학 우대 최상위 구간',
    highlight: true,
  },
];

export default function Page() {
  return (
    <GuideArticle
      step="STEP 3"
      title="등급 체계 (IM · IH · AL)"
      intro="오픽 등급은 Novice부터 Advanced까지 이어지는 말하기 숙련도 단계예요."
      prev={{ href: '/guide/exam-process', label: '시험 진행 방식' }}
    >
      <section>
        <h2>등급표</h2>
        <div className="mt-3 overflow-x-auto">
          <table className="w-full border-collapse text-[14px]">
            <thead>
              <tr className="border-b border-border text-left text-muted-foreground">
                <th className="py-2 pr-4 font-normal">등급</th>
                <th className="py-2 pr-4 font-normal">단계</th>
                <th className="py-2 font-normal">수준</th>
              </tr>
            </thead>
            <tbody>
              {grades.map((g) => (
                <tr
                  key={g.grade}
                  className={`border-b border-border ${g.highlight ? 'bg-accent/40' : ''}`}
                >
                  <td className="py-2.5 pr-4 whitespace-nowrap font-medium">{g.grade}</td>
                  <td className="py-2.5 pr-4 whitespace-nowrap text-muted-foreground">{g.level}</td>
                  <td className="py-2.5">{g.desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      <section>
        <h2>목표 등급은 어떻게 정하나요?</h2>
        <ul>
          <li>
            <strong>IL ~ IM2</strong> (권장 난이도 3~4) — 지원 자격 요건 충족이 목표라면. 기본
            의사소통, 일상 주제를 안정적으로 설명하는 데 집중.
          </li>
          <li>
            <strong>IM3 ~ IH</strong> (권장 난이도 4~5) — 서류에서 어학으로 감점당하지 않는 것이
            목표라면. 경험을 에피소드로 확장하고 논리 전개를 강화.
          </li>
          <li>
            <strong>IH ~ AL</strong> (권장 난이도 5~6) — 어학 우대를 노린다면. 복잡한 상황 해결과
            의견 제시까지 완성도 있게 답변할 수 있어야 함.
          </li>
        </ul>
        <p className="mt-3">
          목표 등급을 정했다면, 그에 맞는 서베이·난이도 전략을{' '}
          <Link href="/survey" className="text-primary hover:underline">
            서베이 추천
          </Link>
          에서 받아보세요.
        </p>
      </section>
    </GuideArticle>
  );
}
