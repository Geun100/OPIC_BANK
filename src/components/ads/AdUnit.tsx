'use client';

import { useEffect, useRef } from 'react';

interface AdUnitProps {
  slot: string; // 애드센스 광고 단위 ID (AdSense 대시보드에서 생성)
  format?: 'auto' | 'fluid' | 'rectangle';
  className?: string;
}

/**
 * 인피드 광고 단위.
 * - 콘텐츠 사이에 자연스럽게 삽입되는 형태
 * - NEXT_PUBLIC_GOOGLE_ADSENSE_ID 와 slot prop이 없으면 아무것도 렌더하지 않음
 * - 개발 환경에서는 옅은 점선 박스로 위치 확인
 */
export function AdUnit({ slot, format = 'auto', className = '' }: AdUnitProps) {
  const adRef = useRef<HTMLModElement>(null);
  const clientId = process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_ID;
  const isDev = process.env.NODE_ENV === 'development';

  useEffect(() => {
    if (!clientId || !slot || isDev) return;
    try {
      const w = window as Window & { adsbygoogle?: unknown[] };
      (w.adsbygoogle = w.adsbygoogle || []).push({});
    } catch {
      // 중복 push 등 무시
    }
  }, [clientId, slot, isDev]);

  // 개발 환경: 광고 위치를 눈에 띄게 표시 (배포 시엔 숨김)
  if (isDev) {
    return (
      <div
        className={`flex items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 py-4 text-xs text-gray-400 ${className}`}
        style={{ minHeight: 80 }}
      >
        광고 단위 | slot: {slot || '(미설정)'}
      </div>
    );
  }

  // 슬롯 ID 또는 Publisher ID 없으면 아무것도 렌더하지 않음
  if (!clientId || !slot) return null;

  return (
    <div className={className}>
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client={clientId}
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive="true"
      />
    </div>
  );
}
