import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["src/setupTest.js"],
    coverage: {
      provider: "istanbul",
      include: ["src/lib/components/**/*.svelte"],
      exclude: ["src/lib/components/**/*Decorator.svelte"],
    },
  },
  compilerOptions: {
    customElement: true,
  },
});
