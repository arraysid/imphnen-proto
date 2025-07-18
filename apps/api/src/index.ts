import { env } from "@packages/env";
import { Elysia } from "elysia";

const app = new Elysia().listen(env.API_PORT);

console.log(
  `API is running at http://${app.server?.hostname}:${app.server?.port}`
);
