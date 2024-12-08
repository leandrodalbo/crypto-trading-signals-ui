import { render, screen } from "@testing-library/react";
import { Row, unixToDate } from "./Row";

import { testdata } from "../../../tests/data/testdata";

describe("Table Row Component", () => {
  it("should render a table row", () => {
    const signal = testdata[0];

    render(<Row signal={signal} />);
    expect(screen.getByTestId("symbol").innerHTML).toBe(signal.symbol);
    expect(screen.getByTestId("time").innerHTML).toEqual(
      unixToDate(signal.signalTime)
    );
    expect(screen.getByTestId("ema").innerHTML).toBe(signal.ema);
    expect(screen.getByTestId("sma").innerHTML).toBe(signal.sma);
    expect(screen.getByTestId("macd").innerHTML).toBe(signal.macd);
    expect(screen.getByTestId("lmacd").innerHTML).toBe(signal.lindaMacd);
    expect(screen.getByTestId("bb").innerHTML).toBe(signal.bollingerBands);
    expect(screen.getByTestId("obv").innerHTML).toBe(signal.obv);
    expect(screen.getByTestId("rsi").innerHTML).toBe(signal.rsi);
    expect(screen.getByTestId("rsid").innerHTML).toBe(signal.rsiDivergence);
    expect(screen.getByTestId("stch").innerHTML).toBe(signal.stochastic);
    expect(screen.getByTestId("engc").innerHTML).toBe(signal.engulfingCandle);
  });
});
