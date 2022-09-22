import React from "react";
import { CartItem } from ".";
import { CartContext } from "../../../../../contexts/Cart-provider";
import { TicketsCartContext } from "../../../../../contexts/Tickets-provider";
import { render, fireEvent } from "../../../../../test-utils";
import { cartContextMock } from "../../../../../../__mocks__/cartContextMock";
import { ticketContextMock } from "../../../../../../__mocks__/ticketContextMock";
import { ticketMock } from "../../../../../../__mocks__/ticketMock";
import { ITicket } from "../../../../../interfaces/ITicket";

function customRender(changeList: ITicket[]) {
  return render(
    <TicketsCartContext.Provider
      value={{ ...ticketContextMock, listTickets: changeList }}
    >
      <CartContext.Provider
        value={{
          ...cartContextMock,
          isOpen: true,
        }}
      >
        <CartItem id="1" date="10/10/2022" position={0} quantity={2} />
      </CartContext.Provider>
    </TicketsCartContext.Provider>
  );
}

describe("CartItem tests", () => {
  it("Must render CartItem", () => {
    const { container, getByTestId } = customRender([ticketMock]);

    expect(container).toBeTruthy;
    fireEvent.click(getByTestId("thrash"));
  });

  it("Must render CartItem without tickets stored in provider", () => {
    const { container } = customRender([]);

    expect(container).toBeTruthy;
  });
});
