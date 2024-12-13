import http from "node:http";
import { ServerApp } from "./ServerApp";
import "./EnvParser";
import { sqliteClient } from "./database/sqlite";

// ----------- INIT SERVER ---------
http.createServer(ServerApp).listen(process.env.PORT, () => {
  console.log("Server listen on PORT: " + process.env.PORT);
});

process.on("uncaughtException", (error) => {
  console.error(`Uncaught Exception : ${error.message}`);
});

console.log("SQLITE DB URL: ", sqliteClient.protocol);
