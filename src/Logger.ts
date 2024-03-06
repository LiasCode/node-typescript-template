export class Logger {
  constructor() {}

  public info(message: string): void {
    console.log("[INFO]: ", message);
  }
  public error(message: string): void {
    console.error("[ERROR]: ", message);
  }
  public warn(message: string): void {
    console.warn("[WARN]: ", message);
  }
}

export const logger = new Logger();
