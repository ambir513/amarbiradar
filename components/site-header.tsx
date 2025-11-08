import Link from "next/link";
import { SettingsProvider } from "./settingsContext";
import { ToggleTheme } from "./toggle-theme";

export function SiteHeader() {
  return (
    <div className="fixed top-0 z-50 h-fit w-full backdrop-blur-sm">
      <div className="mx-auto flex max-w-3xl flex-row-reverse items-center gap-x-4 px-4 py-2">
        <SettingsProvider>
          <ToggleTheme />
        </SettingsProvider>
        <Link href="/projects" className="text-md font-medium">
          Projects
        </Link>
        <Link href="/blogs" className="text-md font-medium">
          Blogs
        </Link>
      </div>
    </div>
  );
}
