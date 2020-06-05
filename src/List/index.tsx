import React, { FunctionComponent } from "react";
import useStyles from "./index.styles";

const List: FunctionComponent = ({ children }) => {
  const classes = useStyles();

  return <ul className={classes.list}>{children}</ul>;
};

export default List;
