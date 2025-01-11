import { render, screen } from "@testing-library/react";

import { SignalDetail } from './SignalDetail'
import { MemoryRouter } from "react-router-dom";

import { testdata } from "../../../tests/data/testdata";

describe("Signals Details", () => {
  const signal = testdata[0]
  it("will render all signal Details", () => {

    render(<MemoryRouter initialEntries={[{ pathname: `/signal`, state: { signal } }]}><SignalDetail /></MemoryRouter>);
    expect(screen.getByTestId("symbol-detail")).toBeInTheDocument();
    expect(screen.getByTestId("backward-link")).toBeInTheDocument();
    expect(screen.getByTestId("time-detail")).toBeInTheDocument();
    expect(screen.getByTestId("indicators")).toBeInTheDocument();
  });

  it("will render all the indicators", () => {
    render(<MemoryRouter initialEntries={[{ pathname: `/signal`, state: { signal } }]}><SignalDetail /></MemoryRouter>);
    expect(screen.getByTestId("indicators-grid")).toBeInTheDocument();
  });
});
