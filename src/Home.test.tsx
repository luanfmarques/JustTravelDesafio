import React from "react";
import { ticketContextMock } from "../__mocks__/ticketContextMock";
import { ticketMock } from "../__mocks__/ticketMock";
import { TicketsCartContext } from "./contexts/Tickets-provider";
import Home from "./pages/index";
import { render, fireEvent } from "./test-utils";

describe("Home tests", () => {
  it("Must render Home and click to reset filters", () => {
    const { container, getByTestId } = render(
      <TicketsCartContext.Provider
        value={{
          ...ticketContextMock,
          listTickets: [
            ticketMock,
            { ...ticketMock, id: "2" },
            { ...ticketMock, id: "3" },
          ],
          isFavorite: [{ id: "1" }],
        }}
      >
        <Home />
      </TicketsCartContext.Provider>
    );

    expect(container).toBeTruthy;
    fireEvent.click(getByTestId("resetFilters"));
  });
});
