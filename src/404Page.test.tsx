import React from "react";
import NotFoundPage, { Head } from "./pages/404";
import { render } from "./test-utils";

describe("NotFoundPage tests", () => {
  it("Must render NotFoundPage", () => {
    const { container } = render(<NotFoundPage />);

    expect(container).toBeTruthy;
  });

  it("Must render Head", () => {
    const y = { a: "just", b: "tests" };
    const { container } = render(
      <Head
        location={{
          pathname: "",
        }}
        params={y}
        data={{}}
        pageContext={{}}
      />
    );

    expect(container).toBeTruthy;
  });
});
