import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  allowedDevOrigins: ['lucasport5795.builtwithrocket.new'],
  webpack(config) {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, 'lucas-portfolio'),
    };
    return config;
  },
};

export default nextConfig;
