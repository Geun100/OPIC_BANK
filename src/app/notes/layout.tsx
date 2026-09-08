// 나만의 노트 페이지 메타데이터 — page.tsx가 클라이언트 컴포넌트라 여기서 별도로 지정
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '나만의 노트 — 저장한 표현·질문 복습',
  description:
    '표현 라이브러리·질문 라이브러리에서 별표로 저장한 표현과 질문을 한곳에 모아 암기카드로 복습하는 페이지입니다.',
};

export default function NotesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
