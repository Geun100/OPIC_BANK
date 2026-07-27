// RSS 피드 라우트 — 질문/표현 콘텐츠를 RSS 2.0 형식으로 노출
import { NextResponse } from 'next/server';
import { generateRssFeed } from '@/lib/seo/sitemap';

export async function GET() {
  try {
    const rss = generateRssFeed();

    return new NextResponse(rss, {
      status: 200,
      headers: {
        'Content-Type': 'application/xml',
        'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate=86400',
      },
    });
  } catch (error) {
    console.error('RSS 피드 생성 오류:', error);

    return new NextResponse('RSS 피드 생성 중 오류가 발생했습니다.', {
      status: 500,
      headers: {
        'Content-Type': 'text/plain',
      },
    });
  }
}

export const dynamic = 'force-dynamic';
