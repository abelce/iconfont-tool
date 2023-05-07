import React from "react";
import { CustomIconComponentProps, IconComponentProps } from "./types";
import classNames from "classnames";
import { svgBaseProps, useInsertStyles } from "./utils";
import Context from "./Context";

const Icon = React.forwardRef<HTMLSpanElement, IconComponentProps>(
  (props, ref) => {
    const {
      className,

      // affect inner <svg>...</svg>
      component: Component,
      viewBox,
      spin,
      rotate,

      tabIndex,
      onClick,

      // children
      children,
      ...restProps
    } = props;

    useInsertStyles();

    const { prefixCls = "icon", rootClassName } = React.useContext(Context);

    const classString = classNames(rootClassName, prefixCls, className);

    const svgClassString = classNames({
      [`${prefixCls}-spin`]: !!spin,
    });

    const svgStyle = rotate
      ? {
          msTransform: `rotate(${rotate}deg)`,
          transform: `rotate(${rotate}deg)`,
        }
      : undefined;

    const innerSvgProps: CustomIconComponentProps = {
      ...svgBaseProps,
      className: svgClassString,
      style: svgStyle,
      viewBox,
    };

    if (!viewBox) {
      delete innerSvgProps.viewBox;
    }

    // component > children
    const renderInnerNode = () => {
      if (Component) {
        return <Component {...innerSvgProps}>{children}</Component>;
      }

      if (children) {
        return (
          <svg {...innerSvgProps} viewBox={viewBox}>
            {children}
          </svg>
        );
      }

      return null;
    };

    let iconTabIndex = tabIndex;
    if (iconTabIndex === undefined && onClick) {
      iconTabIndex = -1;
    }

    return (
      <span
        role="img"
        {...restProps}
        ref={ref}
        tabIndex={iconTabIndex}
        onClick={onClick}
        className={classString}
      >
        {renderInnerNode()}
      </span>
    );
  }
);

export default Icon;
