import dayjs, { Dayjs } from "dayjs";

export type DateStr = string;
const DateStrFormat = "YYYY-MM-DD";

class _DateUtil {
  now = () => dayjs();
  nowFormat = () => this.now().format(DateStrFormat);
  format = (d: string | Date | Dayjs) => dayjs(d).format(DateStrFormat);
  formatDisplay = (d: string | Date | Dayjs) => dayjs(d).format("DD MMM YYYY");
}

const DateUtil = new _DateUtil();

export default DateUtil;
