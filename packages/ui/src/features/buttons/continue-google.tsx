import { Button } from "@/components/button";
import { FcGoogle } from "react-icons/fc";

export function ButtonContinueGoogle() {
  return (
    <Button
      type="button"
      variant="outline"
      className="flex w-full items-center justify-center gap-3"
    >
      <FcGoogle className="size-5" />
      Continue with Google
    </Button>
  );
}
