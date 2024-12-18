import { render, screen } from "@testing-library/react";
import { Row } from "./Row";

import { testdata } from "../../../tests/data/testdata";
import { unixToDate } from "../../utils/utils";

describe("Table Row Component", () => {
  it("should render a table row", () => {
    const signal = testdata[0];

    render(<Row signal={signal} />);
    expect(screen.getByTestId("symbol").innerHTML).toBe(signal.symbol);
    expect(screen.getByTestId("signalTime").innerHTML).toEqual(
      unixToDate(signal.signalTime)
    );
    expect(screen.getByTestId("bollingerBands")).toBeInTheDocument();
    expect(screen.getByTestId("ema")).toBeInTheDocument();
    expect(screen.getByTestId("sma")).toBeInTheDocument();
    expect(screen.getByTestId("macd")).toBeInTheDocument();
    expect(screen.getByTestId("obv")).toBeInTheDocument();
    expect(screen.getByTestId("rsi")).toBeInTheDocument();
    expect(screen.getByTestId("rsiDivergence")).toBeInTheDocument();
    expect(screen.getByTestId("stochastic")).toBeInTheDocument();
    expect(screen.getByTestId("engulfingCandle")).toBeInTheDocument();
    expect(screen.getByTestId("lindaMacd")).toBeInTheDocument();
  });
});
