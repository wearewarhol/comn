import classnames from "classnames";
import React, {
  ReactElement,
  FunctionComponent,
  useState,
  useEffect,
} from "react";
import Animation from "../Animation";
import loading from "../Animation/files/load-on-dark.json";
import useStyles from "./index.styles";

type Variant = "flat" | "outlined" | "fab" | "clean";
type Size = "small" | "medium" | "large";

interface Props {
  icon?: ReactElement<any>;
  gutterBottom?: boolean;
  inputProps?: any;
  onClick?: (...args: any) => void;
  variant?: Variant;
  size?: Size;
  isLoading?: boolean;
  className?: string;
  buttonClassName?: string;
}

const Button: FunctionComponent<Props> = ({
  icon,
  gutterBottom = false,
  inputProps,
  onClick,
  variant = "outlined",
  size = "medium",
  isLoading = false,
  className,
  buttonClassName,
  children,
}) => {
  const classes = useStyles();
  const [hasBeenClicked, setHasBeenClicked] = useState<boolean>(false);

  useEffect(() => {
    if (hasBeenClicked && !isLoading) {
      setHasBeenClicked(false);
    }
  }, [hasBeenClicked, isLoading]);

  return (
    <span
      className={classnames(className, {
        [classes.gutterBottom]: gutterBottom,
      })}
    >
      <button
        {...inputProps}
        className={classnames(classes.root, buttonClassName, {
          [classes.flat]: variant === "flat",
          [classes.fab]: variant === "fab",
          [classes.clean]: variant === "clean",
          [classes.small]: size === "small",
          [classes.large]: size === "large",
          [classes.isLoading]: hasBeenClicked && isLoading,
        })}
        onClick={(event) => {
          onClick && onClick(event);
          setHasBeenClicked(true);
        }}
      >
        {children}

        {hasBeenClicked && isLoading && (
          <Animation data={loading} height={16} className={classes.animation} />
        )}

        {icon &&
          React.cloneElement(icon, {
            className: classnames(classes.icon, {
              [classes.iconWithChildren]: children,
            }),
          })}
      </button>
    </span>
  );
};

export default Button;
