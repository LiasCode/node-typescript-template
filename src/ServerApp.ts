import bodyParser from "body-parser";
import compression from "compression";
import cors from "cors";
import express, { Application } from "express";
import helmet from "helmet";
import morgan from "morgan";
import { GlobalRouter } from "./GlobalRouter";

// --------- SETUP APP -------------
export const ServerApp: Application = express();

// ---------- APP SETTINGS ------------
ServerApp.disable("x-powered-by");

// ---------- MIDDLEWARES ---------
ServerApp.use(compression());
ServerApp.use(helmet());
ServerApp.use(morgan("dev"));
ServerApp.use(cors());
ServerApp.use(bodyParser.urlencoded({ extended: false }));
ServerApp.use(bodyParser.json());
ServerApp.use(bodyParser.text());
ServerApp.use(bodyParser.raw());

// ---------- ROUTER ---------
ServerApp.use(GlobalRouter);

// ---------- HANDLING ERROR ---------
ServerApp.once("error", (error) => {
  console.log({ error });
  process.exit(1);
});

ServerApp.on("uncaughtException", (error) => {
  console.log({ uncaughtException: error });
});
