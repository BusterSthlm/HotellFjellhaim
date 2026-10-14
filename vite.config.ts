const react = require("@vitejs/plugin-react");
const { defineConfig } = require("vite");
const tailwindcss = require("@tailwindcss/vite");

// https://vite.dev/config/
module.exports = defineConfig({
  plugins: [react(), tailwindcss()],
});
