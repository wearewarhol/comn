import React, { FunctionComponent } from "react";
import Lazyload from "react-lazyload";

interface Props {
  height: number;
  src: string;
  alt?: string;
  title?: string;
  className?: string;
}

const Image: FunctionComponent<Props> = ({ height, src, ...rest }) => (
  <Lazyload throttle={200} height={height}>
    <img src={src} {...rest} />
  </Lazyload>
);

export default Image;
