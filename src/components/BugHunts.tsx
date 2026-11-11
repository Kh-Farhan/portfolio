import { content, type Tone } from "@/content";

const tones: Record<Tone, string> = {
  red: "bg-[#ffd9d9] text-[#9b1c1c]",
  yellow: "bg-butter text-[#713f12]",
  green: "bg-mint text-[#0f5132]",
  neutral: "bg-paper text-ink",
};

export function BugHunts() {
  const { bugHunts } = content;

  return (
    <section id="bug-hunts" className="flex flex-col gap-[18px] pt-12">
      <div className="flex flex-col gap-2">
        <h2 className="font-display text-[40px] font-extrabold tracking-[-0.04em] sm:text-[52px]">{bugHunts.title}</h2>
        <p className="max-w-[600px] text-base leading-relaxed text-muted">{bugHunts.intro}</p>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {bugHunts.items.map((item) => (
          <article
            key={item.title}
            className="tile flex flex-col overflow-hidden rounded-[28px] border-[1.5px] border-ink bg-white"
          >
            <div className="flex flex-wrap items-center gap-2 border-b-[1.5px] border-dashed border-ink px-6 py-4 font-mono text-xs font-semibold">
              <span className={`rounded-lg px-2.5 py-1 ${tones[item.badge.tone]}`}>{item.badge.label}</span>
              <span className="rounded-lg bg-paper px-2.5 py-1">{item.area}</span>
              <span className={`ml-auto rounded-lg px-2.5 py-1 ${tones.green}`}>{item.status}</span>
            </div>
            <div className="flex flex-col gap-2.5 p-6">
              <h3 className="font-display text-[26px] leading-[1.1] font-bold tracking-[-0.03em]">{item.title}</h3>
              <p className="text-[15px] leading-relaxed text-muted">{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
