import React, { FunctionComponent } from "react";
import classnames from "classnames";
import userMask from "./user-mask.svg";
import useStyles from "./index.styles";
import Image from "../Image";

interface Props {
  imageUrl: string;
  alt?: string;
  title?: string;
  size?: "small" | "default";
}

const Avatar: FunctionComponent<Props> = ({
  imageUrl,
  alt,
  title,
  size = "default",
}) => {
  const classes = useStyles();

  return (
    <div
      className={classnames(classes.avatar, {
        [classes.small]: size === "small",
      })}
      style={{ backgroundImage: `url(${userMask})` }}
    >
      <Image
        src={imageUrl}
        height={44}
        alt={alt}
        className={classnames(classes.avatarIcon, {
          [classes.iconSmall]: size === "small",
        })}
        title={title}
      />
    </div>
  );
};

export default Avatar;
