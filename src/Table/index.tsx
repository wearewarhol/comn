import React, { FunctionComponent, TableHTMLAttributes } from "react";

import useStyles from "./index.styles";

type Props = TableHTMLAttributes<Element>;

const Table: FunctionComponent<Props> = ({ children, ...props }) => {
  const classes = useStyles();

  return (
    <table {...props} className={classes.table}>
      {children}
    </table>
  );
};

export default Table;
