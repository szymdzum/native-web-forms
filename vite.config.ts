import { reactRouter } from "@react-router/dev/vite";
import autoprefixer from "autoprefixer";
import tailwindcss from "tailwindcss";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import path from 'path';

export default defineConfig(({ isSsrBuild, command }) => ({
  build: {
    rollupOptions: isSsrBuild
      ? {
          input: "./server/app.ts",
        }
      : undefined,
  },
  css: {
    postcss: {
      plugins: [tailwindcss, autoprefixer],
    },
  },
  ssr: {
    noExternal: command === "build" ? true : undefined,
  },
  plugins: [reactRouter(), tsconfigPaths()],
  resolve: {
    alias: {
      "@form": path.resolve(__dirname, "./app/form"),
      "@form/Form": path.resolve(__dirname, "./app/form/Form"),
      "@form/Input": path.resolve(__dirname, "./app/form/Input"),
      "@form/Password": path.resolve(__dirname, "./app/form/Password"),
      "@form/Button": path.resolve(__dirname, "./app/form/Button"),
    },
  },
}));
