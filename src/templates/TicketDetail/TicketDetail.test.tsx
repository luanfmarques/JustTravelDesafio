import React from "react";
import TicketDetail from "./";
import { render } from "../../test-utils";
import { ticketMock } from "../../../__mocks__/ticketMock";
import { TicketsCartContext } from "../../contexts/Tickets-provider";
import { ticketContextMock } from "../../../__mocks__/ticketContextMock";

describe("TicketDetail tests", () => {
  it("Must render TicketDetail", () => {
    const { container } = render(
      <TicketsCartContext.Provider
        value={{ ...ticketContextMock, isLoading: false }}
      >
        <TicketDetail pageContext={{ ticket: ticketMock }} />
      </TicketsCartContext.Provider>
    );

    expect(container).toBeTruthy;
  });
});
