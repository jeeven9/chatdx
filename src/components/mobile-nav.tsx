"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Home,
  BotMessageSquare,
  Menu,
  Settings,
  Telescope,
  LogIn,
} from "lucide-react";

export default function MobileNav() {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="shrink-0 lg:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent
        side="left"
        className="flex flex-col w-[280px] overflow-y-scroll"
      >
        <div className="flex flex-row items-center gap-2">
          <BotMessageSquare className="h-6 w-6" />
          <span className="text-md font-semibold">ChatDx</span>
        </div>
        <nav className="grid gap-2 text-md font-medium">
          <Link
            href="/"
            className={`mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 hover:text-foreground ${
              pathname === "/"
                ? "text-foreground bg-muted"
                : "text-muted-foreground"
            }`}
          >
            <Home className="h-5 w-5" />
            Home
          </Link>
          <Link
            href="/discover"
            className={`mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 hover:text-foreground ${
              pathname === "/discover"
                ? "text-foreground bg-muted"
                : "text-muted-foreground"
            }`}
          >
            <Telescope className="h-5 w-5" />
            Discover
          </Link>
          <Link
            href="/settings"
            className={`mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 hover:text-foreground ${
              pathname === "/settings"
                ? "text-foreground bg-muted"
                : "text-muted-foreground"
            }`}
          >
            <Settings className="h-5 w-5" />
            Settings
          </Link>
          <Link
            href="/sign-in"
            className={`mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 hover:text-foreground ${
              pathname === "/sign-in"
                ? "text-foreground bg-muted"
                : "text-muted-foreground"
            }`}
          >
            <LogIn className="h-5 w-5" />
            Sign In
          </Link>
        </nav>
        <div className="mt-auto">
          <Card>
            <CardHeader>
              <CardTitle>Upgrade to Pro</CardTitle>
              <CardDescription>
                Upgrade to unlock all features and get unlimited access.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button size="sm" className="w-full">
                Upgrade
              </Button>
            </CardContent>
          </Card>
        </div>
      </SheetContent>
    </Sheet>
  );
}
