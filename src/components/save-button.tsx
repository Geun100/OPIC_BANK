// 표현/질문을 나만의 노트에 저장·해제하는 별 토글 버튼
'use client';

import { useEffect, useState } from 'react';
import { Star } from 'lucide-react';
import { isSaved, toggleNote, onNotesChange, type NoteItem } from '@/lib/notes';

type Props = Omit<NoteItem, 'savedAt'>;

export function SaveButton(props: Props) {
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    setSaved(isSaved(props.id));
    return onNotesChange(() => setSaved(isSaved(props.id)));
  }, [props.id]);

  return (
    <button
      type="button"
      aria-label={saved ? '노트에서 제거' : '노트에 저장'}
      onClick={() => setSaved(toggleNote(props))}
      className="shrink-0 rounded-full p-1.5 transition-colors hover:bg-accent"
    >
      <Star
        className={saved ? 'size-4 fill-primary text-primary' : 'size-4 text-muted-foreground'}
      />
    </button>
  );
}
