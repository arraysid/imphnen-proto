export function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative flex min-h-screen overflow-hidden flex-col md:flex-row">
      {/* Left side - Image and Logo (hidden on mobile) */}
      <div className="relative hidden flex-1 bg-foreground/5 md:flex">
        <img
          src="/assets/auth-images.webp"
          alt="bg"
          className="absolute bottom-10 left-1/2 -translate-x-1/2 max-w-full"
        />
        <img
          src="/logos/main.svg"
          alt="logo"
          className="pointer-events-none select-none h-[240px] w-auto absolute top-28 left-1/2 -translate-x-1/2"
        />
      </div>

      {/* Right side - Content and Mascot */}
      <div className="relative flex flex-1 items-center justify-center p-8">
        <div className="w-full max-w-md">{children}</div>
        <img
          src="/mascots/pointing.webp"
          alt="mascot"
          className="absolute right-0 bottom-0 w-64 transform scale-x-[-1]"
        />
      </div>
    </div>
  );
}
