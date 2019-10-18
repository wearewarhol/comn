import React, { FunctionComponent } from "react";
import useStyles from "./index.styles";

type Props = {};

const List: FunctionComponent<Props> = ({ children }) => {
  const classes = useStyles();

  return <ul className={classes.list}>{children}</ul>;
};

export default List;
