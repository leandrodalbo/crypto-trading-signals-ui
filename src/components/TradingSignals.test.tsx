import { render, screen } from "@testing-library/react";

import TradingSignals from "./TradingSignals";

describe("Trading Signals", () => {
  it("renders the main component", () => {
    render(<TradingSignals />);
    expect(screen.getByTestId("tradingsignals")).toBeInTheDocument();
  });
});
