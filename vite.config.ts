import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import { loadEnv } from "vite";

export default defineConfig({
  plugins: [react()],
  envDir: "./",
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: ["./vitest.setup.ts"],
    env: loadEnv("", process.cwd(), ""),
  },
});
