import React from "react";
import { CartModal } from ".";
import { CartContext } from "../../../../contexts/Cart-provider";
import { TicketsCartContext } from "../../../../contexts/Tickets-provider";
import { render } from "../../../../test-utils";
import { cartContextMock } from "../../../../contexts/__mocks__/cartContextMock";
import { ticketContextMock } from "../../../../contexts/__mocks__/ticketContextMock";
import { ticketMock } from "../../../../contexts/__mocks__/ticketMock";

describe("Cart tests", () => {
  it("Must render cart with cart modal open", () => {
    const { getByText } = render(
      <TicketsCartContext.Provider
        value={{ ...ticketContextMock, listTickets: [ticketMock] }}
      >
        <CartContext.Provider
          value={{
            ...cartContextMock,
            cartItems: [{ id: "1", quantity: 1, date: "10/10/2022" }],
            isOpen: true,
          }}
        >
          <CartModal />
        </CartContext.Provider>
      </TicketsCartContext.Provider>
    );

    expect(getByText(`${ticketMock.name} - 10/10/2022`)).toBeTruthy;
  });
});
