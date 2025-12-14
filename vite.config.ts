import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:3001",
        changeOrigin: true,
      },
    },
  },
  optimizeDeps: {
    exclude: ["lucide-react"],
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          "react-vendor": ["react", "react-dom"],
          "mui-vendor": [
            "@mui/material",
            "@mui/icons-material",
            "@emotion/react",
            "@emotion/styled",
          ],
          "maps-vendor": ["@vis.gl/react-google-maps"],
          "redux-vendor": ["@reduxjs/toolkit", "react-redux"],
          "utils-vendor": ["lucide-react"],
        },
      },
    },
    chunkSizeWarningLimit: 1000,
    sourcemap: false,
    minify: "esbuild",
  },
});
