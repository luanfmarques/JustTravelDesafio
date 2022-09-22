import styled from "styled-components";

type TagContainerProps = {
  white?: boolean;
};

export const TagContainer = styled.div<TagContainerProps>`
  background-color: ${({ white, theme }) =>
    white ? theme.color.gray00 : theme.color.green};
  border-radius: 15px;
  color: ${({ white, theme }) =>
    white ? theme.color.brandColorBlack : theme.color.gray00};
  font-size: ${({ white }) => (white ? "12px" : "10px")};
  line-height: ${({ white }) => (white ? "16" : "12px")};
  padding: 4px 12px;
  max-height: 24px;
  display: flex;
  align-items: center;
  box-shadow: ${({ theme }) => theme.boxShadow.m};
  width: fit-content;
`;
