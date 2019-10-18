import React, { FunctionComponent } from "react";
import Typography from "../../Typography";
import useStyles from "./index.styles";
import { ValidatorWithState } from "../Field";

interface Props {
  shouldShowErrors?: boolean;
  errors?: ValidatorWithState[];
}

const ErrorMessages: FunctionComponent<Props> = ({
  shouldShowErrors,
  errors,
}) => {
  const classes = useStyles();

  if (!shouldShowErrors || !errors || errors.length === 0) {
    return null;
  }

  return (
    <div className={classes.messages}>
      {errors.map((error) => (
        <Typography key={error.type} className={classes.message}>
          {error.message}
        </Typography>
      ))}
    </div>
  );
};

export default ErrorMessages;
