import React, { TableHTMLAttributes, FunctionComponent } from "react";

import useStyles from "./index.styles";

type Props = TableHTMLAttributes<Element> & {};

const TableCell: FunctionComponent<Props> = ({ children, ...props }) => {
  const classes = useStyles();

  return (
    <tr {...props} className={classes.tableRow}>
      {children}
    </tr>
  );
};

export default TableCell;
