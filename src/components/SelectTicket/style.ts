import styled from "styled-components";
import { Button } from "../Button";

export const SelectTicketInput = styled.select`
  height: 100%;
  width: 100%;
  border: 0;
  min-height: 60px;
  padding-left: 34px;
  outline: 0;
  appearance: none;
  color: ${({ theme }) => theme.color.gray40};
  font-weight: 450;
  font-size: 16px;
  line-height: 22px;
  position: relative;
  padding-top: 17px;
  background-color: transparent;
  z-index: 2;
`;

export const SelectContainer = styled.div`
  position: relative;
`;

export const SelectHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  position: absolute;
  top: 0px;
  z-index: 1;
  width: 100%;
`;

export const ArrowDownContainer = styled.div`
  position: absolute;
  right: 0;
  top: 17px;
`;

export const DatePickerLabel = styled.label`
  margin-left: 34px;
  font-size: 16px;
  line-height: 22px;
  font-weight: 700;
`;

export const SelectTicketInputDate = styled.input`
  border: 0;
  padding: 10px;
  color: ${({ theme }) => theme.color.gray40};
  outline: 0;
`;

export const TicketAndDateContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid ${({ theme }) => theme.color.gray10};
  padding-bottom: 10px;
  margin-bottom: 24px;
`;

export const TotalLabelAndValue = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  h2 {
    color: ${({ theme }) => theme.color.brandColorBlue};
  }
`;

export const SelectTicketContainer = styled.div`
  button {
    min-height: 58px;
    width: 100%;
  }
`;
