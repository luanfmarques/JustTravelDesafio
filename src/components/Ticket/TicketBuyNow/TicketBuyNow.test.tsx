import React from "react";
import { TicketBuyNow } from ".";
import { cartContextMock } from "../../../contexts/__mocks__/cartContextMock";
import { CartContext } from "../../../contexts/Cart-provider";
import { render, fireEvent } from "../../../test-utils";

describe("TicketBuyNow tests", () => {
  it("Must render TicketBuyNow, click in 'Comprar', select quantity, pick a date and click in 'Add'", () => {
    const cb = jest.fn();
    const { container, getByText, getByTestId } = render(
      <CartContext.Provider value={{ ...cartContextMock, setItemToCart: cb }}>
        <TicketBuyNow itemId="1" />
      </CartContext.Provider>
    );

    expect(container).toBeTruthy;
    fireEvent.click(getByText("Comprar"));
    fireEvent.change(getByTestId("BuyNowSelect"), { target: { value: "1" } });
    fireEvent.change(getByTestId("BuyNowDatePicker"), {
      target: { value: "2022-10-10" },
    });
    expect(cb).toHaveBeenCalledTimes(0);
    fireEvent.click(getByText("Add"));
    expect(cb).toHaveBeenCalledTimes(1);
  });
});
