import { render, screen } from "@testing-library/react";

import { BuySellItem } from "./BuySellItem";

describe("BuySell Item", () => {
  it("should render up arrow icon", () => {
    render(<BuySellItem value={"BUY"} />);
    expect(screen.getByTestId("arrowup")).toBeInTheDocument();
  });

  it("should render arrows icon", () => {
    render(<BuySellItem value={"NONE"} />);
    expect(screen.getByTestId("arrows")).toBeInTheDocument();
  });

  it("should render down arrow icon", () => {
    render(<BuySellItem value={"SELL"} />);
    expect(screen.getByTestId("arrowdn")).toBeInTheDocument();
  });
});
