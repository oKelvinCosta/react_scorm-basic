import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  // base: "./", // Base path of project USE THIS IN SCORM ENVIRONMENT
  base: "react_scorm-basic", // To use in github pages
  build: {
    outDir: "docs", // Output directory
  },
  plugins: [react()],
});
