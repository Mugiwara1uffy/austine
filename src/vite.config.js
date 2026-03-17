import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Replace 'misasa' with your actual GitHub repository name
const REPO_NAME = "misasa";

export default defineConfig({
  plugins: [react()],
  base: "/",
  build: {
    outDir: "dist",
    assetsDir: "assets",
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom", "react-router-dom"],
        },
      },
    },
  },
});
