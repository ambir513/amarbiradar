import { SettingsProvider } from "./settingsContext";
import { ToggleTheme } from "./toggle-theme";

export function SiteHeader() {
  return (
    <div className="w-full">
      <div className="mx-auto flex max-w-3xl flex-row-reverse items-center gap-x-4 px-4 py-2">
        <SettingsProvider>
          <ToggleTheme /> 
        </SettingsProvider>
        <p>Projects</p>
        <p>Blogs</p>
      </div>
    </div>
  );
}
