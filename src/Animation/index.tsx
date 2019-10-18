import React, { FunctionComponent, useEffect, useRef } from "react";
import classnames from "classnames";
import lottie, {
  AnimationDirection,
  AnimationConfigWithData,
} from "lottie-web";
import useStyles from "./index.styles";

interface Props {
  data: any;
  height?: string | number;
  width?: string | number;
  isPaused?: boolean;
  speed?: number;
  direction?: AnimationDirection;
  ariaRole?: string;
  ariaLabel?: string;
  isClickToPauseDisabled?: boolean;
  autoplay?: boolean;
  loop?: boolean;
  title?: string;
  className?: string;
}

const getSize = (initial?: number | string) => {
  let size;

  if (typeof initial === "number") {
    size = `${initial}px`;
  } else {
    size = initial || "100%";
  }

  return size;
};

const Animation: FunctionComponent<Props> = ({
  data,
  isPaused = false,
  speed = 1,
  ariaRole = "button",
  ariaLabel = "animation",
  title = "",
  height,
  width,
  direction = 1,
  autoplay = true,
  loop = true,
  className,
}) => {
  const classes = useStyles();
  const element = useRef(null);

  useEffect(() => {
    if (!element.current) {
      return;
    }

    const allOptions: AnimationConfigWithData = {
      container: element.current as any,
      renderer: "svg",
      loop,
      autoplay,
      animationData: data,
    };
    const animation = lottie.loadAnimation(allOptions);

    animation.setSubframe(false);
    if (isPaused) {
      animation.pause();
    } else {
      animation.play();
    }

    animation.setSpeed(speed);
    animation.setDirection(direction);

    return () => {
      animation.destroy();
    };
  }, [data, isPaused, loop, autoplay, direction, speed]);

  return (
    <div
      ref={element}
      style={{
        width: getSize(width),
        height: getSize(height),
      }}
      title={title}
      role={ariaRole}
      aria-label={ariaLabel}
      className={classnames(classes.root, className)}
    />
  );
};

export default Animation;
