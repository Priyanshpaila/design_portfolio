/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["gsap", "lenis"],
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
