import React, { FunctionComponent, useState, useEffect } from "react";
import classnames from "classnames";
import useStyles from "./index.styles";

const FadeIn: FunctionComponent = ({ children, ...props }) => {
  const classes = useStyles();
  const [isIn, setIsIn] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => setIsIn(true), 100);
  }, []);

  return (
    <div
      className={classnames(classes.root, {
        [classes.isIn]: isIn,
      })}
      {...props}
    >
      {children}
    </div>
  );
};

export default FadeIn;
