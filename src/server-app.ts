import bodyParser from "body-parser";
import compression from "compression";
import cors from "cors";
import express, { Application } from "express";
import helmet from "helmet";
import morgan from "morgan";

// --------- SETUP APP -------------
export const App: Application = express();

// ---------- APP SETTINGS ------------
App.set("env", "production");
App.set("PORT", process.env.PORT || 3030);
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

// ------------- ROUTER ------------
App.use(express.static(process.cwd() + "/public"));

App.get("*", (_, res) => {
  return res.send("<h1>Hello World</h1>");
});

App.once("error", (error) => {
  console.log({ error });
  process.exit(1);
});

App.on("uncaughtException", (error) => {
  console.log({ uncaughtException: error });
});
