import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.color.gray00};
  border-bottom: 1px solid ${({ theme }) => theme.color.gray10};
`;

export const HeaderContentContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 30px 60px;
  max-width: ${({ theme }) => `${theme.maxWidth}px`};
`;

export const RightContentContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const InfoContainer = styled(RightContentContainer)`
  border-right: 1px solid ${({ theme }) => theme.color.gray10};
  gap: 16px;
  margin-right: 16px;
  svg {
    cursor: pointer;
    margin-right: 16px;
  }
`;

export const FlagContainer = styled.div`
  cursor: pointer;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const ProfileContainer = styled.div`
  display: flex;
  align-items: end;
  gap: 4px;
`;
