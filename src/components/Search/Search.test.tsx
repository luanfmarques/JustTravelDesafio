import React from "react";
import { Search } from ".";
import { render, fireEvent } from "../../test-utils";

describe("Search tests", () => {
  it("Must render Search and type 'teste'", () => {
    const cb = jest.fn();
    const { container, getByTestId } = render(<Search onChange={cb} />);

    expect(container).toBeTruthy;
    expect(cb).toBeCalledTimes(0);
    fireEvent.change(getByTestId("CustomInput"), {
      target: { value: "teste" },
    });
    expect(cb).toBeCalledTimes(1);
  });
});
