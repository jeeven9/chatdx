import Link from "next/link";
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
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="shrink-0 lg:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="flex flex-col w-[280px]">
        <div className="flex flex-row items-center gap-2">
          <BotMessageSquare className="h-6 w-6" />
          <span className="text-md font-semibold">ChatDx</span>
        </div>
        <nav className="grid gap-2 text-md font-medium">
          <Link
            href="/"
            className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 bg-muted text-foreground hover:text-foreground"
          >
            <Home className="h-5 w-5" />
            Home
          </Link>
          <Link
            href="/discover"
            className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
          >
            <Telescope className="h-5 w-5" />
            Discover
          </Link>
          <Link
            href="/settings"
            className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
          >
            <Settings className="h-5 w-5" />
            Settings
          </Link>
          <Link
            href="/sign-in"
            className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
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
