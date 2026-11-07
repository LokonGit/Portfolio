/** @type {import('next').NextConfig} */
const nextConfig = {
  // The original app (Vite + createRoot) never ran in React StrictMode, keep the same behaviour
  // (StrictMode would double-run effects in dev: three.js / R3F / gsap setups)
  reactStrictMode: false,
  transpilePackages: ["three", "@andersonmancini/lens-flare"],
};

export default nextConfig;
