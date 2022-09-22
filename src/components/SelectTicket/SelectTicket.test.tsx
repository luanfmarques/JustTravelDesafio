import React from "react";
import { SelectTicket } from ".";
import { cartContextMock } from "../../../__mocks__/cartContextMock";
import { CartContext } from "../../contexts/Cart-provider";
import { render, fireEvent } from "../../test-utils";

describe("SelectTicket tests", () => {
  it("Must SelectTicket Layout, select quantity, select a date and click in confirm", () => {
    const cb = jest.fn();
    const { container, getByTestId } = render(
      <CartContext.Provider value={{ ...cartContextMock, setItemToCart: cb }}>
        <SelectTicket itemId="1" itemPrice={100} />
      </CartContext.Provider>
    );

    expect(container).toBeTruthy;
    fireEvent.change(getByTestId("SelectTicketInput"), {
      target: { value: 2 },
    });
    fireEvent.change(getByTestId("SelectTicketInputDate"), {
      target: { value: "10/10/2022" },
    });
    expect(cb).toBeCalledTimes(0);
    fireEvent.click(getByTestId("Button"));
    expect(cb).toBeCalledTimes(1);
  });
});
