import createFetchClient from "openapi-fetch";
import createClient from "openapi-react-query";
import type { paths } from "./paths.gen";

export const fetcher = createFetchClient<paths>({
  baseUrl: getAPIURL(),
  credentials: "include",
});

export const rpc = createClient(fetcher);

function getAPIURL() {
  // its weird from this library to fix need to use "//" in the end
  const base = stripTrailingSlash(process.env.NEXT_PUBLIC_API_URL as string);
  return base + "//";
}

function stripTrailingSlash(url: string): string {
  return url.replace(/\/+$/, "");
}
