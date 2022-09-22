import React from "react";
import { SideFilter } from ".";
import { render, fireEvent } from "../../test-utils";

describe("SideFilter tests", () => {
  it("Must render SideFilter and click in the '10 to 750' filter", () => {
    const cb = jest.fn();
    const { container, getByTestId } = render(
      <SideFilter
        selectedRadio="1"
        onChange={cb}
        pricesRange={{
          "1": { min: 10, max: 1000 },
          "2": { min: 10, max: 750 },
          "3": { min: 10, max: 500 },
          "4": { min: 10, max: 250 },
        }}
        resetFilter={jest.fn}
      />
    );

    expect(container).toBeTruthy;
    expect(cb).toBeCalledTimes(0);
    fireEvent.click(getByTestId("secondRadio"));
    expect(cb).toBeCalledTimes(1);
  });
});
