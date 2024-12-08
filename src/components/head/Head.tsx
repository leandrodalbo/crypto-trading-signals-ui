import "./head.css";
import { FaSort } from "react-icons/fa";

export interface HeadProps {
  sortByDate: () => void;
  sortBySymbol: () => void;
}

export const Head = ({ sortByDate, sortBySymbol }: HeadProps) => {
  return (
    <tr>
      <th className="withsort" onClick={sortBySymbol}>
        SYMBOL <FaSort data-testid="symbolsort" />
      </th>
      <th className="withsort" onClick={sortByDate}>
        TIME <FaSort data-testid="datesort" />
      </th>
      <th>EMA</th>
      <th>SMA</th>
      <th>MACD</th>
      <th>LINDA MACD</th>
      <th>BOLLINGER BANDS</th>
      <th>OBV</th>
      <th>RSI</th>
      <th>RSI DIVERGENCE</th>
      <th>STOCHASTIC</th>
      <th>ENGULFING CANDLE</th>
    </tr>
  );
};
