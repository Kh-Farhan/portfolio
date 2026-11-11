import { content } from "@/content";

export function Highlights() {
  const { stat, clients, team } = content.highlights;
  const loop = [...clients.names, ...clients.names];

  return (
    <>
      <div className="tile col-span-12 flex min-h-[200px] flex-col justify-between gap-6 rounded-[28px] bg-orange p-[26px] sm:col-span-6 lg:col-span-3">
        <span className="text-sm font-semibold">{stat.label}</span>
        <span className="font-display text-[84px] leading-[0.85] font-extrabold tracking-[-0.05em]">{stat.value}</span>
      </div>

      <div className="tile marquee-wrap col-span-12 flex min-w-0 flex-col justify-between gap-5 overflow-hidden rounded-[28px] bg-white py-[26px] sm:col-span-6 lg:col-span-5">
        <span className="px-[26px] text-sm font-semibold text-muted">{clients.label}</span>
        <p className="sr-only">{clients.names.join(", ")}</p>
        <div aria-hidden="true" className="flex w-max animate-marquee gap-3">
          {loop.map((name, i) => (
            <span
              key={i}
              className="rounded-full border-[1.5px] border-ink px-[18px] py-2 font-display text-[28px] font-extrabold tracking-[-0.03em] whitespace-nowrap"
            >
              {name}
            </span>
          ))}
        </div>
        <span className="px-[26px] font-mono text-xs text-muted">{clients.footnote}</span>
      </div>

      <div className="tile relative col-span-12 flex flex-col justify-between gap-[18px] rounded-[28px] bg-lilac p-[26px] lg:col-span-4">
        <span className="text-sm font-semibold">{team.label}</span>
        <ul className="flex flex-col gap-1.5 font-display text-2xl leading-[1.15] font-bold tracking-[-0.02em]">
          {team.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <span
          aria-hidden="true"
          className="absolute right-[22px] bottom-[22px] grid size-[54px] -rotate-12 place-items-center rounded-full bg-ink font-mono text-[11px] font-semibold text-lilac"
        >
          {team.stamp}
        </span>
      </div>
    </>
  );
}
