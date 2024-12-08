import { fireEvent, render, screen } from "@testing-library/react";
import { vi } from "vitest";
import { Controls } from "./Controls";
import { BuySell, Strength, TimeFrame } from "../../types/types";

describe("Controls", () => {
  it("should apply Timeframe select option", () => {
    const refreshSignals = vi.fn();

    render(<Controls refreshSignals={refreshSignals} />);

    const timeframe = screen.getByTestId<HTMLSelectElement>("timeframe");

    fireEvent.change(timeframe, {
      target: { value: TimeFrame[TimeFrame.H4] },
    });

    expect(timeframe.value).toBe(TimeFrame[TimeFrame.H4]);
  });

  it("should apply Strength select option", () => {
    const refreshSignals = vi.fn();

    render(<Controls refreshSignals={refreshSignals} />);

    const strength = screen.getByTestId<HTMLSelectElement>("strength");

    fireEvent.change(strength, {
      target: { value: Strength[Strength.MEDIUM] },
    });

    expect(strength.value).toBe(Strength[Strength.MEDIUM]);
  });

  it("should apply BuySell select option", () => {
    const refreshSignals = vi.fn();

    render(<Controls refreshSignals={refreshSignals} />);

    const buysell = screen.getByTestId<HTMLSelectElement>("buysell");

    fireEvent.change(buysell, {
      target: { value: BuySell[BuySell.BUY] },
    });

    expect(buysell.value).toBe(BuySell[BuySell.BUY]);
  });

  it("should refresh signals", () => {
    const refreshSignals = vi.fn();

    render(<Controls refreshSignals={refreshSignals} />);

    const refresh = screen.getByRole("button");

    fireEvent.click(refresh);

    expect(refreshSignals).toHaveBeenCalled();
  });
});
