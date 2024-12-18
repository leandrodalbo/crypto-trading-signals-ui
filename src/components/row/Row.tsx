import { Signal, signalKeys } from "../../types/types";
import { unixToDate } from "../../utils/utils";
import { BuySellItem } from "../buyselltem/BuySellItem";

export interface RowProps {
  signal: Signal;
}

export const Row = ({ signal }: RowProps) => {
  return (
    <tr>
      {signalKeys.map((it) => {
        if ("symbol" === it.key) {
          return (
            <td key={it.key} data-testid="symbol">
              {signal[it.key as keyof typeof signal]}
            </td>
          );
        }

        if ("signalTime" === it.key) {
          return (
            <td key={it.key} data-testid="signalTime">
              {unixToDate(signal[it.key as keyof typeof signal] as number)}
            </td>
          );
        }

        return (
          <td key={it.key} data-testid={it.key}>
            <BuySellItem
              value={signal[it.key as keyof typeof signal] as string}
            />
          </td>
        );
      })}
    </tr>
  );
};
