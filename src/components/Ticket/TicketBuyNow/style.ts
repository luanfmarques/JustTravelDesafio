import styled from "styled-components";

export const BuyNowContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const BuyNowSelect = styled.select`
  border-radius: 3px;
  color: ${({ theme }) => theme.color.brandColorBlue};
  border: 1px solid ${({ theme }) => theme.color.brandColorBlue};
  outline: 0;
  font-size: 15px;
`;

export const TicketInputsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 14px;
  color: ${({ theme }) => theme.color.brandColorBlack};
`;

export const DatePicker = styled.input`
  width: 107px;
  border: 1px solid ${({ theme }) => theme.color.brandColorBlue};
  border-radius: 3px;
  color: ${({ theme }) => theme.color.brandColorBlue};
  outline: 0;
`;

export const SelectAndDatePickerContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const BuyNowInputsAndButton = styled.div`
  display: flex
  align-items: center;
  gap: 5px;
`;

export const AddCartContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;
  padding: 5px 5px 5px 8px;
`;
