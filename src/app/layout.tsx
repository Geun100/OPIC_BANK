import type { Metadata } from 'next';

import Script from 'next/script';
import { Inter, Geist_Mono } from 'next/font/google';
import './globals.css';
import { AuthProvider } from '@/contexts/AuthContext';
import { Navbar } from '@/components/site/navbar';
import { Footer } from '@/components/site/footer';
import { structuredDataTemplates, seoConfig } from '@/lib/seo/config';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['300', '400', '500'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL(seoConfig.siteUrl),
  title: {
    default: 'OPIC Bank — 오픽 표현 아카이브',
    template: '%s | OPIC Bank',
  },
  description:
    '오픽에 필요한 모든 표현을 한곳에 모아둔 아카이브. 표현·필러·만능 문장·예상 질문을 검색하고 나만의 노트로 저장하세요.',
  keywords: seoConfig.defaultKeywords,
  openGraph: {
    type: 'website',
    locale: seoConfig.locale,
    siteName: seoConfig.siteName,
    title: 'OPIC Bank — 오픽 표현 아카이브',
    description:
      '오픽에 필요한 모든 표현을 한곳에 모아둔 아카이브. 표현·필러·만능 문장·예상 질문을 검색하고 나만의 노트로 저장하세요.',
    url: seoConfig.siteUrl,
  },
  twitter: {
    card: 'summary',
    title: 'OPIC Bank — 오픽 표현 아카이브',
    description:
      '오픽에 필요한 모든 표현을 한곳에 모아둔 아카이브. 표현·필러·만능 문장·예상 질문을 검색하고 나만의 노트로 저장하세요.',
  },
  verification: {
    google: 'f0YCW73pjR5LS_2OI2pl1DJGaZLbnCGm0RgKvkJb9eg',
    other: {
      'naver-site-verification': '85a7fe7c04457c4d17a53e93e16a720fec962a1b',
    },
  },
  alternates: {
    types: {
      'application/rss+xml': '/rss.xml',
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredDataTemplates.website),
          }}
        />
        {/* Google AdSense — head에 직접 삽입해야 구글 크롤러가 소스에서 인식 */}
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5665777842763515"
          crossOrigin="anonymous"
        />
      </head>
      <body className={`${inter.variable} ${geistMono.variable} antialiased`}>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-Q65G6QQY4T"
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-Q65G6QQY4T');
          `}
        </Script>
        <AuthProvider>
          <Navbar />
          <main className="min-h-[70vh]">{children}</main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
