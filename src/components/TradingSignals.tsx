import "./tradingsignals.css";

import { Head } from "./head/Head";
import { Row } from "./row/Row";
import { Signal } from "../types/types";
import { useEffect, useState } from "react";
import { Controls } from "./controls/Controls";

import GetSignalsService from "../service/GetSignals";

export interface TradingSignalsProps {
  signalsService: GetSignalsService;
}

const TradingSignals = ({ signalsService }: TradingSignalsProps) => {
  const [rows, setRows] = useState([] as Signal[]);

  const refreshSignals = async (
    timeframe?: string,
    strength?: string,
    buysell?: string
  ) => {
    const response = await signalsService.signals(timeframe, strength, buysell);
    setRows(response.data);
  };

  useEffect(() => {
    refreshSignals();
  }, []);

  return (
    <>
      <header data-testid="header">
        <Controls refreshSignals={refreshSignals} />
      </header>
      <main data-testid="main">
        <table id="#table" data-testid="tradingsignals">
          <thead>
            <Head />
          </thead>
          <tbody>
            {rows.map((it: Signal) => (
              <Row key={it.symbol} signal={it} />
            ))}
          </tbody>
        </table>
      </main>
      <footer className="botom" data-testid="footer">
        <a href="#contact">JungleLogic Labs</a>
      </footer>
    </>
  );
};

export default TradingSignals;
