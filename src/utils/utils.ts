import moment from "moment";

export const unixToDate = (unixtime: number) => {
  return moment.unix(unixtime / 1000).format("DD-MM-YYYY HH:mm:ss");
};
