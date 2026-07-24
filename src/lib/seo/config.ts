// OPIC Bank 사이트 전역 SEO 설정
import { SeoConfigProps } from '@/types/seo';

// 사이트 기본 SEO 설정
export const seoConfig: SeoConfigProps = {
  defaultTitle: 'OPIC Bank — 오픽 표현 아카이브',
  titleTemplate: '%s | OPIC Bank',
  defaultDescription:
    '오픽에 필요한 모든 표현을 한곳에 모아둔 아카이브. 표현·필러·만능 문장·예상 질문을 검색하고 나만의 노트로 저장하세요.',
  defaultKeywords:
    '오픽, OPIc, 오픽 표현, 오픽 필러, 오픽 만능 문장, 오픽 서베이, 오픽 등급, 오픽 IM, 오픽 IH, 오픽 AL, 오픽 질문, 오픽 돌발주제',
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  siteName: 'OPIC Bank',
  defaultImage: '/og-image.jpg',
  twitterUsername: '@opicbank',
  language: 'ko',
  locale: 'ko_KR',
};

// 페이지별 기본 SEO 설정들
export const pageDefaults = {
  home: {
    title: '오픽 표현, 검색 몇 초면 끝나요',
    description: '필요한 메뉴 하나만 고르면, 그 안에서 바로 찾아볼 수 있어요.',
    keywords: '오픽 표현, 오픽 필러, 오픽 만능 문장, 오픽 준비, 오픽 입문, 오픽 공부법',
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
      name: 'OPIC Bank',
    },
  },
};
