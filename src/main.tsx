import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import TradingSignals from "./components/TradingSignals.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <TradingSignals />
  </StrictMode>
);
