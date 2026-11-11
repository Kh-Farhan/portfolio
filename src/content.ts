/**
 * ─────────────────────────────────────────────────────────────
 *  ALL SITE COPY LIVES HERE.
 *  Edit this file to change any text, link, project or skill.
 *  Sections appear in the same order as on the page.
 *  Components never hard-code copy; they only read from here.
 * ─────────────────────────────────────────────────────────────
 */

export type CardTheme = "white" | "ink" | "mint" | "butter";
export type Tone = "red" | "yellow" | "green" | "neutral";
export type JsonValue = string | number | boolean | JsonValue[];

export const content = {
  /* ── SEO / browser tab ─────────────────────────────────── */
  meta: {
    title: "Khawaja Farhan Ahmed · Frontend Engineer",
    description:
      "Frontend engineer building headless commerce for enterprise retail with Next.js, Remix, commercetools and Shopify.",
    // Your live URL, e.g. "https://example.com". Used for social share previews.
    siteUrl: "",
  },

  /* ── Contact details used across the site ──────────────── */
  contact: {
    email: "khawajafarhan10@gmail.com",
    linkedin: "https://www.linkedin.com/in/khawaja-farhan-b902b9217/",
    github: "https://github.com/Kh-Farhan",
    resume: "/resume.pdf",
  },

  /* ── Header ────────────────────────────────────────────── */
  header: {
    monogram: "KF",
    wordmark: "farhan",
    wordmarkSuffix: "dev",
    nav: [
      { label: "Work", href: "#work" },
      { label: "Bug hunts", href: "#bug-hunts" },
      { label: "Path", href: "#path" },
      { label: "Stack", href: "#stack" },
    ],
    cartLabel: "Cart",
  },

  /* ── Hero (left tile) ──────────────────────────────────── */
  hero: {
    greeting: "Hey, I'm Farhan",
    sticker: "shipping @ Teamo",
    headline: {
      before: "I build the headless storefronts ",
      highlight: "enterprise retail",
      after: " runs on.",
    },
    primaryCta: { label: "Browse my work →", href: "#work" },
    secondaryCta: { label: "Résumé PDF ↓" },
  },

  /* ── Hero (right tile: recruiter / engineer switch) ────── */
  profileCard: {
    method: "GET",
    endpoint: "/api/farhan",
    switchLabel: "Choose how to read this profile",
    humanTab: "For recruiters",
    jsonTab: "For engineers",
    summary:
      "4+ years building online stores for big retailers, from an ASX-listed lighting group to international fashion brands.",
    bullets: [
      "Owns big features from scoping to release",
      "Leads code review, hiring and onboarding",
      "Works remotely with Australian teams",
    ],
    // Shown as a JSON response in the "For engineers" view.
    json: {
      role: "Frontend Engineer",
      years: 4,
      commerce: ["commercetools", "Shopify B2B", "Hydrogen"],
      frameworks: ["Next.js 15", "Remix"],
      leads: "Pakistan dev team",
      cache: "HIT",
    } as Record<string, JsonValue>,
  },

  /* ── Highlight tiles under the hero ────────────────────── */
  highlights: {
    stat: { label: "In production commerce", value: "4+ yrs" },
    clients: {
      label: "Shipped for",
      names: ["Beacon Lighting", "Supagas", "Showpo", "CUE", "Ghanda", "House"],
      footnote: "ASX-listed retail · national gas distributor · DTC fashion",
    },
    team: {
      label: "Team lead, Pakistan",
      items: ["Merge authority", "Tech interviews", "Onboarding devs"],
      stamp: "LGTM",
    },
  },

  /* ── Client work (filterable) ──────────────────────────── */
  work: {
    title: "Client work",
    // {count} is replaced with the number of visible projects.
    resultsLabel: "{count} results · filter it like a product page",
    allLabel: "All",
    // Filter chips. A project shows when one of its tags matches.
    filters: ["Next.js", "Remix", "commercetools", "Shopify B2B", "Hydrogen", "Algolia"],
    projects: [
      {
        name: "Beacon Lighting",
        kind: "ASX-listed retail",
        theme: "ink" as CardTheme,
        description:
          "Faceted search and merchandising across thousands of SKUs, resolving commercetools price tiers through Algolia.",
        tags: ["Next.js", "commercetools", "Algolia"],
        href: "",
      },
      {
        name: "Supagas",
        kind: "B2B replatform",
        theme: "white" as CardTheme,
        description:
          "Company accounts, customer-specific pricing, approval and ordering flows, and order automation with Shopify Flow.",
        tags: ["Next.js", "Shopify B2B", "Flow"],
        href: "",
      },
      {
        name: "Showpo",
        kind: "DTC fashion",
        theme: "mint" as CardTheme,
        description: "Hydrogen storefront on Remix and Oxygen, shipping to multiple international markets.",
        tags: ["Remix", "Hydrogen", "Oxygen"],
        href: "",
      },
      {
        name: "CUE",
        kind: "DTC fashion",
        theme: "white" as CardTheme,
        description: "Hydrogen and Oxygen storefront for a multi-market fashion label.",
        tags: ["Remix", "Hydrogen", "Oxygen"],
        href: "",
      },
      {
        name: "Ghanda",
        kind: "Fashion retail",
        theme: "butter" as CardTheme,
        description: "Headless Shopify storefront on Next.js with GA4 and GTM conversion tracking.",
        tags: ["Next.js", "Shopify", "GA4"],
        href: "",
      },
      {
        name: "House",
        kind: "Homewares",
        theme: "white" as CardTheme,
        description: "Headless Shopify storefront on Next.js with SEO and Core Web Vitals work.",
        tags: ["Next.js", "Shopify"],
        href: "",
      },
    ],
  },

  /* ── Bug hunts (postmortem tickets) ────────────────────── */
  bugHunts: {
    title: "Bug hunts",
    intro:
      "Production faults in Next.js 15 that never show up in a demo but cost real traffic. Written up as postmortems.",
    items: [
      {
        badge: { label: "SEV-2", tone: "red" as Tone },
        area: "Partial Prerendering",
        status: "✓ Resolved",
        title: "The cache served a placeholder page to live shoppers",
        description:
          "A prerendered shell was being cached as the final response. Traced it and fixed the route so real content reached real traffic.",
      },
      {
        badge: { label: "SEO", tone: "yellow" as Tone },
        area: "Streaming metadata",
        status: "✓ Resolved",
        title: "Canonical tags were hiding from Google",
        description:
          "Streamed metadata landed outside the crawler-visible head. Moved it back where search engines actually read it.",
      },
    ],
  },

  /* ── Career path ───────────────────────────────────────── */
  path: {
    title: "Path so far",
    items: [
      {
        dates: "Jun 2022 — now",
        title: "Software Engineer · Teamo",
        description: "Enterprise Shopify and commercetools storefronts in a multi-client monorepo.",
        current: true,
      },
      {
        dates: "Jan — Jun 2022",
        title: "React Native Developer · BreakInt",
        description: "Two mobile apps, a React admin dashboard, Express APIs.",
        current: false,
      },
      {
        dates: "2018 — 2022",
        title: "BS Computer Science · COMSATS",
        description: "",
        current: false,
      },
    ],
  },

  /* ── Stack ─────────────────────────────────────────────── */
  stack: {
    title: "Stack",
    groups: [
      { name: "Commerce", items: ["commercetools", "Shopify B2B", "Hydrogen", "Flow"] },
      { name: "Frontend", items: ["Next.js", "Remix", "TypeScript", "React Native", "Tailwind"] },
      { name: "State & data", items: ["TanStack Query", "Zustand", "Redux", "GraphQL"] },
      { name: "UI & testing", items: ["Storybook", "Radix", "shadcn/ui", "Playwright", "Cypress"] },
      { name: "Search & CMS", items: ["Algolia", "Searchspring", "Nosto", "Contentful", "Sanity"] },
      { name: "Analytics & infra", items: ["GA4", "GTM", "Vercel", "Oxygen", "Node.js"] },
    ],
  },

  /* ── Contact "cart" ────────────────────────────────────── */
  cart: {
    headline: "Need a frontend engineer who speaks commerce?",
    addLabel: "Add Farhan to cart",
    addedLabel: "✓ Added to cart",
    summaryTitle: "ORDER SUMMARY",
    itemCountLabel: "item",
    emptyText: "Your cart is empty. Add me and check out with an email. Free shipping to any timezone.",
    item: {
      name: "1× Frontend Engineer",
      status: "in stock",
      details: ["Variant: Remote · AU hours", "Includes: Next.js, Shopify, commercetools"],
    },
    checkoutLabel: "Checkout → send an email",
    emailSubject: "Hello Farhan, let's talk",
    emailLabel: "or write to",
  },

  /* ── Footer ────────────────────────────────────────────── */
  footer: {
    left: "© {year} Khawaja Farhan Ahmed · Islamabad",
    right: "Built with Next.js · TypeScript · Tailwind",
  },
};
