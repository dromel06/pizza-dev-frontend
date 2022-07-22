/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

const imageConfig = {
  images: {
    domains: [
      "st4.depositphotos.com",
      "pbs.twimg.com",
      "cache.dominos.com",
      "res.cloudinary.com",
      "drive.google.com",
      "cascoyogapanama.com",
    ],
    formats: ["image/avif", "image/webp", "image/gif"],
  },
};

module.exports = { ...nextConfig, ...imageConfig };
