import { useEffect, useState } from "react";
import { PiDesktop, PiMoon, PiSun, PiCheck } from "react-icons/pi";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type ThemeMode = "light" | "dark" | "system";

export function ThemeToggle() {
  const [mode, setMode] = useState<ThemeMode>("system");

  const applyTheme = (nextMode: ThemeMode) => {
    const prefersDark =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    const isDark = nextMode === "dark" || (nextMode === "system" && prefersDark);
    document.documentElement.classList.toggle("dark", isDark);
  };

  useEffect(() => {
    const stored =
      typeof window !== "undefined"
        ? (localStorage.getItem("theme") as ThemeMode | null)
        : null;
    const initial: ThemeMode =
      stored === "light" || stored === "dark" || stored === "system"
        ? stored
        : "system";
    setMode(initial);
    applyTheme(initial);

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => {
      const current = (localStorage.getItem("theme") as ThemeMode | null) || "system";
      if (current === "system") {
        applyTheme("system");
      }
    };
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const selectTheme = (nextMode: ThemeMode) => {
    setMode(nextMode);
    localStorage.setItem("theme", nextMode);
    applyTheme(nextMode);
  };

  const options: { value: ThemeMode; label: string; Icon: typeof PiSun }[] = [
    { value: "light", label: "Light", Icon: PiSun },
    { value: "dark", label: "Dark", Icon: PiMoon },
    { value: "system", label: "System", Icon: PiDesktop },
  ];

  const ActiveIcon =
    mode === "light" ? PiSun : mode === "dark" ? PiMoon : PiDesktop;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          type="button"
          aria-label="Theme settings"
          className="inline-flex h-10 items-center gap-2 rounded-lg border border-border bg-background px-3 text-sm font-semibold text-foreground transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-foreground active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          <ActiveIcon className="h-4 w-4 text-accent" />
          <span className="hidden sm:inline">
            {mode === "light" ? "Light" : mode === "dark" ? "Dark" : "Auto"}
          </span>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="w-36 rounded-xl border border-border bg-card p-1 text-card-foreground shadow-sm"
      >
        {options.map(({ value, label, Icon }) => (
          <DropdownMenuItem
            key={value}
            onClick={() => selectTheme(value)}
            className="flex cursor-pointer items-center justify-between rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] focus:bg-secondary focus:text-foreground"
          >
            <span className="flex items-center gap-2">
              <Icon className="h-4 w-4 text-muted-foreground" />
              {label}
            </span>
            {mode === value && <PiCheck className="h-4 w-4 text-accent" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
