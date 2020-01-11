export enum ValidatorTypes {
  ANY = "ANY",
  EMAIL = "EMAIL",
  LENGTH = "LENGTH",
  JSON = "JSON",
  URL = "URL",
  VALUE = "VALUE",
}

export interface Validator {
  type: ValidatorTypes;
  message: string;
}

interface LengthValidator extends Validator {
  minLength: number;
}

interface ValueValidator extends Validator {
  value: string;
}

export type Validators = Validator | LengthValidator | ValueValidator;

/*
 * Validators
 */
const lengthValidator = (input: string, validator: LengthValidator): boolean =>
  input !== undefined && input.length >= validator.minLength;

const emailValidator = (email: string): boolean => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(email).toLowerCase());
};

const jsonValidator = (json: string): boolean => {
  try {
    JSON.parse(json);

    return true;
  } catch (error) {
    return false;
  }
};

const urlValidator = (url: string): boolean => {
  const re = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/;

  return re.test(String(url).toLowerCase());
};

const valueValidator = (input: string, validator: ValueValidator): boolean => {
  return input !== undefined && input === validator.value;
};

/*
 * Factory
 */
const validate = (
  type: ValidatorTypes,
  input: string,
  validator?: any,
): boolean => {
  if (type === ValidatorTypes.EMAIL) {
    return emailValidator(input);
  } else if (type === ValidatorTypes.LENGTH) {
    if (!validator) {
      throw new Error("No validator provided.");
    }

    return lengthValidator(input, validator);
  } else if (type === ValidatorTypes.JSON) {
    return jsonValidator(input);
  } else if (type === ValidatorTypes.URL) {
    return urlValidator(input);
  } else if (type === ValidatorTypes.VALUE) {
    return valueValidator(input, validator);
  }

  return false;
};

export default validate;
