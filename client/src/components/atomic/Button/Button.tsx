import { FC } from "react";
import { ButtonProps } from "./types";
import * as Styled from "./Button.styles";

const Button: FC<ButtonProps> = (props: ButtonProps): JSX.Element => {
  const { children, type, ...rest } = props;
  return (
    <Styled.ButtonWrapper type={type} {...rest}>
      {children}
    </Styled.ButtonWrapper>
  );
};

export default Button;
