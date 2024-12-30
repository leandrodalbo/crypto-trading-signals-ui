import { render, screen } from "@testing-library/react";

import MainGrid from "./MainGrid";

import { testdata } from "../../../tests/data/testdata";
import { BrowserRouter } from "react-router-dom";

describe("Signals Details", () => {

  it("will render all signal Details", () => {

    render(<BrowserRouter><MainGrid data={testdata} /></BrowserRouter>);
    expect(screen.getByTestId("cards-grid")).toBeInTheDocument();
  });
});
