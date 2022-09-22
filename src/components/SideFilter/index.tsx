import React, { useState } from "react";
import { formatCurrency } from "../../helpers";
import { Paragraph } from "../../styles/sharedStyles";
import { ReviewScore } from "./ReviewScore";
import {
  CustomLabel,
  CustomRadio,
  FiltersContainer,
  HeaderSideFilter,
  PriceFilterContainer,
  SideFilterContainer,
} from "./style";

type SideFilterProps = {
  selectedRadio: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
  resetFilter: () => void;
  pricesRange: { [key: string]: { min: number; max: number } };
};

const SideFilterPrice = ({
  selectedRadio,
  onChange,
  resetFilter,
  pricesRange,
}: SideFilterProps) => {
  const isRadioSelected = (value: string) => selectedRadio === value;

  const handleRadioClick = (e: React.ChangeEvent<HTMLInputElement>) =>
    onChange(e.currentTarget.value);

  return (
    <SideFilterContainer>
      <HeaderSideFilter>
        <h2>Filtro</h2>
        <Paragraph data-testid="resetFilters" onClick={resetFilter}>
          Limpar todos os filtros
        </Paragraph>
      </HeaderSideFilter>
      <PriceFilterContainer>
        <Paragraph type="medium" bold>
          Preço
        </Paragraph>
        <FiltersContainer>
          <CustomRadio
            type="radio"
            name="priceFilter"
            id="firstFilter"
            value="1"
            checked={isRadioSelected("1")}
            onChange={handleRadioClick}
          />
          <CustomLabel htmlFor="firstFilter">{`${formatCurrency(
            pricesRange["1"].min
          )} - ${formatCurrency(pricesRange["1"].max)}`}</CustomLabel>
          <CustomRadio
            type="radio"
            name="priceFilter"
            id="secondFilter"
            value="2"
            checked={isRadioSelected("2")}
            onChange={handleRadioClick}
            data-testid="secondRadio"
          />
          <CustomLabel htmlFor="secondFilter">{`${formatCurrency(
            pricesRange["2"].min
          )} - ${formatCurrency(pricesRange["2"].max)}`}</CustomLabel>
          <CustomRadio
            type="radio"
            name="priceFilter"
            id="thirdFilter"
            value="3"
            checked={isRadioSelected("3")}
            onChange={handleRadioClick}
          />
          <CustomLabel htmlFor="thirdFilter">{`${formatCurrency(
            pricesRange["3"].min
          )} - ${formatCurrency(pricesRange["4"].max)}`}</CustomLabel>
          <CustomRadio
            type="radio"
            name="priceFilter"
            id="fourthFilter"
            value="4"
            checked={isRadioSelected("4")}
            onChange={handleRadioClick}
          />
          <CustomLabel htmlFor="fourthFilter">{`${formatCurrency(
            pricesRange["4"].min
          )} - ${formatCurrency(pricesRange["4"].max)}`}</CustomLabel>
        </FiltersContainer>
      </PriceFilterContainer>
      <ReviewScore />
    </SideFilterContainer>
  );
};

export const SideFilter = React.memo(SideFilterPrice);
