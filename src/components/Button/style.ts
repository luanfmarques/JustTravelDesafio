import styled from "styled-components";

type ButtonDefaultProps = {
  outlined?: boolean;
  disable?: boolean;
};

export const ButtonDefault = styled.button<ButtonDefaultProps>`
  box-sizing: border-box;
  border-radius: 3px;
  background-color: ${({ outlined, theme, disable }) =>
    outlined
      ? theme.color.gray00
      : disable
      ? theme.color.gray40
      : theme.color.brandColorBlue};
  display: flex;
  align-items: center;
  justify-content: center;
  border: ${({ outlined, theme }) =>
    outlined ? `solid 1px ${theme.color.brandColorBlue}` : "0"};
  color: ${({ outlined, theme }) =>
    outlined ? theme.color.support01 : theme.color.gray00};
  cursor: ${({ disable }) => (disable ? "default" : "pointer")};
  pointer-events: ${({ disable }) => disable && "none"};
`;
