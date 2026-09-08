// MP 워크시트 페이지 메타데이터 — page.tsx가 클라이언트 컴포넌트라 여기서 별도로 지정
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'MP 워크시트 — 답변 구조 정리 도구',
  description:
    '주제별로 Main Point → Reason·Detail → Feeling 순서로 내 답변을 한 줄씩 정리하고, 실제로 말할 영어 문장까지 채워보는 오픽 답변 구조화 도구입니다.',
};

export default function MpWorksheetLayout({ children }: { children: React.ReactNode }) {
  return children;
}
