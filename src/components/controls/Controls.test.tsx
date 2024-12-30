import { fireEvent, render, screen } from "@testing-library/react";
import { vi } from "vitest";
import { Controls } from "./Controls";
import { BuySell, Strength, TimeFrame } from "../../types/types";
import { BrowserRouter } from "react-router-dom";

describe("Controls", () => {
  it("should apply Timeframe select option", () => {
    const refreshSignals = vi.fn();

    render(<BrowserRouter><Controls refreshSignals={refreshSignals} /></BrowserRouter>);

    const timeframe = screen.getByTestId<HTMLSelectElement>("timeframe");

    fireEvent.change(timeframe, {
      target: { value: TimeFrame[TimeFrame.H4] },
    });

    expect(timeframe.value).toBe(TimeFrame[TimeFrame.H4]);
  });

  it("should apply Strength select option", () => {
    const refreshSignals = vi.fn();

    render(<BrowserRouter><Controls refreshSignals={refreshSignals} /></BrowserRouter>);

    const strength = screen.getByTestId<HTMLSelectElement>("strength");

    fireEvent.change(strength, {
      target: { value: Strength[Strength.MEDIUM] },
    });

    expect(strength.value).toBe(Strength[Strength.MEDIUM]);
  });

  it("should apply BuySell select option", () => {
    const refreshSignals = vi.fn();

    render(<BrowserRouter><Controls refreshSignals={refreshSignals} /></BrowserRouter>);

    const buysell = screen.getByTestId<HTMLSelectElement>("buysell");

    fireEvent.change(buysell, {
      target: { value: BuySell[BuySell.BUY] },
    });

    expect(buysell.value).toBe(BuySell[BuySell.BUY]);
  });

  it("should refresh signals", () => {
    const refreshSignals = vi.fn();

    render(<BrowserRouter><Controls refreshSignals={refreshSignals} /></BrowserRouter>);

    const refresh = screen.getByRole("button");

    fireEvent.click(refresh);

    expect(refreshSignals).toHaveBeenCalled();
  });
});
