import styled from "styled-components";

export const SearchContainer = styled.div`
  background-color: ${({ theme }) => theme.color.gray00};
`;

export const SearchContentContainer = styled.div`
  max-width: ${({ theme }) => theme.maxWidth}px;
  padding: 36px 60px;
  margin: auto;
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  border: 0.8px solid #ced2db;
  border-right: 0;
  width: fit-content;
  svg {
    margin: 0 12px;
  }
`;

export const CustomInput = styled.input`
  outline: 0;
  width: 374px;
  height: 22px;
  font-size: 16px;
  line-height: 22px;
  border: 0;
  color: ${({ theme }) => theme.color.brandColorBlack};
  font-weight: 450;
  height: 100%;
  &::placeholder {
    color: ${({ theme }) => theme.color.gray40};
  }
`;

export const InputAndSearchIcon = styled.div`
  display: flex;
  button {
    height: 48px;
    width: 48px;
    border-radius: 0;
    cursor: default;
  }
`;
