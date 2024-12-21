/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
    domains: ['images.unsplash.com','static.vecteezy.com','www.w3.org'],
  },
};

export default nextConfig;
