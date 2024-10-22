/** @type {import('next').NextConfig} */
module.exports = {
  // reactStrictMode: true,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },

  experimental: {
    // Used to guard against accidentally leaking SANITY_API_READ_TOKEN to the browser
    taint: true,
  },

  logging: {
    fetches: { fullUrl: false },
  },
};
