import { ButtonContinueGithub } from "@/features/buttons/continue-github";
import { ButtonContinueGoogle } from "@/features/buttons/continue-google";
import { SignUpForm } from "@/features/forms";

export function SignupPage() {
  return (
    <main className="mx-auto w-full max-w-md space-y-4 py-8">
      <div className="space-y-2 text-center">
        <h1 className="text-primary text-4xl font-extrabold">Signup</h1>
        <p className="font-medium">Yosha~! Saatnya bergabung dengan IMPHNEN</p>
      </div>

      <ButtonContinueGoogle />
      <ButtonContinueGithub />

      <div className="relative flex items-center">
        <div className="flex-grow border-t"></div>
        <span className="mx-4">OR</span>
        <div className="flex-grow border-t"></div>
      </div>

      <SignUpForm />
    </main>
  );
}
