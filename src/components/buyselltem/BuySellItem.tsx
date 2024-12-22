import "./buysellitem.css";
import { FaArrowTrendUp } from "react-icons/fa6";
import { FaArrowTrendDown } from "react-icons/fa6";
import { FaArrowsAltH } from "react-icons/fa";

export interface BuySellItemProps {
  value: string;
}

export const BuySellItem = ({ value }: BuySellItemProps) => {
  return (
    <span className="icon-wrapper">
      {value === "BUY" && (
        <FaArrowTrendUp className="uparrow" data-testid="arrowup" />
      )}
      {value === "SELL" && (
        <FaArrowTrendDown className="dnarrow" data-testid="arrowdn" />
      )}
      {value !== "BUY" && value !== "SELL" && (
        <FaArrowsAltH className="arrows" data-testid="arrows" />
      )}
    </span>
  );
};
