"use client";
import { Volume2 } from "lucide-react";
import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";
import { SocialLink } from "./social-link";
import { Skeleton } from "./ui/skeleton";
import { cn } from "@/lib/utils";
import AudioPlay from "./audio-play";
import { Button } from "./ui/button";

const TechStackBtn = [
  {
    name: "TypeScript",
    icons: "/image/typescript.svg",
  },
  {
    name: "NextJs",
    icons: "/image/nextjs.svg",
  },
  {
    name: "React",
    icons: "/image/reactjs.svg",
  },
  {
    name: "NodeJs",
    icons: "/image/nodejs.svg",
  },
  {
    name: "MongoDB",
    icons: "/image/mongodb.svg",
  },
  {
    name: "Prisma",
    icons: "/image/prisma.svg",
  },
];

export function SiteBio() {
  const clickAudio = useRef<HTMLAudioElement | null>(null);
  const { theme } = useTheme();

  return (
    <main className="mt-10 w-full">
      <div className="mx-auto flex max-w-3xl flex-col gap-y-7">
        {/* Avatar & name */}
        <div className="flex gap-x-3">
          <div className="rounded-full border-2 p-0.5 dark:border-neutral-800">
            <Avatar className="size-24">
              <AvatarImage src="/image/ambir.jpeg" />
              <AvatarFallback className="text-5xl">AB</AvatarFallback>
            </Avatar>
          </div>

          <div className="mt-12">
            <div className="flex items-center gap-x-2">
              <p className="text-2xl font-bold select-none">Amar Biradar</p>
              <Tooltip>
                <TooltipTrigger>
                  <Volume2
                    className="text-muted-foreground active:scale-95"
                    size={18}
                    onClick={() => {
                      if (clickAudio.current) {
                        clickAudio.current.currentTime = 0;
                        clickAudio.current.play();
                      }
                    }}
                  />
                </TooltipTrigger>
                <TooltipContent>
                  <p>अमर बिरादर</p>
                </TooltipContent>
              </Tooltip>
            </div>
            <p className="text-sm text-muted-foreground select-none">
              19 • engineer • developer • builder
            </p>
          </div>
        </div>
        {/* Tech Stack */}
        <div>
          <div className="flex w-fit flex-wrap items-center gap-2">
            <span className="text-muted-foreground sm:text-lg">
              I develop interactive web apps using{" "}
            </span>

            {TechStackBtn.map((item) => (
              <Button key={item.name} variant={"outline"} size={"xxs"}>
                <Image
                  className={cn(
                    "size-3.5",
                    (item.name === "Prisma" || item.name === "NextJs") &&
                      "dark:invert"
                  )}
                  src={item.icons}
                  alt={item.name}
                  width={14}
                  height={14}
                />
                <span className="text-sm font-medium tracking-tight">
                  {item.name}
                </span>
              </Button>
            ))}

            <span className="text-muted-foreground sm:text-lg">
              and also interested in mobile development like{" "}
              <span className="text-md font-medium text-primary">
                React Native
              </span>
            </span>
          </div>
        </div>
        {/* Social links */}
        <SocialLink />
        <AudioPlay />
      </div>

      <audio ref={clickAudio} className="hidden" controls>
        <source src="/audio/amarbiradar-audio.mp3" type="audio/mp3" />
      </audio>
    </main>
  );
}
