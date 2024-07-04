import { defineConfig } from "vite";
import preact from "@preact/preset-vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [preact()],
  root: "./",
  build: {
    outDir: "dist",
  },
  base: process.env.GH_PAGES ? "/spice-league-ff/" : "/",
  publicDir: "public",
});
