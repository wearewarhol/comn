import React, { FunctionComponent } from "react";
import Typography from "../../Typography";
import useStyles from "./index.styles";

const HelpText: FunctionComponent = ({ children }) => {
  const classes = useStyles();
  return (
    <Typography variant="caption" className={classes.root}>
      {children}
    </Typography>
  );
};

export default HelpText;
