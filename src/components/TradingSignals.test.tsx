import { render, screen } from "@testing-library/react";

import client from "../ApiConf";
import TradingSignals from "./TradingSignals";
import GetSignalsService from "../service/GetSignals";

describe("Trading Signals", () => {
  it("will render all sections", () => {
    const service = new GetSignalsService(client);

    render(<TradingSignals signalsService={service} />);
    expect(screen.getByTestId("header")).toBeInTheDocument();
    expect(screen.getByTestId("main")).toBeInTheDocument();
    expect(screen.getByTestId("footer")).toBeInTheDocument();
  });
});
