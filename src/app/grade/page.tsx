// AL·IH 표현집 — 목표 등급별 고득점 표현 탭
import type { Metadata } from 'next';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  ihExpressions,
  alExpressions,
  highScorePatterns,
  extensionExpressions,
} from '@/data/grade';
import type { Expression } from '@/data/expressions';
import { SaveButton } from '@/components/save-button';

export const metadata: Metadata = {
  title: '오픽 AL·IH 표현집 — 고득점 표현 모음',
  description:
    'IH 필수 표현, AL 고급 표현, 고득점 문장 패턴, 자연스러운 확장 표현. 목표 등급별로 골라 학습하세요.',
};

function ExpressionList({ items }: { items: Expression[] }) {
  return (
    <ul className="mt-6 flex flex-col gap-4">
      {items.map((item) => (
        <li
          key={item.en}
          className="flex items-start justify-between gap-3 rounded-xl border border-border bg-card p-5"
        >
          <div>
            <p className="text-[16px] font-medium">{item.en}</p>
            <p className="mt-0.5 text-[13px] text-muted-foreground">{item.ko}</p>
            {item.example && (
              <p className="mt-1 text-[13px] italic text-secondary-foreground/70">{item.example}</p>
            )}
          </div>
          <SaveButton id={item.en} type="expression" en={item.en} ko={item.ko} />
        </li>
      ))}
    </ul>
  );
}

export default function GradePage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-16">
      <p className="text-[13px] font-medium tracking-wide text-primary">AL · IH</p>
      <h1 className="mt-2 text-[34px]">AL·IH 표현집</h1>
      <p className="mt-3 text-[16px] text-muted-foreground">
        같은 내용도 어떤 표현으로 말하느냐에 따라 등급이 달라져요. 목표 등급 탭에서 필요한 표현만
        골라 노트에 저장하세요.
      </p>
      <Tabs defaultValue="ih" className="mt-8">
        <TabsList>
          <TabsTrigger value="ih">IH 필수</TabsTrigger>
          <TabsTrigger value="al">AL 고급</TabsTrigger>
          <TabsTrigger value="patterns">고득점 패턴</TabsTrigger>
          <TabsTrigger value="extensions">확장 표현</TabsTrigger>
        </TabsList>
        <TabsContent value="ih">
          <ExpressionList items={ihExpressions} />
        </TabsContent>
        <TabsContent value="al">
          <ExpressionList items={alExpressions} />
        </TabsContent>
        <TabsContent value="patterns">
          <ExpressionList items={highScorePatterns} />
        </TabsContent>
        <TabsContent value="extensions">
          <ExpressionList items={extensionExpressions} />
        </TabsContent>
      </Tabs>
    </div>
  );
}
