import { authInstance } from "@packages/auth";
import { Elysia } from "elysia";

export const auth = new Elysia({ name: "auth" })
  .mount("/v1", authInstance.handler)

  .macro({
    auth: {
      async resolve({ status, request: { headers } }) {
        const session = await authInstance.api.getSession({
          headers,
        });

        if (!session) return status(401);

        return {
          user: session.user,
          session: session.session,
        };
      },
    },
  });
