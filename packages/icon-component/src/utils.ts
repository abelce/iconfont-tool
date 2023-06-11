import IconContext from "./Context";
import { useContext, useEffect } from "react";
import { updateCSS } from 'rc-util/lib/Dom/dynamicCSS';

export const svgBaseProps = {
  width: "1em",
  height: "1em",
  fill: "currentColor",
  "aria-hidden": "true",
  focusable: "false",
};

export const iconStyles = `
.icon {
  display: inline-block;
  color: inherit;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon > * {
  line-height: 1;
}

.icon svg {
  display: inline-block;
}

.icon::before {
  display: none;
}

.icon[tabindex] {
  cursor: pointer;
}

.icon-spin::before,
.icon-spin {
  display: inline-block;
  -webkit-animation: loadingCircle 1s infinite linear;
  animation: loadingCircle 1s infinite linear;
}

@-webkit-keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
`;

export const useInsertStyles = (styleStr: string = iconStyles) => {
  const { csp, prefixCls } = useContext(IconContext);
  let mergedStyleStr = styleStr;

  if (prefixCls) {
    mergedStyleStr = mergedStyleStr.replace(/icon/g, prefixCls);
  }

  useEffect(() => {
    updateCSS(mergedStyleStr, "@iconfont-extract-icon", {
      prepend: true,
      csp,
    });
  }, []);
};