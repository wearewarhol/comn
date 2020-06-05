import React, { FunctionComponent } from "react";
import useStyles from "./index.styles";

const ListItem: FunctionComponent = ({ children }) => {
  const classes = useStyles();

  return <li className={classes.listItem}>{children}</li>;
};

export default ListItem;
