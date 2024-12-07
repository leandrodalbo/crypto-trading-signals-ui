import { render, screen } from "@testing-library/react";

import { Head } from "./Head";

describe("Table Head Component", () => {
  it("should render a table head", () => {
    render(<Head />);
    expect(screen.getByText("SYMBOL")).toBeInTheDocument();
    expect(screen.getByText("TIME")).toBeInTheDocument();
    expect(screen.getByText("EMA")).toBeInTheDocument();
    expect(screen.getByText("SMA")).toBeInTheDocument();
    expect(screen.getByText("MACD")).toBeInTheDocument();
    expect(screen.getByText("LINDA MACD")).toBeInTheDocument();
    expect(screen.getByText("BOLLINGER BANDS")).toBeInTheDocument();
    expect(screen.getByText("OBV")).toBeInTheDocument();
    expect(screen.getByText("RSI")).toBeInTheDocument();
    expect(screen.getByText("RSI DIVERGENCE")).toBeInTheDocument();
    expect(screen.getByText("STOCHASTIC")).toBeInTheDocument();
    expect(screen.getByText("ENGULFING CANDLE")).toBeInTheDocument();
  });
});
