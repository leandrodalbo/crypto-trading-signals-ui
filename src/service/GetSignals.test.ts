import { vi } from "vitest";

import { testdata } from "../../tests/data/testdata";
import client from "../ApiConf";
import { BuySell, Strength, TimeFrame } from "../types/types";
import GetSignalsService from "./GetSignals";

describe("Signals Service", () => {
  it("will fetch signals", async () => {
    const apiClient = client;

    vi.spyOn(apiClient, "get").mockResolvedValue({ data: testdata });

    const service = new GetSignalsService(apiClient);

    const result = await service.signals(
      TimeFrame[TimeFrame.D1],
      Strength[Strength.MEDIUM],
      BuySell[BuySell.BUY]
    );

    expect(result.data).toBe(testdata);
    expect(apiClient.get).toHaveBeenCalled();
  });
});
