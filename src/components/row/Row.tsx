import { Signal } from "../../types/types";
import { unixToDate } from "../../utils/utils";
import { BuySellItem } from "../buyselltem/BuySellItem";

export interface RowProps {
  signal: Signal;
}

const lockedFields = new Set<string>([
  "buyStrength",
  "sellStrength",
  "turtleSignal",
  "hammerAndShootingCandle",
  "version",
]);

export const Row = ({ signal }: RowProps) => {
  return (
    <tr>
      {Object.entries(signal).map(([key, value]) => {
        if (lockedFields.has(key)) {
          return;
        }

        if ("symbol" === key) {
          return (
            <td key={key} data-testid="symbol">
              {value}
            </td>
          );
        }

        if ("signalTime" === key) {
          return (
            <td key={key} data-testid="signalTime">
              {unixToDate(value)}
            </td>
          );
        }

        return (
          <td key={key} data-testid={key}>
            <BuySellItem value={value as string} />
          </td>
        );
      })}
    </tr>
  );
};
