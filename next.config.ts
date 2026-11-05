import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // 주제 허브로 통합되기 전 개별 상세 URL을 새 허브(앵커 포함)로 영구 이동 — 기존 링크·색인 승계
  async redirects() {
    return [
      {
        source: '/expressions/topics/:topic/:cut',
        destination: '/expressions/topics/:topic#:cut',
        permanent: true,
      },
      {
        source: '/questions/sudden/:topic/:cut',
        destination: '/questions/sudden/:topic#:cut',
        permanent: true,
      },
      {
        source: '/questions/roleplay/:type/:scenario',
        destination: '/questions/roleplay/:type#:scenario',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
