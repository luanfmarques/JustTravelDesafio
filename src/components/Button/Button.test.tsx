import React from "react";
import { render } from "../../test-utils";
import { Button } from ".";
import { theme } from "../../styles/theme";

describe("Button tests", () => {
  it("Must render Button", () => {
    const text = "Lorem";
    const { container, getByText } = render(<Button>{text}</Button>);

    expect(container).toBeInTheDocument;
    expect(getByText(text)).toBeTruthy;
  });

  it("Must render outlined Button", () => {
    const { getByTestId } = render(<Button outlined />);

    expect(getByTestId("Button")).toBeInTheDocument;
    expect(getByTestId("Button")).toHaveStyle({
      border: `1px solid ${theme.color.brandColorBlue}`,
    });
  });

  it("Must render disabled Button", () => {
    const { getByTestId } = render(<Button disable />);

    expect(getByTestId("Button")).toBeInTheDocument;
    expect(getByTestId("Button")).toHaveStyle({
      "background-color": theme.color.gray40,
      "pointer-events": "none",
    });
  });
});
