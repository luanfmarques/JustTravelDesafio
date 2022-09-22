import styled from "styled-components";

export const ContentContainer = styled.div`
  display: flex;
  max-width: ${({ theme }) => theme.maxWidth}px;
  gap: 43px;
  padding: 36px 60px 0px 60px;
  margin: auto;
`;
