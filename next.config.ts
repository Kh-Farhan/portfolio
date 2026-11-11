import type { NextConfig } from "next";

// Static export: `npm run build` writes a plain HTML site to /out,
// which Netlify (or any static host) can serve.
const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
