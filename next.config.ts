import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    // Ensure the correct workspace root when multiple lockfiles exist on the machine
    root: __dirname,
  },
};

export default nextConfig;
