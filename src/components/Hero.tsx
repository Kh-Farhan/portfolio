import { content } from "@/content";
import { ProfileCard } from "./ProfileCard";

export function Hero() {
  const { hero, contact } = content;

  return (
    <>
      <div className="tile relative col-span-12 flex min-w-0 animate-rise flex-col justify-between gap-8 rounded-[28px] bg-white p-7 sm:p-10 lg:col-span-7">
        <span className="absolute top-6 right-6 hidden rotate-[8deg] rounded-full border-[1.5px] border-ink bg-butter px-3.5 py-2 font-mono text-xs font-semibold sm:block">
          ● {hero.sticker}
        </span>
        <p className="text-lg font-medium text-muted">
          {hero.greeting}{" "}
          <span aria-hidden="true" className="inline-block origin-[70%_70%] animate-wave text-orange">
            ✺
          </span>
        </p>
        <h1 className="font-display text-[44px] leading-[0.98] font-extrabold tracking-[-0.045em] text-balance sm:text-[56px] lg:text-[68px]">
          {hero.headline.before}
          <span className="rounded-[14px] bg-orange px-2.5 box-decoration-clone">{hero.headline.highlight}</span>
          {hero.headline.after}
        </h1>
        <div className="flex flex-wrap gap-2.5">
          <a
            href={hero.primaryCta.href}
            className="press rounded-[14px] bg-ink px-[22px] py-3.5 text-[15px] font-semibold text-white"
          >
            {hero.primaryCta.label}
          </a>
          <a
            href={contact.resume}
            target="_blank"
            rel="noopener"
            className="press rounded-[14px] border-[1.5px] border-ink bg-white px-[22px] py-[13px] text-[15px] font-semibold"
          >
            {hero.secondaryCta.label}
          </a>
        </div>
      </div>
      <ProfileCard />
    </>
  );
}
