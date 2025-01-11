import { AxiosInstance, AxiosResponse } from "axios";
import { BuySell, Strength, TimeFrame } from "./../types/types";

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
    return this.axiosClient.get(this.reqUrl(timeframe, strength, buysell));
  }

  private reqUrl(
    timeframe?: string,
    strength?: string,
    buysell?: string
  ): string {
    return `${this.buildPath(timeframe)}?signal=${buysell ? buysell : BuySell[BuySell.BUY]
      }&strength=${strength ? strength : Strength[Strength.MEDIUM]}`;
  }

  private buildPath(
    timeframe?: string,
  ): string {
    return `/signals/${timeframe ? this.getTimeFramePath(timeframe) : TimeFramePath.D1}`;
  }

  private getTimeFramePath(timeframe: string): string {
    switch (timeframe) {
      case TimeFrame[TimeFrame.H1]:
        return TimeFramePath.H1;
      case TimeFrame[TimeFrame.H4]:
        return TimeFramePath.H4;
      default:
        return TimeFramePath.D1;
    }
  }

}

export default GetSignalsService;
