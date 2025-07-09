import { defineConfig } from "vite";
import { stylexPlugin } from "vite-plugin-stylex-dev";

/** @type {import('vite').UserConfig} */
export default defineConfig({
  plugins: [stylexPlugin()],
});
