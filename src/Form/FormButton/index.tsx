import React, { FunctionComponent } from "react";
import Button from "../../Button";

interface Props {
  isLoading?: boolean;
  onSubmit?: (form: any) => void;
  children: any;
}

const FormButton: FunctionComponent<Props> = ({
  isLoading = false,
  onSubmit,
  children,
}) => (
  <Button isLoading={isLoading} onClick={onSubmit}>
    {children}
  </Button>
);

export default FormButton;
