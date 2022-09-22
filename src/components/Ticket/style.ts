import styled from "styled-components";

export const ListTicketsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  width: 100%;
  max-height: calc(100vh - 270px);
  overflow: auto;
`;

export const TicketContainer = styled.div`
  display: flex;
  background: ${({ theme }) => theme.color.gray00};
  max-height: 233px;
`;

export const TicketContent = styled.div`
  display: flex;
  width: 100%;
  padding: 34px 24px;
  justify-content: space-between;
`;

export const TitleAndLocationContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 11px;
  text-transform: capitalize;
`;

export const LocationContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  p {
    color: ${({ theme }) => theme.color.support05};
  }
`;

export const LeftContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-right: 1px solid ${({ theme }) => theme.color.gray10};
  width: 100%;
`;

export const RightContentContainer = styled.div`
  margin-left: 24px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  min-width: 154px;
  a button {
    width: 100%;
  }
  button {
    min-height: 44px;
    font-size: 14px;
  }
`;

export const AboutContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
`;

export const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  span {
    font-size: 12px;
  }
`;

export const DiscountPriceContainer = styled.div`
  display: flex;
  gap: 3px;
  p {
    align-self: flex-start;
  }
  h2 {
    color: ${({ theme }) => theme.color.brandColorBlue};
  }
`;
