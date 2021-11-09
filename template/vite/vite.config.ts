import { defineConfig } from 'vite'
import styleImport from "vite-plugin-style-import";
import reactRefresh from '@vitejs/plugin-react-refresh';
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
          "brand-color": "red",
          "font-size-sm": "13px",
          "font-size-md": "15px",
          "font-size-lg": "17px",
          "action-bar-button-danger-color": "#7232dd",
          "action-bar-button-warning-color": "#3eaf7c",
        },
      },
    },
  },
  resolve: {
    alias: [{ find: /^~/, replacement: "" }],
  },
  plugins: [reactRefresh(), styleImport({
    libs: [
      {
        libraryName: "react-vant",
        resolveStyle: (name) => `react-vant/es/${name}/style`,
      },
    ],
  }), ...plugins]
})
