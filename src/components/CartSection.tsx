"use client";

import { content } from "@/content";
import { useCart } from "./CartProvider";

export function CartSection() {
  const { cart, contact } = content;
  const { inCart, toggle } = useCart();
  const mailto = `mailto:${contact.email}?subject=${encodeURIComponent(cart.emailSubject)}`;

  return (
    <section id="cart" className="grid grid-cols-12 gap-4 pt-12">
      <div className="tile col-span-12 flex min-w-0 flex-col justify-between gap-7 rounded-[28px] bg-orange p-8 sm:p-11 lg:col-span-7">
        <h2 className="font-display text-[44px] leading-[0.95] font-extrabold tracking-[-0.045em] text-balance sm:text-[64px]">
          {cart.headline}
        </h2>
        <div className="flex flex-wrap gap-2.5">
          <button
            type="button"
            onClick={toggle}
            aria-pressed={inCart}
            className="press min-h-[52px] cursor-pointer rounded-[14px] bg-ink px-6 py-4 text-base font-semibold text-white"
          >
            {inCart ? cart.addedLabel : cart.addLabel}
          </button>
          <a href={contact.linkedin} target="_blank" rel="noopener" className="press rounded-[14px] bg-white px-6 py-4 text-base font-semibold">
            LinkedIn ↗
          </a>
          <a href={contact.github} target="_blank" rel="noopener" className="press rounded-[14px] bg-white px-6 py-4 text-base font-semibold">
            GitHub ↗
          </a>
        </div>
      </div>

      <div
        aria-live="polite"
        className="tile col-span-12 flex flex-col gap-4 rounded-[28px] border-[1.5px] border-ink bg-white p-7 font-mono text-[13.5px] lg:col-span-5"
      >
        <div className="flex justify-between font-semibold">
          <span>{cart.summaryTitle}</span>
          <span>
            {inCart ? 1 : 0} {cart.itemCountLabel}
          </span>
        </div>
        <div className="border-t-[1.5px] border-dashed border-ink" />
        {inCart ? (
          <div className="flex flex-col gap-2.5">
            <div className="flex justify-between gap-3">
              <span className="font-semibold">{cart.item.name}</span>
              <span>{cart.item.status}</span>
            </div>
            {cart.item.details.map((d) => (
              <div key={d} className="text-muted">
                {d}
              </div>
            ))}
            <div className="border-t-[1.5px] border-dashed border-ink" />
            <a href={mailto} className="press rounded-xl bg-ink p-3.5 text-center font-semibold text-white">
              {cart.checkoutLabel}
            </a>
          </div>
        ) : (
          <p className="leading-relaxed text-muted">{cart.emptyText}</p>
        )}
        <p className="mt-auto text-xs text-muted">
          {cart.emailLabel} <span className="text-ink select-all">{contact.email}</span>
        </p>
      </div>
    </section>
  );
}
