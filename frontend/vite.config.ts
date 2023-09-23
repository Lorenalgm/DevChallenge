import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      injectRegister: "auto",
      workbox: {
        globPatterns: ["**/*.{js,css,html,ico,png,svg}"],
      },
      includeAssets: ["logo.png"],
      manifest: {
        name: "DevChallenge",
        short_name: "DevChallenge",
        description:
          "O DevChallenge é mais do que apenas uma plataforma de programação. É uma comunidade de apaixonados por desenvolvimento de software!",
        theme_color: "#facc15",
        icons: [
          {
            src: "logo.png",
            sizes: "500x500",
            type: "image/png",
          },
        ],
      },
      devOptions: {
        enabled: true,
      },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
