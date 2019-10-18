import React, { FunctionComponent } from "react";
import Typography from "../../Typography";
import useStyles from "./index.styles";

type Props = {
  htmlFor?: string;
};

const Label: FunctionComponent<Props> = ({ htmlFor, children }) => {
  const classes = useStyles();

  return (
    <label htmlFor={htmlFor} className={classes.root}>
      <Typography variant="body2">{children}</Typography>
    </label>
  );
};

export default Label;
