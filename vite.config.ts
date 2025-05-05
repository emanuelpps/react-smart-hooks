import { resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "react-smart-hooks",
      formats: ["es", "umd"],
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output:{
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        }
      }
    }
  },
  plugins: [dts({ outDir: "dist" })],
});
