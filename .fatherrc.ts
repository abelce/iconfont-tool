import { defineConfig } from 'father';

export default defineConfig({
  // more father config: https://github.com/umijs/father/blob/master/docs/config.md
  esm: {
    transformer: 'babel',
    output: 'es',
  },
  cjs: {
    transformer: 'babel',
    output: 'lib',
  },
});
