import React, { ThHTMLAttributes, FunctionComponent } from "react";

import useStyles from "./index.styles";

type Props = ThHTMLAttributes<Element> & {};

const TableRow: FunctionComponent<Props> = ({ children, ...props }) => {
  const classes = useStyles();

  return (
    <tr {...props} className={classes.tableRow}>
      {children}
    </tr>
  );
};

export default TableRow;
