import "./tradingsignals.css";

import { Signal } from "../types/types";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Controls } from "./controls/Controls";

import GetSignalsService from "../service/GetSignals";
import MainGrid from "./main-grid/MainGrid";
import { Route, Routes } from "react-router-dom";
import { SignalDetail } from "./signal-detail/SignalDetail";
import { Footer } from "./footer/Footer";

export interface TradingSignalsProps {
    signalsService: GetSignalsService;
}

const TradingSignals = ({ signalsService }: TradingSignalsProps) => {
    const [rows, setRows] = useState([] as Signal[]);
    const navigate = useNavigate();

    const refreshSignals = async (timeframe?: string, strength?: string, buysell?: string) => {
        const response = await signalsService.signals(timeframe, strength, buysell);
        setRows(response.data);
        navigate("/")
    };

    useEffect(() => {
        refreshSignals();
    }, []);

    const signalsByDate = () => rows.sort((a, b) => b.signalTime - a.signalTime)

    return (
        <>
            <header data-testid="header">
                <Controls refreshSignals={refreshSignals} />
            </header>
            <main className="min-h-screen bg-[var(--color-primary)] flex items-center justify-center" data-testid="main">
                <Routes>
                    <Route path="/" element={<MainGrid data={signalsByDate()} />} />
                    <Route path="/signal/:symbol" element={<SignalDetail />} />
                </Routes>
            </main>
            <Footer data-testid="footer" />
        </>
    );
};

export default TradingSignals;
