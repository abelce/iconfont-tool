import fs from 'fs';
import path from 'path';
import { defaultConfig } from './config';
import { Options } from './types';
const prettier = require('prettier');

export const createAndSaveFile = (fileName: string, content: string) => {
  return new Promise<void>((resolve, reject) => {
    fs.writeFile(fileName, content, function (err) {
      if (err) {
        reject(err);
      }
      resolve();
    });
  });
};

export const processSvgFileName = (nameArr: string[]) => {
  return nameArr
    .map((str: string) => {
      if (str.length > 1) {
        return str[0].toUpperCase() + str.slice(1);
      }
      return str[0].toUpperCase();
    })
    .join('');
};

// 递归创建目录
export function mkdirRecursive(dirname: string) {
  fs.mkdirSync(dirname, { recursive: true });
}

export function removeDir(path: string) {
  let files = [];
  if (fs.existsSync(path)) {
    files = fs.readdirSync(path);
    files.forEach(function (file) {
      const curPath = path + '/' + file;
      if (fs.statSync(curPath).isDirectory()) {
      } else {
        // delete file
        fs.unlinkSync(curPath);
      }
    });
  }
}

// 生成React组件
export const genSvgComponent = (name: string) => {
  return `
        import React from 'react';
        import Icon from 'iconfont-extract-icon';
        
        import { IconBaseProps } from 'iconfont-extract-icon/types';
        import ${name}Svg from "../../svgs/${name}";

        const ${name} =  React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref): JSX.Element => {
          return <Icon component={${name}Svg} ref={ref} {...props} />;
        })

        export default ${name};
    `;
};

export const normalizeConfig = (
  config: (defaultConfig: Options) => Options | Options,
) => {
  if (typeof config === 'function') {
    return config(defaultConfig);
  }

  return config;
};

export const copyTypes = async (dir: string): Promise<void> => {
  const tyeps = ``;

  await createAndSaveFile(
    path.join(dir, `/types.ts`),
    prettier.format(tyeps, { parser: 'babel-ts' }),
  );
};
