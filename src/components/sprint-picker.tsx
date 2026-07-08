// 홈 히어로 — "시험이 언제예요?" 4지선다 픽커
import Link from 'next/link';
import { HelpCircle, Zap, Flame, AlarmClock } from 'lucide-react';
import { sprints } from '@/data/sprint';

const options = [
  {
    href: '/guide',
    icon: HelpCircle,
    label: '오픽이 뭔지도 몰라요',
    desc: '시험 구조부터 5분만에 이해하기',
  },
  {
    href: '/sprint/d14',
    icon: Zap,
    label: sprints.d14.label,
    desc: '14일 정석 스프린트',
  },
  {
    href: '/sprint/d7',
    icon: Flame,
    label: sprints.d7.label,
    desc: '7일 집중 스프린트',
  },
  {
    href: '/sprint/d1',
    icon: AlarmClock,
    label: sprints.d1.label,
    desc: '7시간 벼락치기',
  },
];

export function SprintPicker() {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {options.map((o) => (
        <Link
          key={o.href}
          href={o.href}
          className="group flex flex-col items-center gap-2 rounded-xl border border-border bg-card px-5 py-6 text-center shadow-[0_1px_3px_rgba(0,55,112,0.08)] transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:shadow-[0_8px_24px_rgba(0,55,112,0.08)]"
        >
          <o.icon className="size-6 text-primary" strokeWidth={1.5} />
          <span className="text-[18px] tracking-tight">{o.label}</span>
          <span className="text-[13px] text-muted-foreground">{o.desc}</span>
        </Link>
      ))}
    </div>
  );
}
