import Router from "express-promise-router";

// ------------- ROUTER ------------
export const HealthRouter = Router();

HealthRouter.get("/api/ping", async (_, res) => {
  return res.send("pong");
});
