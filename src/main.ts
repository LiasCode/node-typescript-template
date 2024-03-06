import dotenv from "dotenv";
import { App } from "./App";
import http from "node:http";
import { logger } from "./Logger";

dotenv.config();

// ----------- INIT SERVER ---------
http.createServer(App).listen(App.get("PORT"), () => {
  logger.info("Server listen on PORT: " + App.get("PORT"));
});

process.on("uncaughtException", (error) => {
  logger.error(`Uncaught Exception : ${error.message}`);
});
