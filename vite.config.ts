import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  envDir: "./",
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: ["./vitest.setup.ts"],
  },
  define: {
    "import.meta.env.VITE_API_BASE_URL": JSON.stringify(
      "http://localhost:3000"
    ),
  },
});
