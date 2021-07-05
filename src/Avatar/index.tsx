import React, { FunctionComponent } from "react";
import classnames from "classnames";
import useStyles from "./index.styles";
import Image from "../Image";

interface Props {
  imageUrl: string;
  alt?: string;
  title?: string;
  size?: "small" | "default";
  backgroundImageUrl?: string;
}

const Avatar: FunctionComponent<Props> = ({
  imageUrl,
  alt,
  title,
  size = "default",
  backgroundImageUrl,
}) => {
  const classes = useStyles();

  return (
    <div
      className={classnames(classes.avatar, {
        [classes.small]: size === "small",
      })}
      style={
        backgroundImageUrl
          ? { backgroundImage: `url(${backgroundImageUrl})` }
          : undefined
      }
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
