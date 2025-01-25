import "./controls.css";

import { useCallback, useState } from "react";
import { BuySell, Strength, TimeFrame } from "../../types/types";
import { Link } from "react-router-dom";

export interface ControlsProps {
  refreshSignals: (
    timeframe: string,
    strength: string,
    buysell: string
  ) => void;
}

export const Controls = ({ refreshSignals }: ControlsProps) => {
  const [timeframe, setTimeframe] = useState(TimeFrame[TimeFrame.D1] as string);
  const [strength, setStrength] = useState(Strength[Strength.MEDIUM] as string);
  const [buysell, setBuySell] = useState(BuySell[BuySell.BUY] as string);

  const onChangeTimeframe = useCallback(
    async (event: React.ChangeEvent<HTMLSelectElement>) => {
      setTimeframe(event.target.value);
      await refreshSignals(event.target.value, strength, buysell);
    },
    [timeframe, strength, buysell]
  );

  const onChangeStrength = useCallback(
    async (event: React.ChangeEvent<HTMLSelectElement>) => {
      setStrength(event.target.value);
      await refreshSignals(timeframe, event.target.value, buysell);
    },
    [timeframe, strength, buysell]
  );

  const onChangeBuySell = useCallback(
    async (event: React.ChangeEvent<HTMLSelectElement>) => {
      setBuySell(event.target.value);
      await refreshSignals(timeframe, strength, event.target.value);
    },
    [timeframe, strength, buysell]
  );

  return (
    <div className="controls">
      <div className="control">
        <Link to={"/"}><p>Crypto Signal Zone</p></Link>
      </div>

      <div className="control">
        <label htmlFor="timeframe">Timeframe:</label>
        <select
          name="timeframe"
          id="timeframe"
          onChange={onChangeTimeframe}
          defaultValue={timeframe}
          data-testid="timeframe"
        >
          <option value={TimeFrame[TimeFrame.D1] as string} key={TimeFrame.D1}>
            {TimeFrame[TimeFrame.D1]}
          </option>
          <option value={TimeFrame[TimeFrame.H4] as string} key={TimeFrame.H4}>
            {TimeFrame[TimeFrame.H4]}
          </option>
          <option value={TimeFrame[TimeFrame.H1] as string} key={TimeFrame.H1}>
            {TimeFrame[TimeFrame.H1]}
          </option>
        </select>

        <label htmlFor="strength">Signal Strength:</label>
        <select
          name="strength"
          id="strength"
          onChange={onChangeStrength}
          defaultValue={strength}
          data-testid="strength"
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
        <select
          name="buysell"
          id="buysell"
          onChange={onChangeBuySell}
          data-testid="buysell"
        >
          <option value={BuySell[BuySell.BUY]} key={BuySell.BUY}>
            {BuySell[BuySell.BUY]}
          </option>
          <option value={BuySell[BuySell.SELL] as string} key={BuySell.SELL}>
            {BuySell[BuySell.SELL]}
          </option>
        </select>

      </div>
    </div>
  );
};
