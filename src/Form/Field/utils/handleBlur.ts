import validate, { Validator, Validators } from "../../validators";
import { ValidatorWithState } from "../../Field";

interface BlurParams {
  validators?: Validators[];
  setErrors: (param: any) => void;
  onBlur?: (event: any, hasError: boolean) => void;
  hasCheckedState: boolean;
}

const handleBlur =
  ({ validators, setErrors, onBlur, hasCheckedState }: BlurParams) =>
  (event: any) => {
    const value = hasCheckedState ? event.target.checked : event.target.value;

    if (validators) {
      const validatorStates = validators.map(
        (validator: Validator): ValidatorWithState => {
          return {
            ...validator,
            isValid: validate(validator.type, value, validator),
          };
        },
      );

      const invalidStates = validatorStates.filter(
        ({ isValid }) => isValid !== true,
      );

      setErrors(invalidStates);

      if (invalidStates.length > 0) {
        return onBlur && onBlur(event, true);
      }
    }

    return onBlur && onBlur(event, false);
  };

export default handleBlur;
