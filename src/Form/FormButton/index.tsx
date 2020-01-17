import React, { FunctionComponent } from "react";
import Button, { Props as ButtonProps } from "../../Button";

interface Props extends ButtonProps {
  onSubmit?: (form: any) => void;
  children: any;
}

const FormButton: FunctionComponent<Props> = ({
  onSubmit,
  children,
  ...props
}) => (
  <Button onClick={onSubmit} {...props}>
    {children}
  </Button>
);

export default FormButton;
