import { render, screen } from "@testing-library/react";
import { Footer } from "./Footer";

describe("Footer", () => {
  it("will render a the footer component", () => {
    render(<Footer />);
    expect(screen.getByTestId("contact")).toBeInTheDocument();
    expect(screen.getByTestId("sociallinks")).toBeInTheDocument();
  });
});
