import { defineConfig } from 'dumi';
import path from 'path';

export default defineConfig({
  outputPath: 'docs-dist',
  themeConfig: {
    name: 'iconfont-tool',
  },
  alias: {
    'iconfont-extract': path.resolve(__dirname, './packages/icons-react'),
    'iconfont-extract-icon': path.resolve(
      __dirname,
      './packages/icon-component',
    ),
  },
  styles: [
    `html body { font-family: Roboto, system-ui, -apple-system, BlinkMacSystemFont, Helvetica Neue, Helvetica, Arial, sans-serif,
  "Segoe UI", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Apple Color Emoji", "Segoe UI Emoji",
  "Segoe UI Symbol"; }`,
  ],
});
