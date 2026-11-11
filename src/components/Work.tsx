"use client";

import { useState } from "react";
import { content, type CardTheme } from "@/content";

const themes: Record<CardTheme, { card: string; kind: string; tag: string }> = {
  white: { card: "bg-white text-ink", kind: "bg-paper text-ink", tag: "bg-paper text-ink" },
  ink: { card: "bg-ink text-white", kind: "bg-orange text-ink", tag: "bg-[#2a2e34] text-white" },
  mint: { card: "bg-mint text-[#0b2a1c]", kind: "bg-white text-[#0b2a1c]", tag: "bg-white text-[#0b2a1c]" },
  butter: { card: "bg-butter text-[#2b1d02]", kind: "bg-white text-[#2b1d02]", tag: "bg-white text-[#2b1d02]" },
};

export function Work() {
  const { work } = content;
  const [filter, setFilter] = useState(work.allLabel);
  const projects =
    filter === work.allLabel ? work.projects : work.projects.filter((p) => p.tags.includes(filter));

  return (
    <section id="work" className="flex flex-col gap-[18px] pt-12">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <h2 className="font-display text-[40px] font-extrabold tracking-[-0.04em] sm:text-[52px]">{work.title}</h2>
        <span aria-live="polite" className="font-mono text-[13px] text-muted">
          {work.resultsLabel.replace("{count}", String(projects.length))}
        </span>
      </div>

      <div className="flex flex-wrap gap-2">
        {[work.allLabel, ...work.filters].map((label) => {
          const active = label === filter;
          return (
            <button
              key={label}
              type="button"
              aria-pressed={active}
              onClick={() => setFilter(label)}
              className={`press min-h-[42px] cursor-pointer rounded-full border-[1.5px] border-ink px-4 py-2 text-sm font-semibold ${
                active ? "bg-ink text-white shadow-[3px_3px_0_var(--color-orange)]" : "bg-white hover:bg-paper"
              }`}
            >
              {label}
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-[repeat(auto-fill,minmax(min(100%,360px),1fr))] gap-4">
        {projects.map((p) => {
          const t = themes[p.theme];
          const Tag = p.href ? "a" : "article";
          return (
            <Tag
              key={p.name}
              {...(p.href ? { href: p.href, target: "_blank", rel: "noopener" } : {})}
              className={`tile flex min-h-[300px] min-w-0 flex-col gap-4 rounded-[28px] p-[30px] ${t.card}`}
            >
              <div className="flex items-center justify-between gap-2.5">
                <span className={`rounded-lg px-2.5 py-[5px] font-mono text-[11.5px] font-semibold tracking-[0.04em] uppercase ${t.kind}`}>
                  {p.kind}
                </span>
                {p.href && (
                  <span aria-hidden="true" className="grid size-9 place-items-center rounded-full border-[1.5px] border-current">
                    ↗
                  </span>
                )}
              </div>
              <h3 className="font-display text-[32px] leading-none font-extrabold tracking-[-0.035em]">{p.name}</h3>
              <p className="text-[15px] leading-relaxed opacity-85">{p.description}</p>
              <div className="mt-auto flex flex-wrap gap-1.5">
                {p.tags.map((tag) => (
                  <span key={tag} className={`rounded-full px-[11px] py-[5px] font-mono text-xs ${t.tag}`}>
                    {tag}
                  </span>
                ))}
              </div>
            </Tag>
          );
        })}
      </div>
    </section>
  );
}
