// OPIc Bank 사이트 전역 SEO 설정
import { SeoConfigProps } from '@/types/seo';

// 사이트 기본 SEO 설정
export const seoConfig: SeoConfigProps = {
  defaultTitle: 'OPIc Bank — 오픽이 처음인 사람을 위한 가장 쉬운 시작',
  titleTemplate: '%s | OPIc Bank',
  defaultDescription:
    '오픽 시험 소개부터 백그라운드 서베이 추천, 질문·표현 라이브러리까지. 오픽을 처음 준비하는 사람을 위한 학습 가이드.',
  defaultKeywords:
    '오픽, OPIc, 오픽 처음, 오픽 서베이, 오픽 등급, 오픽 IM, 오픽 IH, 오픽 AL, 오픽 표현, 오픽 질문, 오픽 돌발주제',
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  siteName: 'OPIc Bank',
  defaultImage: '/og-image.jpg',
  twitterUsername: '@opicbank',
  language: 'ko',
  locale: 'ko_KR',
};

// 페이지별 기본 SEO 설정들
export const pageDefaults = {
  home: {
    title: '오픽이 처음인 사람을 위한 가장 쉬운 시작',
    description:
      '시험 구조 이해부터 유리한 서베이 조합 추천, 질문·표현 라이브러리까지 한곳에서 준비하세요.',
    keywords: '오픽 독학, 오픽 준비, 오픽 입문, 오픽 공부법',
  },
  auth: {
    title: '로그인 / 회원가입',
    description: '나만의 노트에 표현과 질문을 저장하려면 로그인하세요',
    keywords: '로그인, 회원가입, 오픽 노트',
  },
  payment: {
    title: '결제 시스템',
    description: '결제 기능은 현재 제공하지 않습니다',
    keywords: '결제',
  },
} as const;

// Open Graph 기본 이미지 설정
export const defaultOpenGraphImages = {
  home: '/images/og/home.jpg',
  auth: '/images/og/auth.jpg',
  payment: '/images/og/payment.jpg',
  default: '/images/og/default.jpg',
};

// 구조화된 데이터 템플릿들
export const structuredDataTemplates = {
  organization: {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: seoConfig.siteName,
    url: seoConfig.siteUrl,
    logo: `${seoConfig.siteUrl}/logo.png`,
    description: seoConfig.defaultDescription,
    sameAs: [],
  },

  website: {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: seoConfig.siteName,
    url: seoConfig.siteUrl,
    description: seoConfig.defaultDescription,
    inLanguage: seoConfig.language,
  },

  softwareApplication: {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: seoConfig.siteName,
    description: seoConfig.defaultDescription,
    url: seoConfig.siteUrl,
    applicationCategory: 'EducationalApplication',
    operatingSystem: 'Any',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'KRW',
    },
    author: {
      '@type': 'Organization',
      name: 'OPIc Bank',
    },
  },
};
