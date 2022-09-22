import styled from "styled-components";

export const SideFilterContainer = styled.div`
  min-width: 348px;
  max-width: 378px;
  box-shadow: 0px 2px 4px rgba(11, 31, 77, 0.08);
  padding: 24px;
  background-color: ${({ theme }) => theme.color.gray00};
  height: 506px;
`;

export const HeaderSideFilter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 12px;
  border-bottom: 1px solid ${({ theme }) => theme.color.gray10};
  margin-bottom: 24px;
  p {
    color: #3570bf;
    cursor: pointer;
  }
`;

export const PriceFilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding-bottom: 24px;
  border-bottom: 1px solid ${({ theme }) => theme.color.gray10};
  margin-bottom: 24px;
`;

export const FiltersContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 6px;
  row-gap: 8px;
`;

export const CustomLabel = styled.label`
  position: relative;
  color: #ced2db;
  font-weight: 450;
  font-size: 14px;
  line-height: 18px;
  height: 34px;
  width: calc(50% - 3px);
  border-radius: 2px;
  border: 1px solid #ced2db;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 170px;
`;

export const CustomRadio = styled.input`
  display: none;
  &:checked + ${CustomLabel} {
    position: relative;
    background-color: ${({ theme }) => theme.color.brandColorBlue};
    color: ${({ theme }) => theme.color.gray00};
    font-weight: 450;
    font-size: 14px;
    line-height: 18px;
    height: 34px;
    width: calc(50% - 3px);
    border-radius: 2px;
    border: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 170px;
  }
`;