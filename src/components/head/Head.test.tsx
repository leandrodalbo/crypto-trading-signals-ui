import { render, screen, fireEvent } from "@testing-library/react";
import { vi } from "vitest";
import { Head } from "./Head";

describe("Table Head Component", () => {
  it("should render a table head", () => {
    render(<Head sortByDate={vi.fn()} sortBySymbol={vi.fn()} />);
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

  it("should apply sort  by symbol", () => {
    const sortBySymbol = vi.fn();

    render(<Head sortByDate={vi.fn()} sortBySymbol={sortBySymbol} />);

    const symbolsort = screen.getByTestId<HTMLSelectElement>("symbolsort");

    fireEvent.click(symbolsort);

    expect(sortBySymbol).toHaveBeenCalled();
  });

  it("should apply sort  by date", () => {
    const sortByDate = vi.fn();

    render(<Head sortByDate={sortByDate} sortBySymbol={vi.fn()} />);

    const datesort = screen.getByTestId<HTMLSelectElement>("datesort");

    fireEvent.click(datesort);

    expect(sortByDate).toHaveBeenCalled();
  });
});
