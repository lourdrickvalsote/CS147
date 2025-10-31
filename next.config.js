/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: process.env.NODE_ENV === "production" ? "/class/cs147/projects/AdultingMadeEasier/Chatatouille" : "",
  env: {
    NEXT_PUBLIC_BASE_PATH: process.env.NODE_ENV === "production" ? "/class/cs147/projects/AdultingMadeEasier/Chatatouille" : "",
  },
};

module.exports = nextConfig;
