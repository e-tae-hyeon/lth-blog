/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    rules: {
      // Convert *.svg imports to React components
      "*.svg": {
        loaders: ["@svgr/webpack"],
        as: "*.js",
      },
    },
  },
};

export default nextConfig;
