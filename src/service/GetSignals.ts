import { Strength, BuySell } from "./../types/types";
import { testdata } from "../../tests/data/testdata";

const fetchSignalsService = (strength: Strength, buysell: BuySell) => {
  console.log(strength);
  console.log(buysell);

  return testdata;
};

export default fetchSignalsService;
