// 연락처 페이지 — 문의 안내
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '연락처',
  description: 'OPIC Bank 운영자에게 문의하는 방법을 안내합니다.',
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-2xl px-5 py-16">
      <h1 className="text-[32px]">연락처</h1>
      <div className="mt-8 flex flex-col gap-6 text-[15px] leading-relaxed text-muted-foreground">
        <p>콘텐츠 오류 제보, 저작권 관련 문의, 광고·제휴 문의 등은 아래 이메일로 보내주세요.</p>
        <p>
          이메일:{' '}
          <a href="mailto:hellohorong@gmail.com" className="text-primary hover:underline">
            hellohorong@gmail.com
          </a>
        </p>
        <p>영업일 기준 2~3일 이내 답변드립니다.</p>
      </div>
    </div>
  );
}
