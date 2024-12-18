import { signalKeys } from "../../types/types";
import "./head.css";
import { FaSort } from "react-icons/fa";

export interface HeadProps {
  sortByDate: () => void;
  sortBySymbol: () => void;
}

export const Head = ({ sortByDate, sortBySymbol }: HeadProps) => {
  return (
    <tr>
      {signalKeys.map((it) => {
        if ("symbol" === it.key) {
          return (
            <th key={it.key} className="withsort" onClick={sortBySymbol}>
              SYMBOL <FaSort data-testid="symbolsort" />
            </th>
          );
        }

        if ("signalTime" === it.key) {
          return (
            <th key={it.key} className="withsort" onClick={sortByDate}>
              TIME <FaSort data-testid="datesort" />
            </th>
          );
        }

        return <th key={it.key}>{it.displayed}</th>;
      })}
    </tr>
  );
};
