export function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen">
      {/* Left side - Image */}
      <div className="relative flex-1">
        <div className="absolute inset-0">
          <img
            src="/assets/auth-images.webp"
            className="pointer-events-none h-full w-full object-cover object-center select-none dark:grayscale"
          />
        </div>

        <div className="absolute top-64 left-1/3 z-10 -translate-x-1/2">
          <img
            src="/logos/main.svg"
            className="pointer-events-none h-[240px] w-auto select-none dark:grayscale"
          />
        </div>
      </div>

      {/* Right side  */}
      <div className="flex flex-1 items-center justify-center p-8">
        {children}
        <img
          src="/mascot.webp"
          className="absolute right-0 bottom-0 w-64 scale-x-[-1] transform dark:grayscale"
        />
      </div>
    </div>
  );
}
