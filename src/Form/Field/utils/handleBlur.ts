import validate, { Validator, Validators } from "../../validators";
import { ValidatorWithState } from "../../Field";

interface BlurParams {
  validators?: Validators[];
  setErrors: (param: any) => void;
  onBlur?: (event: any, hasError: boolean) => void;
}

const handleBlur = ({ validators, setErrors, onBlur }: BlurParams) => (
  event: any,
) => {
  const { value } = event.target;

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
