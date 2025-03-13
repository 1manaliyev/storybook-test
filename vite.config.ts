import react from '@vitejs/plugin-react';
import { resolve } from "path";
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

// https://vite.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "ooia-ui-library-test-1",
      fileName: format => `ooia-ui-library-test-1.${format}.js`
    },
    rollupOptions: {
      external: ["react"],
      output: {
        globals: {
          react: "React"
        }
      }
    }
  },
  plugins: [react(),
    dts({
      insertTypesEntry: true
    })
  ],
});
