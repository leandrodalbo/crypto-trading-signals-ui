import "./tradingsignals.css";

import { Head } from "./head/Head";
import { Row } from "./row/Row";
import { BuySell, Signal, Strength } from "../types/types";
import { useCallback, useState } from "react";
import { Controls } from "./controls/Controls";

export interface TradingSignalsProps {
  signalsService: (strength: Strength, buysell: BuySell) => Signal[];
}

const TradingSignals = ({ signalsService }: TradingSignalsProps) => {
  const [rows, setRows] = useState(
    signalsService(Strength.MEDIUM, BuySell.BUY)
  );

  const [filteredRows, setFilteredRows] = useState(rows);

  const filterBySymbol = useCallback(
    (symbol?: string) => {
      if (symbol) {
        setFilteredRows(
          rows.filter((it: Signal) =>
            it.symbol.toUpperCase().includes(symbol.toUpperCase())
          )
        );
      } else {
        setFilteredRows(rows);
      }
    },
    [filteredRows]
  );

  const refreshSignals = useCallback(
    (strength: Strength, buysell: BuySell) => {
      setRows(signalsService(strength, buysell));
    },
    [rows]
  );

  return (
    <main>
      <Controls refreshSignals={refreshSignals} symbolFilter={filterBySymbol} />
      <table id="#table" data-testid="tradingsignals">
        <thead data-testid="headcomponent">
          <Head />
        </thead>
        <tbody>
          {filteredRows.map((it: Signal) => (
            <Row key={it.symbol} signal={it} />
          ))}
        </tbody>
      </table>

      <div className="botom">
        <a href="#contact">JungleLogic Labs</a>
      </div>
    </main>
  );
};

export default TradingSignals;
