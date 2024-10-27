import { Router } from "express";
import express from "express";
import { HealthRouter } from "./router/HealthRouter";

// ------------- ROUTER ------------
export const GlobalRouter = Router();

GlobalRouter.use("/", HealthRouter);

GlobalRouter.use(express.static(process.cwd() + "/public"));

GlobalRouter.get("*", (_, res) => {
  return res.send("<h1>Hello World</h1>");
});
