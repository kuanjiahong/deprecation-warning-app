/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/some-rewrite-url",
        destination: "http://localhost:3000/url-rewritten"
      }
    ]
  }
};

export default nextConfig;
