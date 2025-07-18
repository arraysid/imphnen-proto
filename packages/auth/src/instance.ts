import { authSchema, db } from "@packages/db";
import { env } from "@packages/env";
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { admin, openAPI } from "better-auth/plugins";

export const authInstance = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg",
    usePlural: true,
    schema: authSchema,
  }),
  basePath: "/auth",
  trustedOrigins: [process.env.NEXT_PUBLIC_APP_URL!],
  secret: env.AUTH_SECRET,
  emailAndPassword: {
    enabled: true,
  },
  plugins: [
    admin(),
    openAPI({
      disableDefaultReference: true,
    }),
  ],
  advanced: {
    database: {
      generateId: false,
    },
    cookies: {
      session_token: {
        name: "_IST_",
      },
    },
  },
});
