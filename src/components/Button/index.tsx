import React, { ReactNode } from "react";
import { ButtonDefault } from "./style";

interface ButtonProps {
  children?: ReactNode;
  onClick?: () => void;
  outlined?: boolean;
  disable?: boolean;
}

export const Button = ({
  children,
  onClick,
  outlined,
  disable,
}: ButtonProps) => {
  return (
    <ButtonDefault
      data-testid="Button"
      onClick={onClick}
      outlined={outlined}
      disable={disable}
    >
      {children}
    </ButtonDefault>
  );
};
