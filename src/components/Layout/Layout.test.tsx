import React from "react";
import Layout from ".";
import { render } from "../../test-utils";

describe("Layout tests", () => {
  it("Must render Layout", () => {
    const { container } = render(<Layout />);

    expect(container).toBeTruthy;
  });
});
