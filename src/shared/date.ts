import { format } from "date-fns";
import { z } from "zod";

export const DateTimeSchema = z.string().refine(
  () => {
    try {
      return format(new Date(), "yyyy-MM-dd HH:mm:ss");
    } catch (error) {
      return false;
    }
  },
  { message: "Invalid Date, format should be yyyy-MM-dd HH:mm:ss" }
);

export function createDateAsDateTime(): string {
  return format(new Date(), "yyyy-MM-dd HH:mm:ss");
}
