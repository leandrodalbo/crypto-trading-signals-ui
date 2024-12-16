import { Signal } from "../../types/types";
import { unixToDate } from "../../utils/utils";
import { BuySellItem } from "../buyselltem/BuySellItem";

export interface RowProps {
  signal: Signal;
}

export const Row = ({ signal }: RowProps) => {
  return (
    <tr>
      <td data-testid="symbol">{signal.symbol}</td>

      <td data-testid="time">{unixToDate(signal.signalTime)}</td>

      <td data-testid="ema">
        <BuySellItem value={signal.ema as string} />
      </td>

      <td data-testid="sma">
        <BuySellItem value={signal.sma as string} />
      </td>

      <td data-testid="macd">
        <BuySellItem value={signal.macd as string} />
      </td>

      <td data-testid="lmacd">
        <BuySellItem value={signal.lindaMacd as string} />
      </td>

      <td data-testid="bb">
        <BuySellItem value={signal.bollingerBands as string} />
      </td>

      <td data-testid="obv">
        <BuySellItem value={signal.obv as string} />
      </td>

      <td data-testid="rsi">
        <BuySellItem value={signal.rsi as string} />
      </td>

      <td data-testid="rsid">
        <BuySellItem value={signal.rsiDivergence as string} />
      </td>

      <td data-testid="stch">
        <BuySellItem value={signal.stochastic as string} />
      </td>

      <td data-testid="engc">
        <BuySellItem value={signal.engulfingCandle as string} />
      </td>
    </tr>
  );
};
