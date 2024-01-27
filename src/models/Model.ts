import { format } from "date-fns";

export default abstract class Model {
  public static formatDate(date: string): string {
    return format(new Date(date), "MMM dd, yyyy");
  }
}
