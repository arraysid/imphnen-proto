import { Button } from "@/components/button";
import { SiGithub } from "react-icons/si";

export function ButtonContinueGithub() {
  return (
    <Button
      type="button"
      variant="outline"
      className="flex w-full items-center justify-center gap-3"
    >
      <SiGithub className="size-5" />
      Continue with Github
    </Button>
  );
}
