import dotenv from "dotenv";
import { z } from "zod";

dotenv.config();

const envSchema = z.object({
  PORT: z.string(),
});

const res = envSchema.safeParse(process.env);

if (!res.success) {
  throw new Error(`Env schema validation fails \n${res.error}`);
}

declare global {
  namespace NodeJS {
    interface ProcessEnv extends z.infer<typeof envSchema> {}
  }
}
