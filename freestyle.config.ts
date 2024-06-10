import { defineConfig } from "freestyle-sh";

export default defineConfig({
  dev: {
    command: "npm run web",
    proxy: "http://localhost:8081",
  },
});
