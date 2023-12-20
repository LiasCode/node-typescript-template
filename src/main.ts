import dotenv from "dotenv";
import { App } from "./server-app";

dotenv.config();

// ----------- INIT SERVER ---------
App.listen(App.get("PORT"), () => {
  console.log("Server listen on PORT: " + App.get("PORT"));
});
