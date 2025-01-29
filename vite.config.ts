import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": "/src",
      "@components": "/src/ui/components",
      "@pages": "/src/pages",
      "@context": "/src/context",
      "@ui": "/src/ui",
      "@hooks": "/src/hooks",
    },
  },
});
