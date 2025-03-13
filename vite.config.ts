import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [react(), dts({ insertTypesEntry: true })],
  build: {
    lib: {
      entry: "src/index.ts",
      name: "ooia-ui-library-test-1",
      formats: ["es", "umd"],
      fileName: (format) => `ooia-ui-library-test-1.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom", 'react-router-dom'],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});
