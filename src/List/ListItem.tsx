import React, { FunctionComponent } from "react";
import useStyles from "./index.styles";

type Props = {};

const ListItem: FunctionComponent<Props> = ({ children }) => {
  const classes = useStyles();

  return <li className={classes.listItem}>{children}</li>;
};

export default ListItem;
