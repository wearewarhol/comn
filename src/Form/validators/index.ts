export enum ValidatorTypes {
  ANY = "ANY",
  EMAIL = "EMAIL",
  LENGTH = "LENGTH",
  JSON = "JSON",
  URL = "URL",
}

export interface Validator {
  type: ValidatorTypes;
  message: string;
}

interface LengthValidator extends Validator {
  minLength: number;
}

export type Validators = Validator | LengthValidator;

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
  }

  return false;
};

export default validate;
