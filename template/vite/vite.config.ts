import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import styleImport from "vite-plugin-style-import";
import visualizer from "rollup-plugin-visualizer";

const plugins = [];

// 打包生产环境才引入的插件
if (process.env.NODE_ENV === "production") {
  // 打包依赖展示
  plugins.push(
    visualizer({
      open: true,
      gzipSize: true,
      brotliSize: true,
    })
  );
}

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        modifyVars: {
          // 定制less变量
          // "brand-color": "red",
        },
      },
    },
  },
  resolve: {
    alias: [{ find: /^~/, replacement: "" }],
  },
  plugins: [react(), styleImport({
    libs: [
      {
        libraryName: "react-vant",
        resolveStyle: (name) => `react-vant/es/${name}/style`,
      },
    ],
  }), ...plugins]
})
