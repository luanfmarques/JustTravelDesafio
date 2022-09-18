import styled from "styled-components";

type ParagraphProps = {
  type?: "large" | "medium" | "small";
  bold?: boolean;
};

export const Paragraph = styled.p<ParagraphProps>`
  font-size: ${({ type }) =>
    type === "large"
      ? "20px"
      : type === "medium"
      ? "16px"
      : type === "small"
      ? "12px"
      : ""};
  line-height: ${({ type }) =>
    type === "large"
      ? "26px"
      : type === "medium"
      ? "22px"
      : type === "small"
      ? "16px"
      : ""};
  font-weight: ${({ bold, theme }) => bold && theme.fontWeight.bold};
`;
