import moment from "moment";
import { Signal } from "../../types/types";

export interface RowProps {
  signal: Signal;
}

export const unixToDate = (unixtime: number) => {
  return moment.unix(unixtime / 1000).format("DD-MM-YYYY HH:mm:ss");
};

export const Row = ({ signal }: RowProps) => {
  return (
    <tr>
      <td data-testid="symbol">{signal.symbol}</td>
      <td data-testid="time">{unixToDate(signal.signalTime)}</td>
      <td data-testid="ema">{signal.ema}</td>
      <td data-testid="sma">{signal.sma}</td>
      <td data-testid="macd">{signal.macd}</td>
      <td data-testid="lmacd">{signal.lindaMacd}</td>
      <td data-testid="bb">{signal.bollingerBands}</td>
      <td data-testid="obv">{signal.obv}</td>
      <td data-testid="rsi">{signal.rsi}</td>
      <td data-testid="rsid">{signal.rsiDivergence}</td>
      <td data-testid="stch">{signal.stochastic}</td>
      <td data-testid="engc">{signal.engulfingCandle}</td>
    </tr>
  );
};
