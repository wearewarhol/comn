import React, {
  FunctionComponent,
  useState,
  useCallback,
  useEffect,
  ReactElement,
} from "react";
import classnames from "classnames";
import { Validator, Validators } from "../validators";
import Label from "../Label";
import HelpText from "../HelpText";
import ErrorMessages from "../ErrorMessages";
import handleBlur from "./utils/handleBlur";
import useStyles from "./index.styles";

export enum Size {
  small = "small",
  medium = "medium",
  large = "large",
}

export type RenderProps = {
  errors?: ValidatorWithState[];
  shouldShowErrors?: boolean;
  value?: string;
  onChange: (event: any) => any;
};

type Props = {
  className?: string;
  size?: Size;
  label?: string | ReactElement | ReactElement[];
  id?: string;
  shouldShowErrors?: boolean;
  helpText?: string;
  validators?: Validators[];
  value?: string;
  hasCheckedState?: boolean;
  onBlur?: (event: any, hasError: boolean) => void;
  render: (props: RenderProps) => ReactElement;
};

export interface ValidatorWithState extends Validator {
  isValid: boolean;
}

const Field: FunctionComponent<Props> = ({
  className,
  size,
  label,
  id,
  shouldShowErrors,
  helpText,
  validators,
  value,
  onBlur,
  render,
  hasCheckedState = false,
}) => {
  const [currentValue, setCurrentValue] = useState<string | undefined>(value);
  const [errors, setErrors] = useState<ValidatorWithState[]>();
  const classes = useStyles();
  const onBlurInternal = useCallback(
    handleBlur({
      validators,
      setErrors,
      onBlur,
      hasCheckedState,
    }),
    [validators, setErrors, onBlur],
  );

  useEffect(() => {
    onBlurInternal({
      target: {
        value: currentValue,
        checked: currentValue,
      },
    });
  }, [currentValue, onBlurInternal]);

  return (
    <div
      className={classnames(classes.root, className, {
        [classes.sizeSmall]: size === "small",
      })}
    >
      {label && <Label htmlFor={id}>{label}</Label>}

      {render({
        errors,
        shouldShowErrors,
        value: currentValue,
        onChange: (event: any) => setCurrentValue(event.target.value),
      })}

      <ErrorMessages shouldShowErrors={shouldShowErrors} errors={errors} />

      {helpText && <HelpText>{helpText}</HelpText>}
    </div>
  );
};

export default Field;
