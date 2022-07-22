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
    ],
  },
};

module.exports = { ...nextConfig, ...imageConfig };
