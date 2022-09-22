import styled from "styled-components";

type ParagraphProps = {
  type?: "large" | "medium" | "small";
  bold?: boolean;
  color?: "support05" | "gray50" | "gray40" | "gray10" | "brandColorBlue";
};

export const Paragraph = styled.p<ParagraphProps>`
  font-size: ${({ type }) => {
    if (type === "large") return "20px";
    if (type === "medium") return "16px";
    if (type === "small") return "12px";
  }};
  line-height: ${({ type }) => {
    if (type === "large") return "26px";
    if (type === "medium") return "22px";
    if (type === "small") return "16px";
  }};
  font-weight: ${({ bold, theme }) => bold && theme.fontWeight.bold};
  color: ${({ color, theme }) => {
    if (color === "support05") return theme.color.support05;
    if (color === "gray50") return theme.color.gray50;
    if (color === "gray40") return theme.color.gray40;
    if (color === "gray10") return theme.color.gray10;
    if (color === "brandColorBlue") return theme.color.brandColorBlue;
  }};
`;
