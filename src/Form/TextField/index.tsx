import classnames from "classnames";
import React, { ReactElement, FunctionComponent } from "react";
import { Validators } from "../validators";
import Field, { Size } from "../Field";
import useStyles from "./index.styles";

const Element: FunctionComponent<any> = ({ rows, ...props }) =>
  rows ? <textarea {...props} rows={rows} /> : <input {...props} />;

interface Props {
  id: string;
  label: string | ReactElement | ReactElement[];
  type?: string;
  isDisabled?: boolean;
  value?: string;
  currentValue?: string;
  helpText?: string | ReactElement | ReactElement[];
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

const TextField: FunctionComponent<Props> = ({
  id,
  label,
  type = "text",
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
      className={className}
      size={size}
      label={label}
      shouldShowErrors={shouldShowErrors}
      helpText={helpText}
      validators={validators}
      onBlur={onBlur}
      value={value}
      render={({ errors, shouldShowErrors, onChange, value }) => (
        <Element
          id={id}
          type={type}
          className={classnames(classes.input, {
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

export default TextField;
