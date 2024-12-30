import "./index.css"
import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import TradingSignals from "./components/TradingSignals.tsx";
import GetSignalsService from "./service/GetSignals.ts";
import axiosClient from "./ApiConf.ts";
import {BrowserRouter as Router} from "react-router-dom";
createRoot(document.getElementById("root")!).render (
    <StrictMode>
        <Router>
            <TradingSignals signalsService={
                new GetSignalsService(axiosClient)
            }/>
        </Router>
    </StrictMode>
);
