import dotenv from "dotenv";
import { App } from "./server";

dotenv.config();

// ----------- INIT SERVER ---------
App.listen(App.get("PORT"), () => {
  console.log("Server listen on PORT: " + App.get("PORT"));
});

App.once("error", () => {
  process.exit(1);
});
