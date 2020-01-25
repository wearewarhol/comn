import React, { FunctionComponent } from "react";
import Button, { Props as ButtonProps } from "../../Button";

interface Props extends ButtonProps {
  children: any;
}

const FormButton: FunctionComponent<Props> = ({ children, ...props }) => (
  <Button inputProps={{ type: "submit" }} {...props}>
    {children}
  </Button>
);

export default FormButton;
