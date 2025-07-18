import { cors } from "@elysiajs/cors";
import swagger from "@elysiajs/swagger";
import { authOpenAPIDocs } from "@packages/auth";
import { Elysia } from "elysia";

import { auth } from "./routes/auth";

const app = new Elysia()
  .use(
    cors({
      origin: [String(process.env.APP_URL)],
      methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
      credentials: true,
      allowedHeaders: ["Content-Type", "Authorization"],
    })
  )

  .use(
    swagger({
      path: "/docs",
      autoDarkMode: true,
      documentation: {
        info: {
          title: "IMPHNEN API Docs",
          version: "1",
        },
        tags: [
          { name: "Authentication", description: "Authentication endpoints" },
        ],
        components: await authOpenAPIDocs.components,
        paths: await authOpenAPIDocs.getPaths(),
      },
    })
  )

  .use(auth)

  .listen(9000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
