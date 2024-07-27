import "./globals.css";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { ThemeProvider } from "@/components/theme-provider";
import Sidebar from "@/components/sidebar";
import MobileNav from "@/components/mobile-nav";
import ThemeToggle from "@/components/ui/theme-toggle";
import { BotMessageSquare } from "lucide-react";

export const metadata: Metadata = {
  title: "ChatDx",
  description: "Chatbot Application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col h-screen w-screen lg:flex-row">
            <Sidebar />
            <div className="flex flex-row justify-between items-center h-14 w-full p-1 border-b bg-muted/40 lg:hidden">
              <MobileNav />
              <div className="flex flex-row items-center gap-2">
                <BotMessageSquare className="h-6 w-6" />
                <span className="text-md font-semibold">ChatDx</span>
              </div>
              <ThemeToggle />
            </div>
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
