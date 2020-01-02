import classnames from "classnames";
import React, { FunctionComponent } from "react";
import { Validators } from "../validators";
import Field, { Size } from "../Field";
import useStyles from "./index.styles";

interface Props {
  id: string;
  label: string;
  isDisabled?: boolean;
  value?: string;
  currentValue?: string;
  helpText?: string;
  inputProps?: any;
  validators?: Validators[];
  shouldShowErrors?: boolean;
  className?: string;
  onChange?: (event: any, hasError: boolean) => void;
  onBlur?: (event: any) => void;
  size?: Size;
  hasErrors?: boolean;
  rows?: number;
}

const Checkbox: FunctionComponent<Props> = ({
  id,
  label,
  isDisabled = false,
  value,
  helpText,
  inputProps,
  onBlur,
  className,
  validators,
  shouldShowErrors,
  size,
  rows,
}) => {
  const classes = useStyles();

  return (
    <Field
      id={id}
      className={classnames(className, classes.checkboxField)}
      size={size}
      label={label}
      shouldShowErrors={shouldShowErrors}
      helpText={helpText}
      validators={validators}
      onBlur={onBlur}
      value={value}
      render={({ errors, shouldShowErrors, onChange, value }) => (
        <input
          id={id}
          type="checkbox"
          className={classnames(classes.checkbox, {
            [classes.disabled]: isDisabled,
            [classes.hasError]: shouldShowErrors && errors && errors.length > 0,
          })}
          disabled={isDisabled}
          value={value}
          onChange={onChange}
          rows={rows}
          {...inputProps}
        />
      )}
    />
  );
};

export default Checkbox;
