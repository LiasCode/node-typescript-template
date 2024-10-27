import { Router } from "express";
import express from "express";
import { HealthRouter } from "./router/HealthRouter";

// ------------- ROUTER ------------
export const GlobalRouter = Router();

GlobalRouter.use("/api", HealthRouter);

GlobalRouter.use(express.static(process.cwd() + "/public"));

GlobalRouter.get("*", (_, res) => {
  return res.sendFile(process.cwd() + "/public/404.html");
});
