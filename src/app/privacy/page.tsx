// 개인정보처리방침 페이지
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '개인정보처리방침',
  description: 'OPIC Bank의 개인정보 수집·이용 및 쿠키·광고 정책을 안내합니다.',
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-2xl px-5 py-16">
      <h1 className="text-[32px]">개인정보처리방침</h1>

      <div className="mt-8 flex flex-col gap-8 text-[15px] leading-relaxed text-muted-foreground">
        <section>
          <h2 className="text-[18px] text-foreground">1. 수집하는 개인정보</h2>
          <p className="mt-2">
            본 사이트는 별도의 회원가입·로그인 기능을 제공하지 않으며, 이름·이메일 등 개인정보를
            직접 수집하지 않습니다. &quot;나만의 노트&quot; 기능에서 저장하는 표현·질문 데이터는
            서버로 전송되지 않고 사용자의 브라우저(localStorage)에만 저장됩니다.
          </p>
        </section>

        <section>
          <h2 className="text-[18px] text-foreground">2. 쿠키 및 광고</h2>
          <p className="mt-2">
            본 사이트는 Google AdSense를 통해 광고를 게재하며, Google을 비롯한 제3자 공급업체가
            쿠키를 사용해 사용자의 이전 방문 기록을 기반으로 광고를 게재할 수 있습니다. Google의
            광고 쿠키 사용으로 인해 Google과 그 파트너는 본 사이트 및 다른 사이트 방문 기록을 토대로
            광고를 제공할 수 있습니다.
          </p>
          <p className="mt-2">
            사용자는{' '}
            <a
              href="https://adssettings.google.com"
              target="_blank"
              rel="noreferrer"
              className="text-primary hover:underline"
            >
              Google 광고 설정
            </a>
            에서 맞춤 광고를 비활성화할 수 있습니다.
          </p>
        </section>

        <section>
          <h2 className="text-[18px] text-foreground">3. 문의</h2>
          <p className="mt-2">
            개인정보 관련 문의는{' '}
            <a href="/contact" className="text-primary hover:underline">
              연락처 페이지
            </a>
            를 통해 남겨주세요.
          </p>
        </section>
      </div>
    </div>
  );
}
