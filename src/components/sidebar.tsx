"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import ThemeToggle from "./ui/theme-toggle";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Home,
  Telescope,
  BotMessageSquare,
  Settings,
  LogIn,
} from "lucide-react";

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden border-r max-h-screen bg-muted/40 lg:block">
      <div className="flex flex-col h-full max-h-screen w-[250px] overflow-y-scroll gap-2">
        <div className="flex flex-row justify-between items-center border-b h-[60px] min-h-[60px] px-6">
          <div className="flex items-center gap-2">
            <BotMessageSquare className="h-6 w-6" />
            <span className="text-md font-semibold">ChatDx</span>
          </div>
          <ThemeToggle />
        </div>
        <div className="flex-1">
          <nav className="flex flex-col px-4 text-md font-medium">
            <Link
              href="/"
              className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary ${
                pathname === "/"
                  ? "text-primary bg-muted"
                  : "text-muted-foreground"
              }`}
            >
              <Home className="h-5 w-5" />
              Home
            </Link>
            <Link
              href="/discover"
              className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary ${
                pathname === "/discover"
                  ? "text-primary bg-muted"
                  : "text-muted-foreground"
              }`}
            >
              <Telescope className="h-5 w-5" />
              Discover
            </Link>
            <Link
              href="/settings"
              className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary ${
                pathname === "/settings"
                  ? "text-primary bg-muted"
                  : "text-muted-foreground"
              }`}
            >
              <Settings className="h-5 w-5" />
              Settings
            </Link>
            <Link
              href="/sign-in"
              className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary ${
                pathname === "/sign-in"
                  ? "text-primary bg-muted"
                  : "text-muted-foreground"
              }`}
            >
              <LogIn className="h-5 w-5" />
              Sign In
            </Link>
          </nav>
        </div>
        <div className="mt-auto p-4">
          <Card x-chunk="dashboard-02-chunk-0">
            <CardHeader className="pt-0 p-4">
              <CardTitle>Upgrade to Pro</CardTitle>
              <CardDescription>
                Upgrade to unlock all features and get unlimited access.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <Button size="sm" className="w-full">
                Upgrade
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </aside>
  );
}
