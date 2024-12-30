import { render, screen } from "@testing-library/react";

import SignalCard from "./SignalCard";

import { testdata } from "../../../tests/data/testdata";

describe("Signals Card", () => {
  const signal = testdata
  it("will render a signal Card", () => {

    render(<SignalCard data={testdata[0]} />);
    expect(screen.getByTestId("cardsymbol")).toBeInTheDocument();
    expect(screen.getByTestId("cardtime")).toBeInTheDocument();
  });
});
