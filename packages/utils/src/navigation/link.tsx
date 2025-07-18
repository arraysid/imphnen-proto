import clsx from "clsx";
import NextLink, { LinkProps as NextLinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { ComponentPropsWithoutRef, ReactNode } from "react";

interface LinkProps
  extends Omit<NextLinkProps, "href">,
    Omit<ComponentPropsWithoutRef<"a">, "href"> {
  /** Destination URL */
  to: string;
  /** Link contents */
  children: ReactNode;
  /** Base className */
  className?: string;
  /** Props to apply when the link is active */
  activeProps?: ComponentPropsWithoutRef<"a">;
  activeOptions?: {
    /** If true, only exact path matches count as active. Default: false (prefix match) */
    exact?: boolean;
  };
}

export function Link({
  to,
  children,
  className,
  activeProps,
  activeOptions,
  ...anchorProps
}: LinkProps) {
  const pathname = usePathname() || "/";
  const { exact = false } = activeOptions ?? {};

  // decide active state
  const isActive = exact
    ? pathname === to
    : pathname === to || pathname.startsWith(to + "/");

  // merge class names
  const mergedClassName = clsx(className, isActive && activeProps?.className);

  // merge other activeProps when active
  const finalProps = {
    ...anchorProps,
    ...(isActive ? activeProps : {}),
    className: mergedClassName,
  };

  return (
    <NextLink href={to} {...finalProps}>
      {children}
    </NextLink>
  );
}
