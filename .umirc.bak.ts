import { defineConfig } from "dumi";
import path from "path";

export default defineConfig({
  title: "iconfont-toll",
  favicon:
    "https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png",
  logo: "https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png",
  outputPath: "docs-dist",
  mode: "site",
  alias: {
    "@iconfont-extract": path.resolve(__dirname, "./packages/icons-react"), 
    "@iconfont-extract-icon": path.resolve(__dirname, "./packages/icon-component"),
  },
  base: "/",
  publicPath: "/",
  navs: [
    {
      title: "设计",
      path: "/design",
    },
    {
      title: "组件",
      path: "/iconfont-extract-icon",
    },
    {
      title: "LiveChat 组件",
      path: "/iconfont-extract",
    },
    {
      title: "问题",
      path: "/issue",
    },
  ],
  // apiParser: {
  //       propFilter: {
  //     skipNodeModules: true,
  //   },
  // },
  nodeModulesTransform: {
    type: "none",
  },
  // more config: httpsç://d.umijs.org/config
  extraBabelPlugins: [
    [
      "babel-plugin-jsx-css-modules",
      {
        styleFileReg: [/\.module\.(css|less|scss)$/],
        prefer: "local",
        helperImportType: "esm",
      },
    ],
  ],
  analyze: {
    analyzerMode: "server",
    analyzerPort: 8001,
    openAnalyzer: true,
  },
  // 覆盖文档页面的字体
  styles: [
    `html body { font-family: Roboto, system-ui, -apple-system, BlinkMacSystemFont, Helvetica Neue, Helvetica, Arial, sans-serif,
  "Segoe UI", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Apple Color Emoji", "Segoe UI Emoji",
  "Segoe UI Symbol"; }`,
  ],
});
