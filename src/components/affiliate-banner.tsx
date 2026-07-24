// 제휴 링크 배너 — 실제 제휴 계정(쿠팡파트너스 등) 발급 후 href만 채우면 바로 사용 가능
export function AffiliateBanner({
  title,
  description,
  href,
}: {
  title: string;
  description: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer sponsored"
      className="block rounded-xl border border-border bg-cream p-5 transition-all hover:-translate-y-0.5 hover:border-primary/40"
    >
      <p className="text-[13px] text-muted-foreground">추천 자료</p>
      <p className="mt-1 text-[16px] font-medium">{title}</p>
      <p className="mt-1 text-[13px] text-muted-foreground">{description}</p>
    </a>
  );
}
