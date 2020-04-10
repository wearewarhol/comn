import classnames from "classnames";
import React, { StatelessComponent } from "react";
import useStyles from "./index.styles";
import FadeIn from "../FadeIn";

type Props = {
  className?: string;
  noPadding?: boolean;
  isCentered?: boolean;
  isSecondary?: boolean;
  size?: "small" | "default";
  status?: "warning" | "info" | "default";
};

const Card: StatelessComponent<Props> = ({
  className,
  noPadding,
  isCentered,
  isSecondary,
  size = "default",
  status = "default",
  children,
}) => {
  const classes = useStyles();

  return (
    <FadeIn>
      <div
        className={classnames(classes.root, className, {
          [classes.noPadding]: noPadding,
          [classes.isCentered]: isCentered,
          [classes.isSecondary]: isSecondary,
          [classes.isSmall]: size === "small",
          [classes.isWarning]: status === "warning",
          [classes.isInfo]: status === "info",
        })}
      >
        {children}
      </div>
    </FadeIn>
  );
};

export default Card;
