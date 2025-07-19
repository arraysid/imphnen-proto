import { fetcher } from "@packages/utils/openapi";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { cache } from "react";

export const getServerSession = cache(async () => {
  try {
    const { data, error } = await fetcher.GET("v1/auth/get-session", {
      headers: await headers(),
    });

    if (error) throw error;
    if (!data) throw new Error("session not valid");

    return data;
  } catch {
    redirect("/signin");
  }
});
