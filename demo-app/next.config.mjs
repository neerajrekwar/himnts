/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "https://assets.aceternity.com/",
        port: "3000",
        pathname: "/demos/**",
      },
    ],
  },
};

export default nextConfig;
