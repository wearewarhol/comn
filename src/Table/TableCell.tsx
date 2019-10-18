import classnames from "classnames";
import React, { TableHTMLAttributes, FunctionComponent } from "react";

import useStyles from "./index.styles";

type Props = TableHTMLAttributes<Element> & {
  variant?: "head";
  noPadding?: boolean;
  className?: string;
  [key: string]: any;
};

const TableCell: FunctionComponent<Props> = ({
  variant,
  noPadding = false,
  className,
  children,
  ...props
}) => {
  const classes = useStyles();

  if (variant === "head") {
    return (
      <th
        {...props}
        className={classnames(
          classes.tableHeadColumn,
          {
            [classes.columnNoPadding]: noPadding,
          },
          className,
        )}
      >
        {children}
      </th>
    );
  }

  return (
    <td
      {...props}
      className={classnames(
        classes.tableColumn,
        {
          [classes.columnNoPadding]: noPadding,
        },
        className,
      )}
    >
      {children}
    </td>
  );
};

export default TableCell;
