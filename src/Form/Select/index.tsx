import React, { FunctionComponent } from "react";
import classnames from "classnames";
import Icon, { IconNames } from "../../Icon";
import Field, { Size } from "../Field";
import { Validators } from "../validators";
import useStyles from "./index.styles";

type Props = {
  id: string;
  label: string;
  isDisabled?: boolean;
  className?: string;
  helpText?: string;
  value?: string;
  validators?: Validators[];
  shouldShowErrors?: boolean;
  onBlur?: (event: any) => void;
  size?: Size;
};

const Select: FunctionComponent<Props> = ({
  id,
  label,
  isDisabled = false,
  onBlur,
  helpText,
  value,
  validators,
  className,
  children,
  size,
  shouldShowErrors,
}) => {
  const classes = useStyles();

  return (
    <Field
      id={id}
      label={label}
      className={className}
      size={size}
      helpText={helpText}
      value={value}
      onBlur={onBlur}
      validators={validators}
      shouldShowErrors={shouldShowErrors}
      render={({ errors, shouldShowErrors, value, onChange }) => (
        <div className={classes.element}>
          <select
            id={id}
            disabled={isDisabled}
            onChange={onChange}
            className={classnames(classes.select, {
              [classes.hasError]:
                shouldShowErrors && errors && errors.length > 0,
            })}
            value={value}
          >
            <option></option>
            {children}
          </select>

          <Icon
            icon={IconNames.select}
            size="medium"
            className={classes.icon}
          />
        </div>
      )}
    />
  );
};

export default Select;
