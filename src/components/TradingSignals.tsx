import "./tradingsignals.css";

import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

import { Head } from "./head/Head";
import { Row } from "./row/Row";
import { Signal, signalKeys } from "../types/types";
import { useCallback, useEffect, useState } from "react";
import { Controls } from "./controls/Controls";

import GetSignalsService from "../service/GetSignals";

export interface TradingSignalsProps {
  signalsService: GetSignalsService;
}

const TradingSignals = ({ signalsService }: TradingSignalsProps) => {
  const [rows, setRows] = useState([] as Signal[]);
  const [byDate, setSortByDate] = useState(false);
  const [bySymbol, setSortBySymbol] = useState(false);

  const refreshSignals = async (
    timeframe?: string,
    strength?: string,
    buysell?: string
  ) => {
    const response = await signalsService.signals(timeframe, strength, buysell);
    setRows(response.data);
  };

  useEffect(() => {
    refreshSignals();
  }, []);

  const sortByDate = useCallback(() => {
    if (byDate) {
      setSortByDate(false);
      setRows(rows.sort((a, b) => a.signalTime - b.signalTime));
    } else {
      setSortByDate(true);
      setRows(rows.sort((a, b) => b.signalTime - a.signalTime));
    }
  }, [byDate, rows]);

  const sortBySymbol = useCallback(() => {
    if (bySymbol) {
      setSortBySymbol(false);
      setRows(rows.sort((a, b) => a.symbol.localeCompare(b.symbol)));
    } else {
      setSortBySymbol(true);
      setRows(rows.sort((a, b) => b.symbol.localeCompare(a.symbol)));
    }
  }, [bySymbol, rows]);

  return (
    <>
      <header data-testid="header">
        <Controls refreshSignals={refreshSignals} />
      </header>
      <main data-testid="main">
        <table id="#table" data-testid="tradingsignals">
          <thead>
            <Head sortByDate={sortByDate} sortBySymbol={sortBySymbol} />
          </thead>
          <tbody>
            {rows.map((it: Signal) => (
              <Row key={it.symbol} signal={it} />
            ))}
          </tbody>
        </table>
      </main>
      <footer className="botom" data-testid="footer">
        <div className="contact">
          <a
            href="https://jungle-logic.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            JungleLogic Lab
          </a>
        </div>
        <div className="container footersocials">
          <a
            key={"twiter"}
            href={"https://x.com/JunglelogicLab"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaXTwitter />
          </a>
          <a
            key={"github"}
            href={"https://github.com/leandrodalbo"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            key={"linkedin"}
            href={"https://www.linkedin.com/in/leandrodlb/"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
        </div>
      </footer>
    </>
  );
};

export default TradingSignals;
