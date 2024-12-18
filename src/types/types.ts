export interface Signal {
  symbol: string;
  signalTime: number;
  buyStrength: Strength | string;
  sellStrength: Strength | string;
  bollingerBands: BuySell | string;
  ema: BuySell | string;
  sma: BuySell | string;
  macd: BuySell | string;
  obv: BuySell | string;
  rsi: BuySell | string;
  rsiDivergence: BuySell | string;
  stochastic: BuySell | string;
  engulfingCandle: BuySell | string;
  lindaMacd: BuySell | string;
  turtleSignal: BuySell | string;
  hammerAndShootingCandle: BuySell | string;
  version: number;
}

export interface DisplayedSignal {
  key: string;
  displayed: string;
}
export const signalKeys: DisplayedSignal[] = [
  { key: "symbol", displayed: "SYMBOL" },
  { key: "signalTime", displayed: "TIME" },
  { key: "engulfingCandle", displayed: "ENGULFING CANDLE" },
  { key: "ema", displayed: "EMA" },
  { key: "sma", displayed: "SMA" },
  { key: "macd", displayed: "MACD" },
  { key: "lindaMacd", displayed: "LINDA MACD" },
  { key: "obv", displayed: "OBV" },
  { key: "rsi", displayed: "RSI" },
  { key: "rsiDivergence", displayed: "RSI DIVERGENCE" },
  { key: "bollingerBands", displayed: "BOLLINGER BANDS" },
  { key: "stochastic", displayed: "STOCHASTIC" },
];

export enum BuySell {
  BUY,
  SELL,
}

export enum Strength {
  MEDIUM,
  STRONG,
}

export enum TimeFrame {
  H1,
  H4,
  D1,
}
