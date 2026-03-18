import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // We are removing 'base' and 'build' objects. 
  // Vite defaults are perfect for Vercel.
});