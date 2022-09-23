import React from "react";
import { Cart } from ".";
import { CartContext } from "../../../contexts/Cart-provider";
import { render } from "../../../test-utils";
import { cartContextMock } from "../../../contexts/__mocks__/cartContextMock";

describe("Cart tests", () => {
  it("Must render cart", () => {
    const { container } = render(<Cart />);

    expect(container).toBeInTheDocument;
  });

  it("Must render cart with cart modal open", () => {
    const { getByTestId } = render(
      <CartContext.Provider value={{ ...cartContextMock, isOpen: true }}>
        <Cart />
      </CartContext.Provider>
    );

    expect(getByTestId("cartModalContainer")).toBeInTheDocument;
  });
});
