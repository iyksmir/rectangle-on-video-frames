import dayjs from "dayjs";

const FORMAT_MM_SS_SSS = 'mm:ss:SSS';

export const convertTimeStampToMSS = (timestamp: number) => {
  const strSplittedByDot = timestamp.toFixed(3).toString().split(".");
  const [sec, millisec] = strSplittedByDot;

  return dayjs()
    .set('hour', 0)
    .set('minute', 0)
    .set('second', Number(sec))
    .set('milliseconds', Number(millisec))
    .format(FORMAT_MM_SS_SSS);
}
