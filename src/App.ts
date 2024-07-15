import bodyParser from "body-parser";
import compression from "compression";
import cors from "cors";
import express, { Application } from "express";
import helmet from "helmet";
import morgan from "morgan";
import { GlobalRouter } from "./router/router";

// --------- SETUP APP -------------
export const App: Application = express();

// ---------- APP SETTINGS ------------
App.set("PORT", process.env.PORT);
App.disable("x-powered-by");

// ---------- MIDDLEWARES ---------
App.use(compression());
App.use(helmet());
App.use(morgan("dev"));
App.use(cors());
App.use(bodyParser.urlencoded({ extended: false }));
App.use(bodyParser.json());
App.use(bodyParser.text());
App.use(bodyParser.raw());

// ---------- ROUTER ---------
App.use(GlobalRouter);

// ---------- HANDLING ERROR ---------
App.once("error", (error) => {
  console.log({ error });
  process.exit(1);
});

App.on("uncaughtException", (error) => {
  console.log({ uncaughtException: error });
});
