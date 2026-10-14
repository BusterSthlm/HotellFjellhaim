import {defineConfig} from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

//const react = require("@vitejs/plugin-react");
//const { defineConfig } = require("vite");
//const tailwindcss = require("@tailwindcss/vite");

// https://vite.dev/config/
//module.exports = defineConfig({
 // plugins: [react(), tailwindcss()],
//});

export default defineConfig({
  plugins: [react(), tailwindcss()]
})
