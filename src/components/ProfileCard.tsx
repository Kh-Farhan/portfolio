"use client";

import { useState } from "react";
import { content, type JsonValue } from "@/content";

function Value({ value }: { value: JsonValue }) {
  if (Array.isArray(value)) {
    return (
      <>
        [
        {value.map((v, i) => (
          <span key={i}>
            {i > 0 && ", "}
            <Value value={v} />
          </span>
        ))}
        ]
      </>
    );
  }
  if (typeof value === "string") return <span className="text-[#ffc66d]">&quot;{value}&quot;</span>;
  return <span className="text-[#ff8a5c]">{String(value)}</span>;
}

export function ProfileCard() {
  const { profileCard: card } = content;
  const [view, setView] = useState<"human" | "json">("human");
  const entries = Object.entries(card.json);

  const tab = (active: boolean) =>
    `min-h-9 rounded-[9px] px-3 py-2 text-[13px] font-semibold transition-colors cursor-pointer ${
      active ? "bg-orange text-ink" : "text-soft hover:text-white"
    }`;

  return (
    <div className="tile col-span-12 flex min-w-0 animate-rise flex-col gap-4 rounded-[28px] bg-ink p-5 text-white [animation-delay:120ms] lg:col-span-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <span className="font-mono text-xs text-[#b8bec6]">
          <span className="text-[#7be0ae]">{card.method}</span> {card.endpoint}
        </span>
        <div role="group" aria-label={card.switchLabel} className="flex gap-1 rounded-xl bg-ink-2 p-1">
          <button type="button" aria-pressed={view === "human"} onClick={() => setView("human")} className={tab(view === "human")}>
            {card.humanTab}
          </button>
          <button type="button" aria-pressed={view === "json"} onClick={() => setView("json")} className={tab(view === "json")}>
            {card.jsonTab}
          </button>
        </div>
      </div>

      {view === "json" ? (
        <pre className="m-0 flex-1 overflow-x-auto rounded-2xl bg-ink-3 p-[18px] font-mono text-[13px] leading-[1.75] whitespace-pre-wrap text-soft">
          {"{\n"}
          {entries.map(([key, value], i) => (
            <span key={key}>
              {"  "}
              <span className="text-[#9db8ff]">&quot;{key}&quot;</span>: <Value value={value} />
              {i < entries.length - 1 ? ",\n" : "\n"}
            </span>
          ))}
          {"}"}
        </pre>
      ) : (
        <div className="flex flex-1 flex-col gap-3.5 rounded-2xl bg-ink-3 p-[22px]">
          <p className="text-[17px] leading-relaxed text-[#f1f2f4]">{card.summary}</p>
          <ul className="flex flex-col gap-2.5 text-[14.5px] text-soft">
            {card.bullets.map((b) => (
              <li key={b}>✓ {b}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
