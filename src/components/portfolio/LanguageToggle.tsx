import { useTranslation } from "react-i18next";
import { PiCheck } from "react-icons/pi";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function LanguageToggle() {
  const { i18n } = useTranslation();
  const current = i18n.language?.startsWith("fi") ? "fi" : "en";

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          type="button"
          className="inline-flex h-10 items-center justify-center rounded-lg border border-border bg-background px-3 text-sm font-semibold text-foreground transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-foreground active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          aria-label="Select language"
        >
          {current === "en" ? "EN" : "FI"}
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="w-32 rounded-xl border border-border bg-card p-1 text-card-foreground shadow-sm"
      >
        <DropdownMenuItem
          className="flex cursor-pointer items-center justify-between rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] focus:bg-secondary focus:text-foreground"
          onClick={() => i18n.changeLanguage("en")}
        >
          <span>English</span>
          {current === "en" && <PiCheck className="h-4 w-4 text-accent" />}
        </DropdownMenuItem>
        <DropdownMenuItem
          className="flex cursor-pointer items-center justify-between rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] focus:bg-secondary focus:text-foreground"
          onClick={() => i18n.changeLanguage("fi")}
        >
          <span>Suomi</span>
          {current === "fi" && <PiCheck className="h-4 w-4 text-accent" />}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
