import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import TradingSignals from "./components/TradingSignals.tsx";
import fetchSignalsService from "./service/GetSignals.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <TradingSignals signalsService={fetchSignalsService} />
  </StrictMode>
);
