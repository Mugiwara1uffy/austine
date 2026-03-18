import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/"
  // No 'base' line, no 'build' object. 
  // Let Vite handle the paths automatically.
});