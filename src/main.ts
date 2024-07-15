import http from "node:http";
import { logger } from "./Logger";
import { App } from "./App";
import "./envConfig";

// ----------- INIT SERVER ---------
http.createServer(App).listen(process.env.PORT, () => {
  logger.info("Server listen on PORT: " + process.env.PORT);
});

process.on("uncaughtException", (error) => {
  logger.error(`Uncaught Exception : ${error.message}`);
});
