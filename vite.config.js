import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "@honkhonk/vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svgr(), react()],
  base: "/f2e-student-works/",
  build: {
    base: "/f2e-student-works/",
    chunkSizeWarningLimit: 2000,
  },
});
