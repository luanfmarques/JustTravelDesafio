import React from "react";
import { Ticket } from ".";
import { ticketContextMock } from "../../../__mocks__/ticketContextMock";
import { ticketMock } from "../../../__mocks__/ticketMock";
import { TicketsCartContext } from "../../contexts/Tickets-provider";
import { render, fireEvent } from "../../test-utils";

describe("Ticket tests", () => {
  it("Must render Ticket and click in heart to favorite", () => {
    const cb = jest.fn();
    const { container, getByTestId } = render(
      <TicketsCartContext.Provider
        value={{ ...ticketContextMock, toggleItemFavorite: cb }}
      >
        <Ticket favoritedList={[{ id: "1" }]} ticketData={ticketMock} />
      </TicketsCartContext.Provider>
    );

    expect(container).toBeTruthy;
    expect(cb).toHaveBeenCalledTimes(0);
    fireEvent.click(getByTestId("heart"));
    expect(cb).toHaveBeenCalledTimes(1);
  });
});
