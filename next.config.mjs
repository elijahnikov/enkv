/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: "utfs.io" },
      { hostname: "asset.brandfetch.io" },
      { hostname: "cdn.jsdelivr.net" },
      { hostname: "cdn.svgporn.com" },
    ],
  },
};

export default nextConfig;
