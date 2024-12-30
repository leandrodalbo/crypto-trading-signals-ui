import { render, screen } from "@testing-library/react";

import client from "../ApiConf";
import TradingSignals from "./TradingSignals";
import GetSignalsService from "../service/GetSignals";
import { BrowserRouter } from 'react-router-dom'
describe("Trading Signals", () => {
  it("will render all sections", () => {
    const service = new GetSignalsService(client);

    render(<BrowserRouter><TradingSignals signalsService={service} /></BrowserRouter>);
    expect(screen.getByTestId("header")).toBeInTheDocument();
    expect(screen.getByTestId("main")).toBeInTheDocument();
    expect(screen.getByTestId("footer")).toBeInTheDocument();
  });
});
