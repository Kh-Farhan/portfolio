"use client";

import { content } from "@/content";
import { useCart } from "./CartProvider";

export function Header() {
  const { header } = content;
  const { inCart } = useCart();

  return (
    <header className="sticky top-3 z-20 flex flex-wrap items-center justify-between gap-3 rounded-[20px] border-[1.5px] border-ink bg-white py-2.5 pr-2.5 pl-5 shadow-[4px_4px_0_var(--color-ink)]">
      <a href="#top" className="flex items-center gap-2.5" aria-label="Back to top">
        <span className="grid size-[34px] place-items-center rounded-[10px] bg-orange font-display text-[15px] font-extrabold">
          {header.monogram}
        </span>
        <span className="font-display text-[19px] font-extrabold tracking-tight">
          {header.wordmark}
          <span className="text-orange">.</span>
          {header.wordmarkSuffix}
        </span>
      </a>
      <nav className="flex flex-wrap items-center gap-1 text-sm font-medium">
        {header.nav.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="hidden rounded-xl px-3.5 py-2.5 transition-colors hover:bg-paper sm:block"
          >
            {item.label}
          </a>
        ))}
        <a
          href="#cart"
          className="press flex items-center gap-2 rounded-xl bg-ink px-4 py-2.5 text-white"
        >
          {header.cartLabel}
          <span
            aria-label={`${inCart ? 1 : 0} items`}
            className="grid h-5 min-w-5 place-items-center rounded-full bg-orange text-xs font-bold text-ink"
          >
            {inCart ? 1 : 0}
          </span>
        </a>
      </nav>
    </header>
  );
}
