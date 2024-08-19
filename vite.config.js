import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// rewirte 해야함

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        changeOrigin: true,
      },
    },
  },
});
