import classnames from "classnames";
import React, { FunctionComponent } from "react";

import useStyles from "./index.styles";

type PropVariant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "subtitle1"
  | "subtitle2"
  | "body1"
  | "body2"
  | "caption";
type PropComponent =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "p"
  | "div"
  | "span";

type Props = {
  variant?: PropVariant;
  component?: PropComponent;
  gutterBottom?: boolean | 2 | 4 | 8;
  isInline?: boolean;
  title?: string;
  className?: string;
};

const getComponentFromVariant = (
  variant?: PropVariant,
  component?: PropComponent,
): PropComponent => {
  if (component) {
    return component;
  }

  switch (variant) {
    case "h1":
      return "h1";
    case "h2":
      return "h2";
    case "h3":
      return "h3";
    case "h4":
      return "h4";
    case "h5":
      return "h5";
    case "h6":
      return "h6";
    case "subtitle1":
    case "subtitle2":
    case "body1":
    case "body2":
    case "caption":
    default:
      return "p";
  }
};

const Typography: FunctionComponent<Props> = ({
  variant = "body2",
  component = "p",
  gutterBottom = false,
  isInline = false,
  title,
  className,
  children,
}) => {
  const classes = useStyles();
  const Component: PropComponent = getComponentFromVariant(variant, component);

  return (
    <Component
      className={classnames(classes.root, className, {
        [classes[variant]]: variant,
        [classes.gutterBottom]: gutterBottom,
        [classes.gutterBottom2]: gutterBottom === 2,
        [classes.gutterBottom4]: gutterBottom === 4,
        [classes.gutterBottom8]: gutterBottom === 8,
        [classes.isInline]: isInline,
      })}
      title={title}
    >
      {children}
    </Component>
  );
};

export default Typography;
