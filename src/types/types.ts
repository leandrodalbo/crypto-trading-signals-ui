export interface Signal {
  symbol: string;
  signalTime: number;
  buyStrength: Strength;
  sellStrength: BuySell;
  bollingerBands: BuySell;
  ema: BuySell;
  sma: BuySell;
  macd: BuySell;
  obv: BuySell;
  rsi: BuySell;
  rsiDivergence: BuySell;
  stochastic: BuySell;
  engulfingCandle: BuySell;
  lindaMacd: BuySell;
  turtleSignal: BuySell;
  hammerAndShootingCandle: BuySell;
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
