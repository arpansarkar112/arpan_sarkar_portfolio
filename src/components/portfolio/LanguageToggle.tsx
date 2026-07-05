import { useTranslation } from "react-i18next";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function LanguageToggle() {
  const { i18n } = useTranslation();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          className="flex h-8 w-8 items-center justify-center border border-foreground bg-background text-foreground font-mono-tech text-xs uppercase tracking-widest transition hover:bg-foreground hover:text-background"
          aria-label="Select language"
        >
          {i18n.language === "en" ? "EN" : "FI"}
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="border-foreground/20 rounded-none bg-background text-foreground min-w-0 w-8 p-0">
        <DropdownMenuItem 
          className="cursor-pointer flex justify-center font-mono-tech text-xs uppercase tracking-widest focus:bg-accent focus:text-accent-foreground rounded-none px-0 py-1.5"
          onClick={() => i18n.changeLanguage("en")}
        >
          EN
        </DropdownMenuItem>
        <DropdownMenuItem 
          className="cursor-pointer flex justify-center font-mono-tech text-xs uppercase tracking-widest focus:bg-accent focus:text-accent-foreground rounded-none px-0 py-1.5"
          onClick={() => i18n.changeLanguage("fi")}
        >
          FI
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
