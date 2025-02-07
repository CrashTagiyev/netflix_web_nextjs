/** @type {import('next').NextConfig} */
const nextConfig = {
  skipMiddlewareUrlNormalize: true,
  images: {
    domains: ["image.tmdb.org"],
  },
};

export default nextConfig;
