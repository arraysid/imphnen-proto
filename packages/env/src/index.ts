import { cleanEnv, port, str } from "envalid";

import "dotenv/config";

export const env = cleanEnv(process.env, {
  DATABASE_URL: str(),
  API_PORT: port({ default: 9000 }),
  AUTH_SECRET: str(),
  APP_URL: str(),
});
