// 페이지 메타데이터에 canonical·og·twitter를 자기 주소 기준으로 채워주는 헬퍼
import type { Metadata } from 'next';
import { seoConfig } from './config';

// 루트 layout의 openGraph/alternates는 자식이 정의하면 통째로 덮이므로 여기서 필요한 값을 다시 채운다.
export function withSeo(path: string, meta: Metadata): Metadata {
  const title = typeof meta.title === 'string' ? meta.title : undefined;
  const description = meta.description ?? undefined;
  const fullTitle = title ? `${title} | ${seoConfig.siteName}` : undefined;

  return {
    ...meta,
    alternates: {
      canonical: path,
      types: { 'application/rss+xml': '/rss.xml' },
    },
    openGraph: {
      type: 'website',
      locale: seoConfig.locale,
      siteName: seoConfig.siteName,
      title: fullTitle,
      description,
      url: path,
    },
    twitter: {
      card: 'summary',
      title: fullTitle,
      description,
    },
  };
}
