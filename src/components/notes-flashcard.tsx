'use client';

import { useState, useEffect } from 'react';
import { NoteItem, removeNote } from '@/lib/notes';
import { ArrowLeft, ArrowRight, RotateCw, Shuffle, Trash2, HelpCircle } from 'lucide-react';

type Props = {
  items: NoteItem[];
};

export function NotesFlashcard({ items }: Props) {
  const [cardList, setCardList] = useState<NoteItem[]>(items);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [mode, setMode] = useState<'ko-to-en' | 'en-to-ko'>('ko-to-en');
  const [filterType, setFilterType] = useState<'all' | 'expression' | 'question' | 'memo'>('all');

  useEffect(() => {
    let filtered = items;
    if (filterType === 'expression') filtered = items.filter((n) => n.type === 'expression');
    if (filterType === 'question') filtered = items.filter((n) => n.type === 'question');
    if (filterType === 'memo') filtered = items.filter((n) => n.type === 'memo');
    setCardList(filtered);
    setCurrentIndex(0);
    setIsFlipped(false);
  }, [items, filterType]);

  if (cardList.length === 0) {
    return (
      <div className="mt-6 rounded-xl border border-dashed border-border p-10 text-center">
        <p className="text-[14px] text-muted-foreground">선택한 카테고리에 복습할 카드가 없어요.</p>
      </div>
    );
  }

  const currentCard = cardList[currentIndex] ?? cardList[0];

  const handleNext = () => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev + 1) % cardList.length);
  };

  const handlePrev = () => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev - 1 + cardList.length) % cardList.length);
  };

  const handleShuffle = () => {
    setIsFlipped(false);
    const shuffled = [...cardList].sort(() => Math.random() - 0.5);
    setCardList(shuffled);
    setCurrentIndex(0);
  };

  const currentFrontText = mode === 'ko-to-en' ? currentCard.ko : currentCard.en;
  const currentBackText = mode === 'ko-to-en' ? currentCard.en : currentCard.ko;
  const frontLabel = mode === 'ko-to-en' ? '한국어 (의미)' : 'English (표현/질문)';
  const backLabel = mode === 'ko-to-en' ? 'English (표현/질문)' : '한국어 (의미)';

  return (
    <div className="mt-6 flex flex-col gap-5">
      {/* 카드 복습 설정 컨트롤 */}
      <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-border bg-card p-4">
        {/* 필터 탭 */}
        <div className="flex items-center gap-1 rounded-lg bg-muted p-1 text-[13px]">
          <button
            type="button"
            onClick={() => setFilterType('all')}
            className={`rounded-md px-3 py-1 font-medium transition-colors ${
              filterType === 'all'
                ? 'bg-background shadow-sm text-foreground'
                : 'text-muted-foreground'
            }`}
          >
            전체 ({items.length})
          </button>
          <button
            type="button"
            onClick={() => setFilterType('expression')}
            className={`rounded-md px-3 py-1 font-medium transition-colors ${
              filterType === 'expression'
                ? 'bg-background shadow-sm text-foreground'
                : 'text-muted-foreground'
            }`}
          >
            표현 ({items.filter((n) => n.type === 'expression').length})
          </button>
          <button
            type="button"
            onClick={() => setFilterType('question')}
            className={`rounded-md px-3 py-1 font-medium transition-colors ${
              filterType === 'question'
                ? 'bg-background shadow-sm text-foreground'
                : 'text-muted-foreground'
            }`}
          >
            질문 ({items.filter((n) => n.type === 'question').length})
          </button>
          <button
            type="button"
            onClick={() => setFilterType('memo')}
            className={`rounded-md px-3 py-1 font-medium transition-colors ${
              filterType === 'memo'
                ? 'bg-background shadow-sm text-foreground'
                : 'text-muted-foreground'
            }`}
          >
            메모 ({items.filter((n) => n.type === 'memo').length})
          </button>
        </div>

        <div className="flex items-center gap-2">
          {/* 뒤집기 모드 변경 */}
          <button
            type="button"
            onClick={() => setMode((m) => (m === 'ko-to-en' ? 'en-to-ko' : 'ko-to-en'))}
            className="flex items-center gap-1.5 rounded-lg border border-border px-3 py-1.5 text-[12px] font-medium transition-colors hover:bg-accent"
          >
            <RotateCw className="size-3.5 text-primary" />
            {mode === 'ko-to-en' ? '한 → 영 모드' : '영 → 한 모드'}
          </button>

          {/* 셔플 버튼 */}
          <button
            type="button"
            onClick={handleShuffle}
            className="flex items-center gap-1.5 rounded-lg border border-border px-3 py-1.5 text-[12px] font-medium transition-colors hover:bg-accent"
          >
            <Shuffle className="size-3.5 text-primary" />
            순서 섞기
          </button>
        </div>
      </div>

      {/* 플래시카드 메인 영역 */}
      <div className="relative flex flex-col items-center">
        {/* 카드 진행도 Indicator */}
        <div className="mb-2 text-[13px] font-medium text-muted-foreground">
          {currentIndex + 1} / {cardList.length}
        </div>

        {/* Flip Card Container */}
        <div
          onClick={() => setIsFlipped((f) => !f)}
          className="group cursor-pointer select-none w-full min-h-[260px] rounded-2xl border-2 border-primary/30 bg-gradient-to-b from-card to-muted/30 p-8 shadow-md transition-all hover:border-primary hover:shadow-lg flex flex-col justify-between"
        >
          {/* Top Info Bar */}
          <div className="flex items-center justify-between text-[12px] text-muted-foreground">
            <span className="rounded-full bg-primary-subdued/50 px-2.5 py-0.5 font-medium text-primary-press">
              {isFlipped ? backLabel : frontLabel}
            </span>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                removeNote(currentCard.id);
              }}
              aria-label="노트에서 삭제"
              className="rounded-full p-1 hover:bg-accent hover:text-destructive"
            >
              <Trash2 className="size-4" />
            </button>
          </div>

          {/* Center Card Content */}
          <div className="my-6 text-center">
            <p
              className={`text-[20px] font-medium leading-relaxed transition-all ${isFlipped ? 'text-primary font-semibold' : 'text-foreground'}`}
            >
              {isFlipped ? currentBackText : currentFrontText}
            </p>
          </div>

          {/* Bottom Flip Hint */}
          <div className="flex items-center justify-center gap-1 text-[12px] text-muted-foreground">
            <HelpCircle className="size-3.5 text-primary" />
            <span>
              {isFlipped ? '카드를 클릭하면 앞면으로 돌아가요' : '카드를 클릭하면 정답을 확인해요'}
            </span>
          </div>
        </div>

        {/* 이전 / 다음 탐색 버튼 */}
        <div className="mt-6 flex items-center gap-4">
          <button
            type="button"
            onClick={handlePrev}
            className="flex items-center gap-1.5 rounded-full border border-border bg-card px-5 py-2.5 text-[14px] font-medium transition-all hover:border-primary hover:bg-primary-subdued/20"
          >
            <ArrowLeft className="size-4" />
            이전 카드
          </button>

          <button
            type="button"
            onClick={() => setIsFlipped((f) => !f)}
            className="rounded-full bg-muted px-4 py-2.5 text-[13px] font-medium text-foreground transition-all hover:bg-accent"
          >
            {isFlipped ? '앞면 보기' : '뒤집기 (정답)'}
          </button>

          <button
            type="button"
            onClick={handleNext}
            className="flex items-center gap-1.5 rounded-full bg-primary px-5 py-2.5 text-[14px] font-medium text-primary-foreground transition-all hover:bg-primary-press"
          >
            다음 카드
            <ArrowRight className="size-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
