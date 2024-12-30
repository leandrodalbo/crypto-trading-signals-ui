import "./index.css"
import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import TradingSignals from "./components/TradingSignals.tsx";
import GetSignalsService from "./service/GetSignals.ts";
import axiosClient from "./ApiConf.ts";

createRoot(document.getElementById("root")!).render (
    <StrictMode>
        <TradingSignals signalsService={
            new GetSignalsService(axiosClient)
        }/>
    </StrictMode>
);
