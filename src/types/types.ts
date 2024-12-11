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
