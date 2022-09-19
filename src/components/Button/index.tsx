import React, { ReactNode } from "react";
import { ButtonDefault } from "./style";

interface ButtonProps {
  children?: ReactNode;
  onClick?: () => void;
  outlined?: boolean;
}

export const Button = ({ children, onClick, outlined }: ButtonProps) => {
  return (
    <ButtonDefault onClick={onClick} outlined={outlined}>
      {children}
    </ButtonDefault>
  );
};
