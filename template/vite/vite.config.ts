import { defineConfig } from 'vite'
import styleImport from "vite-plugin-style-import";
import reactRefresh from '@vitejs/plugin-react-refresh';

// https://vitejs.dev/config/
export default defineConfig({
  optimizeDeps: {
    exclude: ['rc-field-form']
  },
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
        resolveStyle: (name) => `react-vant/es/${name}/style/index`,
      },
    ],
  }),]
})
