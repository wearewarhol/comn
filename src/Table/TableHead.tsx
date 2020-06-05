import React, { FunctionComponent, TableHTMLAttributes } from "react";

type Props = TableHTMLAttributes<Element>;

const TableHead: FunctionComponent<Props> = ({ children, ...props }) => (
  <thead {...props}>
    <tr>{children}</tr>
  </thead>
);

export default TableHead;
