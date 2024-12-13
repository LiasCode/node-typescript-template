import dayjs from "dayjs";

export function createDateAsDateTime(): string {
  return dayjs().format("YYYY-MM-DD HH:mm:ss");
}
