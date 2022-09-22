import React, { useState } from "react";
import { Button } from "../../Button";
import {
  AddCartContainer,
  BuyNowContainer,
  BuyNowInputsAndButton,
  BuyNowSelect,
  DatePicker,
  SelectAndDatePickerContainer,
  TicketInputsContainer,
} from "./style";
import Shopping from "../../../assets/shopping.svg";
import Cart from "../../../assets/cart.svg";
import {
  dateIsValid,
  isDateAfterMaxDate,
  isDateBeforeToday,
  reformatDate,
} from "../../../helpers";
import { useCartContext } from "../../../contexts/Cart-provider";

type ticketData = {
  quantity: number;
  date: string;
};

type TicketBuyNowProps = {
  itemId: string;
};

export const TicketBuyNow = ({ itemId }: TicketBuyNowProps) => {
  const { setItemToCart } = useCartContext();
  const today = new Date().toISOString().split("T")[0];
  const maxDate = new Date("2025-12");

  const [openOptions, setOpenOptions] = useState(false);
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

  const handleChangeDate = (event: React.ChangeEvent<HTMLInputElement>) => {
    let value = new Date(event.target.value);
    dateIsValid(value) &&
      setTicketData({
        ...ticketData,
        date: reformatDate(value.toISOString().split("T")[0]),
      });
    isDateBeforeToday(
      new Date(reformatDate(value.toISOString().split("T")[0], true))
    ) || isDateAfterMaxDate(value, maxDate)
      ? setActiveButton(false)
      : setActiveButton(true);
  };

  const handleAddToCart = () => {
    setItemToCart(itemId, ticketData.date, ticketData.quantity);
    setTicketData({ quantity: 1, date: reformatDate(today) });
    setOpenOptions(false);
  };

  const options = [1, 2, 3, 4, 5, 6, 7, 8];

  return !openOptions ? (
    <Button onClick={() => setOpenOptions(!openOptions)}>
      <BuyNowContainer>
        Comprar <Shopping />
      </BuyNowContainer>
    </Button>
  ) : (
    <BuyNowInputsAndButton>
      <SelectAndDatePickerContainer>
        <TicketInputsContainer>
          Ingressos:
          <BuyNowSelect
            data-testid="BuyNowSelect"
            onChange={(e) => handleChangeQuantity(e)}
          >
            {options.map((option) => (
              <option value={option} key={option}>
                {option}
              </option>
            ))}
          </BuyNowSelect>
        </TicketInputsContainer>
        <TicketInputsContainer>
          Data:
          <DatePicker
            type="date"
            min={today}
            max={maxDate.toISOString().split("T")[0]}
            defaultValue={today}
            onChange={(e) => handleChangeDate(e)}
            data-testid="BuyNowDatePicker"
          />
        </TicketInputsContainer>
      </SelectAndDatePickerContainer>
      <Button disable={!activeButton} onClick={() => handleAddToCart()}>
        <AddCartContainer>
          Add <Cart />
        </AddCartContainer>
      </Button>
    </BuyNowInputsAndButton>
  );
};
