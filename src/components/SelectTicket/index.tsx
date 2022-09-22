import React, { useState, useCallback } from "react";
import Profile from "../../assets/profile.svg";
import ArrowDown from "../../assets/arrowDown.svg";
import {
  addLeadingZeros,
  dateIsValid,
  formatCurrency,
  isDateAfterMaxDate,
  isDateBeforeToday,
  reformatDate,
} from "../../helpers";
import { useCartContext } from "../../contexts/Cart-provider";
import {
  ArrowDownContainer,
  DatePickerLabel,
  SelectContainer,
  SelectHeader,
  SelectTicketContainer,
  SelectTicketInput,
  SelectTicketInputDate,
  TicketAndDateContainer,
  TotalLabelAndValue,
} from "./style";
import { Paragraph } from "../../styles/sharedStyles";
import { Button } from "../Button";

type ticketData = {
  quantity: number;
  date: string;
};

type TicketBuyNowProps = {
  itemId: string;
  itemPrice: number;
};

export const SelectTicket = ({ itemId, itemPrice }: TicketBuyNowProps) => {
  const { setItemToCart } = useCartContext();
  const today = new Date().toISOString().split("T")[0];
  const maxDate = new Date("2025-12");

  const [activeButton, setActiveButton] = useState(true);
  const [ticketData, setTicketData] = useState<ticketData>({
    quantity: 1,
    date: reformatDate(today),
  });

  const handleChangeQuantity = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    let value = event.target.value;
    setTicketData({ ...ticketData, quantity: parseInt(value) });
  };

  const handleChangeDate = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      let value = new Date(event.target.value);
      if (dateIsValid(value)) {
        setTicketData({
          ...ticketData,
          date: reformatDate(value.toISOString().split("T")[0]),
        });
        setActiveButton(
          !(
            isDateBeforeToday(
              new Date(reformatDate(value.toISOString().split("T")[0], true))
            ) || isDateAfterMaxDate(value, maxDate)
          )
        );
      } else {
        setActiveButton(false);
      }
    },
    []
  );

  const handleAddToCart = () => {
    setItemToCart(itemId, ticketData.date, ticketData.quantity);
    setTicketData({ quantity: 1, date: reformatDate(today) });
  };

  const optionsValue = [1, 2, 3, 4, 5, 6, 7, 8];

  const itemTotal = ticketData.quantity * itemPrice;

  return (
    <SelectTicketContainer>
      <TicketAndDateContainer>
        <SelectContainer>
          <SelectHeader>
            <Profile />
            <Paragraph type="medium" bold>
              Ingressos
            </Paragraph>
            <ArrowDownContainer>
              <ArrowDown />
            </ArrowDownContainer>
          </SelectHeader>
          <SelectTicketInput
            data-testid="SelectTicketInput"
            onChange={(e) => handleChangeQuantity(e)}
          >
            {optionsValue.map((option) => (
              <option value={option} key={option}>
                {`${addLeadingZeros(option, 2)} ${
                  option === 1 ? "Ingresso" : "Ingressos"
                }`}
              </option>
            ))}
          </SelectTicketInput>
        </SelectContainer>
        <DatePickerLabel>
          Data:
          <SelectTicketInputDate
            type="date"
            min={today}
            max={maxDate.toISOString().split("T")[0]}
            defaultValue={today}
            onChange={(e) => handleChangeDate(e)}
            data-testid="SelectTicketInputDate"
          />
        </DatePickerLabel>
      </TicketAndDateContainer>
      <TotalLabelAndValue>
        <Paragraph type="medium" bold>
          Valor total
        </Paragraph>
        <h2>{formatCurrency(itemTotal)}</h2>
      </TotalLabelAndValue>
      <Button disable={!activeButton} onClick={handleAddToCart}>
        Comprar Ingresso
      </Button>
    </SelectTicketContainer>
  );
};
