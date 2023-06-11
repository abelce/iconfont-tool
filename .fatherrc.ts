import { IBundleOptions } from "father-build/src/types";

const config: IBundleOptions = {
  cjs: "babel",
  esm: "babel",
  pkgs: ["icon-component"],
};

export default config;
