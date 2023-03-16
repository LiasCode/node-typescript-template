import cluster from "cluster";
import * as os from "os";
import bodyParser from "body-parser";
import compression from "compression";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";

// --------- SETUP APP -------------
dotenv.config();
const App = express();

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
  return res.send("<h1>Hola Mundo</h1>");
});

// ----------- INIT SERVER ---------

async function initAppServer() {
  try {
    App.listen(App.get("PORT"), () => {
      if (process.env.NODE_MODE === "production") {
        console.log("-> Server listen on PORT" + App.get("PORT"));
      } else {
        console.log(
          "-> Server listen in " + "http://localhost:" + App.get("PORT")
        );
      }
    });

    App.once("error", () => {
      process.exit(1);
    });
  } catch (error) {
    console.log({ error });
  }
}

if (process.env.NODE_ENV === "production") {
  // Cluster
  const numCpus = os.cpus().length;
  const masterProcess = () => Array.from(Array(numCpus)).map(cluster.fork);
  const childProcess = () => initAppServer();

  if (cluster.isPrimary) {
    masterProcess();
  } else {
    childProcess();
  }
  cluster.on("exit", () => cluster.fork());
} else {
  (async function () {
    await initAppServer();
  })();
}
