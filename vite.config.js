import { defineConfig } from "vite";
import preact from "@preact/preset-vite";
import { BASE_URL_PATH } from "./src/utils";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [preact()],
  root: "./",
  build: {
    outDir: "dist",
  },
  base: BASE_URL_PATH,
  publicDir: "public",
});
