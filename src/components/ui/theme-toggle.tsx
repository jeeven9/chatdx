"use client";

import { useState } from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const [mode, setMode] = useState<string>("light");
  const { setTheme } = useTheme();

  function handleClick() {
    if (mode == "light") {
      setTheme("dark");
      setMode("dark");
    } else {
      setTheme("light");
      setMode("light");
    }
  }

  return (
    <>
      {mode == "light" ? (
        <Button variant="outline" size="icon" onClick={handleClick}>
          <Sun className="size-5" />
        </Button>
      ) : (
        <Button variant="outline" size="icon" onClick={handleClick}>
          <Moon className="size-5" />
        </Button>
      )}
    </>
  );
}
