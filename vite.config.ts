import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "node:path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "/src"),
      "@components": path.resolve(__dirname, "/src/ui/components"),
      "@pages": path.resolve(__dirname, "/src/pages"),
      "@context": path.resolve(__dirname, "/src/context"),
    },
  },
  plugins: [react(), tailwindcss()],
});
