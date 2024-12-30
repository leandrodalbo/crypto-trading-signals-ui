import { AxiosInstance, AxiosResponse } from "axios";

import { BuySell, Strength, TimeFrame } from "./../types/types";
import { testdata } from "../../tests/data/testdata";

enum TimeFramePath {
  H1 = "onehour",
  H4 = "fourhour",
  D1 = "oneday",
}

class GetSignalsService {
  private axiosClient: AxiosInstance;

  constructor(axiosInstance: AxiosInstance) {
    this.axiosClient = axiosInstance;
  }

  public signals(
    timeframe?: string,
    strength?: string,
    buysell?: string
  ): Promise<AxiosResponse> {
    return Promise.resolve({data:testdata} as AxiosResponse)
    //this.axiosClient.get(this.buildPath(timeframe, strength, buysell));
  }

  private buildPath(
    timeframe?: string,
    strength?: string,
    buysell?: string
  ): string {
    if (TimeFrame[TimeFrame.D1] === timeframe)
      return `/signals/${TimeFramePath.D1}?signal=${
        buysell ? buysell : BuySell[BuySell.BUY]
      }&strength=${strength ? strength : Strength[Strength.MEDIUM]}`;

    if (TimeFrame[TimeFrame.H4] === timeframe)
      return `/signals/${TimeFramePath.H4}?signal=${
        buysell ? buysell : BuySell[BuySell.BUY]
      }&strength=${strength ? strength : Strength[Strength.MEDIUM]}`;

    return `/signals/${TimeFramePath.H1}?signal=${
      buysell ? buysell : BuySell[BuySell.BUY]
    }&strength=${strength ? strength : Strength[Strength.MEDIUM]}`;
  }
}

export default GetSignalsService;
