import { useCallback, useState } from "react";
import "./controls.css";
import { BuySell, Strength } from "../../types/types";

export interface ControlsProps {
  symbolFilter: (symbol?: string) => void;
  refreshSignals: (strength: Strength, buysell: BuySell) => void;
}

export const Controls = ({ symbolFilter, refreshSignals }: ControlsProps) => {
  const [strength, setStrength] = useState(Strength[Strength.MEDIUM]);
  const [buysell, setBuySell] = useState(BuySell[BuySell.BUY]);
  const [symbol, setSymbol] = useState(undefined);

  const onChangeStrength = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setStrength(event.target.value);
  };
  const onChangeBuySell = (event: React.ChangeEvent<HTMLSelectElement>) =>
    setBuySell(event.target.value);

  const onChangeSymbol = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setSymbol(symbol);
      symbolFilter(event.target.value);
    },
    [symbol]
  );

  const onRefreshSignals = useCallback(() => {
    refreshSignals(
      strength as unknown as Strength,
      buysell as unknown as BuySell
    );
  }, [strength, buysell]);

  return (
    <div className="controls">
      <div className="control">
        <label htmlFor="symbol">Symbol:</label>
        <input
          name="symbol"
          id="symbol"
          type="text"
          placeholder="Symbol"
          onChange={onChangeSymbol}
        />
      </div>

      <div className="control">
        <p>Crypto Trading Signals</p>
      </div>

      <div className="control">
        <label htmlFor="strength">Signal Strength:</label>
        <select
          name="strength"
          id="strength"
          onChange={onChangeStrength}
          defaultValue={strength}
        >
          <option
            value={Strength[Strength.MEDIUM] as string}
            key={Strength.MEDIUM}
          >
            {Strength[Strength.MEDIUM]}
          </option>
          <option
            value={Strength[Strength.STRONG] as string}
            key={Strength.STRONG}
          >
            {Strength[Strength.STRONG]}
          </option>
        </select>

        <label htmlFor="buysell">Buy/Sell:</label>
        <select name="buysell" id="buysell" onChange={onChangeBuySell}>
          <option value={BuySell[BuySell.BUY]} key={BuySell.BUY}>
            {BuySell[BuySell.BUY]}
          </option>
          <option value={BuySell[BuySell.SELL] as string} key={BuySell.SELL}>
            {BuySell[BuySell.SELL]}
          </option>
        </select>
        <button onClick={onRefreshSignals}>Refresh</button>
      </div>
    </div>
  );
};
