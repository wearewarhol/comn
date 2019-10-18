import React, { FunctionComponent, Fragment } from "react";
import Field from "../Field";
import useStyles from "./index.styles";

type Props = {
  id: string;
  value?: string;
  onBlur?: (event: any) => void;
};

const Hidden: FunctionComponent<Props> = ({ id, value, onBlur }) => {
  const classes = useStyles();

  return (
    <Field
      id={id}
      value={value}
      onBlur={onBlur}
      className={classes.root}
      render={() => <Fragment />}
    />
  );
};

export default Hidden;
