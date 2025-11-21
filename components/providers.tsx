import { ThemeProvider } from "next-themes";
import type { Track } from "@/lib/audio";
import { AudioProvider } from "./audio/provider";

const customTracks: Track[] = [
  {
    id: "1",
    title: "Beautiful Loop",
    artist: "Flavio Concini",
    album: "Pixabay Music",
    url: "/audio/music.mp3",
    genre: "Upbeat",
  },
];

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider attribute="class">
      <AudioProvider tracks={customTracks}>{children}</AudioProvider>
    </ThemeProvider>
  );
};
