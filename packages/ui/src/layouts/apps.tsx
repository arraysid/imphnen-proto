"use client";

import { Button } from "@/components/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/dropdown-menu";
import { Label } from "@/components/label";
import { Sheet, SheetContent, SheetTrigger } from "@/components/sheet";
import { Link } from "@packages/utils/navigation";
import { AiTwotoneFire } from "react-icons/ai";
import { BiSolidHome } from "react-icons/bi";
import { BsLayoutSidebarInsetReverse } from "react-icons/bs";
import { GiBlackBook } from "react-icons/gi";
import { HiOutlineBadgeCheck } from "react-icons/hi";
import { LuArrowRight, LuCircleUser, LuSettings } from "react-icons/lu";
import { MdHowToVote } from "react-icons/md";
import { RiHome6Line } from "react-icons/ri";
import { TbCertificate, TbPencilHeart } from "react-icons/tb";

export function AppsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="grid h-screen w-full overflow-hidden md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <Sidebar />
      <div className="flex flex-col overflow-hidden">
        <Header />
        <div className="flex-1 overflow-y-auto">{children}</div>
      </div>
    </div>
  );
}

function Header() {
  return (
    <header className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <BsLayoutSidebarInsetReverse className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SidebarSheet />
      </Sheet>

      <div className="w-full flex-1"></div>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="secondary"
            size="icon"
            className="bg-muted text-foreground rounded-full"
          >
            <LuCircleUser className="h-5 w-5" />
            <span className="sr-only">Toggle user menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Akun Saya</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem asChild>
            <Link to="/apps/settings">Pengaturan</Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Keluar</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
}

function Sidebar() {
  return (
    <div className="bg-muted/40 hidden overflow-y-auto border-r md:block">
      <div className="flex min-h-full flex-col gap-2">
        <Link
          to="/apps/home"
          className="my-9 flex items-center justify-center gap-2 font-semibold"
        >
          <img
            src="/logos/simple.svg"
            className="pointer-events-none w-36 select-none"
            loading="eager"
            decoding="async"
          />
        </Link>

        <div className="flex-1">
          <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
            <Link
              to="/apps/home"
              activeOptions={{ exact: false }}
              activeProps={{ className: "bg-primary text-white" }}
              className="flex items-center gap-3 rounded-lg px-3 py-2 transition-all"
            >
              <RiHome6Line className="size-4" />
              Home
            </Link>
            <Label className="mx-3 mt-4 mb-1 text-xs font-semibold">Apps</Label>
            <Link
              to="/apps/showcase/dashboard"
              activeOptions={{ exact: false }}
              activeProps={{ className: "bg-primary text-white" }}
              className="flex items-center justify-between rounded-lg px-3 py-2 transition-all"
            >
              <div className="flex items-center gap-x-3">
                <AiTwotoneFire className="size-4" />
                <span>Showcase</span>
              </div>
              <LuArrowRight className="size-4" />
            </Link>
            <Link
              to="/apps/dimentorin/dashboard"
              activeOptions={{ exact: false }}
              activeProps={{ className: "bg-primary text-white" }}
              className="flex items-center justify-between rounded-lg px-3 py-2 transition-all"
            >
              <div className="flex items-center gap-x-3">
                <GiBlackBook className="size-4" />
                <span>Dimentorin</span>
              </div>
              <LuArrowRight className="size-4" />
            </Link>
            <Label className="mx-3 mt-4 mb-1 text-xs font-semibold">
              Community
            </Label>

            <Link
              to="/apps/badges"
              activeOptions={{ exact: false }}
              activeProps={{ className: "bg-primary text-white" }}
              className="flex items-center gap-3 rounded-lg px-3 py-2 transition-all"
            >
              <HiOutlineBadgeCheck className="size-4" />
              Badge
            </Link>

            <Link
              to="/apps/feedback"
              activeOptions={{ exact: false }}
              activeProps={{ className: "bg-primary text-white" }}
              className="transition-sall flex items-center gap-3 rounded-lg px-3 py-2"
            >
              <MdHowToVote className="size-4" />
              Feedback
            </Link>

            <Link
              to="/apps/testimonials"
              activeOptions={{ exact: false }}
              activeProps={{ className: "bg-primary text-white" }}
              className="flex items-center gap-3 rounded-lg px-3 py-2 transition-all"
            >
              <TbPencilHeart className="size-4" />
              Testimonial
            </Link>
          </nav>
        </div>

        <div className="mt-auto p-2">
          <Card className="bg-background rounded-sm p-1">
            <CardHeader className="p-2 pb-1">
              <CardTitle className="text-base">IMPHNEN Beta v0</CardTitle>
              <CardDescription className="text-muted-foreground text-xs">
                IMPHNEN masih dalam tahap beta dan sedang dalam pengembangan
                intensif
              </CardDescription>
            </CardHeader>
            <CardContent className="-mt-4 p-2">
              <Button size="sm" className="h-8 w-full text-sm">
                Dapatkan Badge Beta Tester
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

function SidebarSheet() {
  return (
    <SheetContent side="left" className="overflow-y-auto">
      <div className="flex h-full flex-col gap-2">
        <Link
          to="/apps/home"
          className="my-9 flex items-center justify-center gap-2 font-semibold"
        >
          <img
            src="/logos/simple.svg"
            className="pointer-events-none w-36 select-none"
            loading="eager"
            decoding="async"
          />
        </Link>

        <nav className="grid flex-1 items-start gap-2 px-2 text-lg font-medium">
          <Link
            to="/apps/home"
            activeProps={{
              className: "bg-primary text-foreground",
            }}
            className="flex items-center gap-3 rounded-lg px-3 py-2 transition-all"
          >
            <BiSolidHome className="size-4" />
            Home
          </Link>
        </nav>

        <div className="mt-auto p-2">
          <div className="mb-4">
            <Link
              to="/apps/settings/account"
              activeOptions={{
                exact: false,
              }}
              activeProps={{
                className: "bg-primary text-foreground",
              }}
              className="flex items-center gap-3 rounded-lg px-3 py-2 transition-all"
            >
              <LuSettings className="size-4" />
              Pengaturan
            </Link>
            <Link
              to="/apps/support"
              activeOptions={{
                exact: false,
              }}
              activeProps={{
                className: "bg-primary text-foreground",
              }}
              className="flex items-center gap-3 rounded-lg px-3 py-2 transition-all"
            >
              <TbCertificate className="size-4" />
              Support
            </Link>
          </div>

          <Card className="bg-background rounded-sm p-1">
            <CardHeader className="p-2 pb-1">
              <CardTitle className="text-base">IMPHNEN Beta v0</CardTitle>
              <CardDescription className="text-muted-foreground text-xs">
                IMPHNEN masih dalam tahap beta dan sedang dalam pengembangan
                intensif
              </CardDescription>
            </CardHeader>
            <CardContent className="-mt-4 p-2">
              <Button size="sm" className="h-8 w-full text-sm">
                Dapatkan Badge Beta Tester
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </SheetContent>
  );
}
