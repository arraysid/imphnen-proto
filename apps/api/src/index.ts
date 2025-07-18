import { Elysia } from "elysia";

const app = new Elysia().listen(9000);

console.log(
  `API is running at http://${app.server?.hostname}:${app.server?.port}`
);
