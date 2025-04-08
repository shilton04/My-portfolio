import pwa from "next-pwa";
import { resolve } from "path";

let userConfig = undefined;
try {
  userConfig = await import("./v0-user-next.config");
} catch (e) {
  // ignore error
}

/** @type {import('next').NextConfig} */
let nextConfig = {
  output: "export", // Enables static site export
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true, // Required for Firebase Hosting
  },
  experimental: {
    webpackBuildWorker: true,
    parallelServerBuildTraces: true,
    parallelServerCompiles: true,
  },
  assetPrefix: process.env.NODE_ENV === "production" ? "/" : "",
};

// Apply user config merge
mergeConfig(nextConfig, userConfig);

// Wrap with PWA
const withPWA = pwa({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development",
});

export default withPWA(nextConfig);

function mergeConfig(base, override) {
  if (!override) return;
  for (const key in override) {
    if (typeof base[key] === "object" && !Array.isArray(base[key])) {
      base[key] = {
        ...base[key],
        ...override[key],
      };
    } else {
      base[key] = override[key];
    }
  }
}
