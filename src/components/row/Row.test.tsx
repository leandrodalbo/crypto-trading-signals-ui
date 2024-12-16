import { render, screen } from "@testing-library/react";
import { Row } from "./Row";

import { testdata } from "../../../tests/data/testdata";
import { unixToDate } from "../../utils/utils";

describe("Table Row Component", () => {
  it("should render a table row", () => {
    const signal = testdata[0];

    render(<Row signal={signal} />);
    expect(screen.getByTestId("symbol").innerHTML).toBe(signal.symbol);
    expect(screen.getByTestId("time").innerHTML).toEqual(
      unixToDate(signal.signalTime)
    );
    expect(screen.getByTestId("ema")).toBeInTheDocument();
    expect(screen.getByTestId("sma")).toBeInTheDocument();
    expect(screen.getByTestId("macd")).toBeInTheDocument();
    expect(screen.getByTestId("lmacd")).toBeInTheDocument();
    expect(screen.getByTestId("bb")).toBeInTheDocument();
    expect(screen.getByTestId("obv")).toBeInTheDocument();
    expect(screen.getByTestId("rsi")).toBeInTheDocument();
    expect(screen.getByTestId("rsid")).toBeInTheDocument();
    expect(screen.getByTestId("stch")).toBeInTheDocument();
    expect(screen.getByTestId("engc")).toBeInTheDocument();
  });
});
