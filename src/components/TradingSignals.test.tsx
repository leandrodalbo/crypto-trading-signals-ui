import { render, screen } from "@testing-library/react";

import TradingSignals from "./TradingSignals";

describe("Trading Signals", () => {
  it("renders the table", () => {
    render(<TradingSignals />);
    expect(screen.getByTestId("tradingsignals")).toBeInTheDocument();
    expect(screen.getByTestId("headcomponent")).toBeInTheDocument();
  });
});
