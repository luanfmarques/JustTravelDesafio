import React from "react";
import { Header } from ".";
import { render } from "../../test-utils";

describe("Header tests", () => {
  it("Must render Header", () => {
    const { container } = render(<Header />);

    expect(container).toBeInTheDocument;
  });
});
