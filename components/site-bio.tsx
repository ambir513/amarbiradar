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

const TechStackBtn = [
  {
    name: "TypeScript",
    icons: TS,
  },
  {
    name: "NextJs",
    icons: NextJSDark,
  },
  {
    name: "React",
    icons: ReactJS,
  },
  {
    name: "Prisma",
    icons: PrismaDark,
  },
  {
    name: "NeonDB",
    icons: NeonDB,
  },
];

export function SiteBio() {
  const clickAudio = useRef<HTMLAudioElement | null>(null);
  const [show, setShow] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 250);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="mt-10 w-full">
      <div className="mx-auto flex max-w-3xl flex-col gap-y-7">
        <div className="flex gap-x-3">
          <div className="rounded-full border-2 p-0.5 dark:border-neutral-800">
            <Avatar className="size-24">
              <AvatarImage src="/image/amarbiradar.jpeg" />
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
        <div>
          <div className="flex w-fit flex-wrap items-center gap-2">
            <span className="text-muted-foreground sm:text-lg">
              {" "}
              I develop interactive web app using{" "}
            </span>
            {TechStackBtn.map((item) => (
              <button
                key={item.name}
                className="flex w-fit items-center gap-3 gap-x-1 rounded-md border-2 bg-neutral-100 px-2 hover:bg-neutral-200/60 dark:border-zinc-800 dark:bg-neutral-900 hover:dark:bg-neutral-700/40"
              >
                {item.name === "NextJs" ? (
                  theme === "light" ? (
                    <NextJSDark />
                  ) : (
                    <NextJSLight />
                  )
                ) : item.name === "Prisma" ? (
                  theme === "light" ? (
                    <PrismaDark />
                  ) : (
                    <PrismaLight />
                  )
                ) : (
                  <item.icons />
                )}
                <span className="text-sm font-medium tracking-tight">
                  {item.name}
                </span>
              </button>
            ))}
            <span className="text-muted-foreground sm:text-lg">
              and also interested in mobile development like{" "}
              <span className="text-md font-medium text-primary">
                React Native
              </span>
            </span>
          </div>
        </div>
        <SocialLink />
        <div className="">
          <div className="h-28">
            {show ? (
              <iframe
                className="rounded-xl shadow-sm"
                style={{ border: "none" }}
                data-testid="embed-iframe"
                src="https://open.spotify.com/embed/album/6Unm4KKxYtjR08J1wEOnkc?utm_source=generator&theme=0"
                width="100%"
                height="80"
                loading="lazy"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              ></iframe>
            ) : (
              <Skeleton className="h-20" />
            )}
          </div>
        </div>
      </div>
      <audio ref={clickAudio} className="hidden" controls>
        <source src="/audio/amarbiradar-audio.mp3" type="audio/mp3" />
      </audio>
    </main>
  );
}

function TS() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M23.827 8.243a4.4 4.4 0 0 1 2.223 1.281 6 6 0 0 1 .852 1.143c.011.045-1.534 1.083-2.471 1.662-.034.023-.169-.124-.322-.35a2.01 2.01 0 0 0-1.67-1c-1.077-.074-1.771.49-1.766 1.433a1.3 1.3 0 0 0 .153.666c.237.49.677.784 2.059 1.383 2.544 1.095 3.636 1.817 4.31 2.843a5.16 5.16 0 0 1 .416 4.333 4.76 4.76 0 0 1-3.932 2.815 11 11 0 0 1-2.708-.028 6.53 6.53 0 0 1-3.616-1.884 6.3 6.3 0 0 1-.926-1.371 3 3 0 0 1 .327-.208c.158-.09.756-.434 1.32-.761l1.024-.6.214.312a4.8 4.8 0 0 0 1.35 1.292 3.3 3.3 0 0 0 3.458-.175 1.545 1.545 0 0 0 .2-1.974c-.276-.395-.84-.727-2.443-1.422a8.8 8.8 0 0 1-3.349-2.055 4.7 4.7 0 0 1-.976-1.777 7.1 7.1 0 0 1-.062-2.268 4.33 4.33 0 0 1 3.644-3.374 9 9 0 0 1 2.691.084m-8.343 1.483.011 1.454h-4.63v13.148H7.6V11.183H2.97V9.755a14 14 0 0 1 .04-1.466c.017-.023 2.832-.034 6.245-.028l6.211.017Z"
        fill="rgb(0, 122, 204)"
      ></path>
    </svg>
  );
}

function NextJSDark() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="m4.5 4.5.405-.293A.5.5 0 0 0 4 4.5zm3 9.5A6.5 6.5 0 0 1 1 7.5H0A7.5 7.5 0 0 0 7.5 15zM14 7.5A6.5 6.5 0 0 1 7.5 14v1A7.5 7.5 0 0 0 15 7.5zM7.5 1A6.5 6.5 0 0 1 14 7.5h1A7.5 7.5 0 0 0 7.5 0zm0-1A7.5 7.5 0 0 0 0 7.5h1A6.5 6.5 0 0 1 7.5 1zM5 12V4.5H4V12zm-.905-7.207 6.5 9 .81-.586-6.5-9zM10 4v6h1V4z"
        fill="#000"
      ></path>
    </svg>
  );
}

function NextJSLight() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="m4.5 4.5.405-.293A.5.5 0 0 0 4 4.5zm3 9.5A6.5 6.5 0 0 1 1 7.5H0A7.5 7.5 0 0 0 7.5 15zM14 7.5A6.5 6.5 0 0 1 7.5 14v1A7.5 7.5 0 0 0 15 7.5zM7.5 1A6.5 6.5 0 0 1 14 7.5h1A7.5 7.5 0 0 0 7.5 0zm0-1A7.5 7.5 0 0 0 0 7.5h1A6.5 6.5 0 0 1 7.5 1zM5 12V4.5H4V12zm-.905-7.207 6.5 9 .81-.586-6.5-9zM10 4v6h1V4z"
        fill="#fff"
      ></path>
    </svg>
  );
}

function ReactJS() {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="16" cy="15.974" r="2.5" fill="#00d8ff"></circle>
      <path
        d="M16 21.706a28.4 28.4 0 0 1-8.88-1.2 11.3 11.3 0 0 1-3.657-1.958A3.54 3.54 0 0 1 2 15.974c0-1.653 1.816-3.273 4.858-4.333A28.8 28.8 0 0 1 16 10.293a28.7 28.7 0 0 1 9.022 1.324 11.4 11.4 0 0 1 3.538 1.866A3.4 3.4 0 0 1 30 15.974c0 1.718-2.03 3.459-5.3 4.541a28.8 28.8 0 0 1-8.7 1.191m0-10.217a28 28 0 0 0-8.749 1.282c-2.8.977-4.055 2.313-4.055 3.2 0 .928 1.349 2.387 4.311 3.4A27.2 27.2 0 0 0 16 20.51a27.6 27.6 0 0 0 8.325-1.13C27.4 18.361 28.8 16.9 28.8 15.974a2.33 2.33 0 0 0-1.01-1.573 10.2 10.2 0 0 0-3.161-1.654A27.5 27.5 0 0 0 16 11.489"
        fill="#00d8ff"
      ></path>
      <path
        d="M10.32 28.443a2.64 2.64 0 0 1-1.336-.328c-1.432-.826-1.928-3.208-1.327-6.373a28.8 28.8 0 0 1 3.4-8.593 28.7 28.7 0 0 1 5.653-7.154 11.4 11.4 0 0 1 3.384-2.133 3.4 3.4 0 0 1 2.878 0c1.489.858 1.982 3.486 1.287 6.859a28.8 28.8 0 0 1-3.316 8.133 28.4 28.4 0 0 1-5.476 7.093 11.3 11.3 0 0 1-3.523 2.189 4.9 4.9 0 0 1-1.624.307m1.773-14.7a28 28 0 0 0-3.26 8.219c-.553 2.915-.022 4.668.75 5.114.8.463 2.742.024 5.1-2.036a27.2 27.2 0 0 0 5.227-6.79 27.6 27.6 0 0 0 3.181-7.776c.654-3.175.089-5.119-.713-5.581a2.33 2.33 0 0 0-1.868.089A10.2 10.2 0 0 0 17.5 6.9a27.5 27.5 0 0 0-5.4 6.849Z"
        fill="#00d8ff"
      ></path>
      <path
        d="M21.677 28.456c-1.355 0-3.076-.82-4.868-2.361a28.8 28.8 0 0 1-5.747-7.237 28.7 28.7 0 0 1-3.374-8.471 11.4 11.4 0 0 1-.158-4A3.4 3.4 0 0 1 8.964 3.9c1.487-.861 4.01.024 6.585 2.31a28.8 28.8 0 0 1 5.39 6.934 28.4 28.4 0 0 1 3.41 8.287 11.3 11.3 0 0 1 .137 4.146 3.54 3.54 0 0 1-1.494 2.555 2.6 2.6 0 0 1-1.315.324m-9.58-10.2a28 28 0 0 0 5.492 6.929c2.249 1.935 4.033 2.351 4.8 1.9.8-.465 1.39-2.363.782-5.434A27.2 27.2 0 0 0 19.9 13.74a27.6 27.6 0 0 0-5.145-6.64c-2.424-2.152-4.39-2.633-5.191-2.169a2.33 2.33 0 0 0-.855 1.662 10.2 10.2 0 0 0 .153 3.565 27.5 27.5 0 0 0 3.236 8.1Z"
        fill="#00d8ff"
      ></path>
    </svg>
  );
}

function PrismaLight() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="-27 0 310 310"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid"
    >
      <path
        fill="#fff"
        d="M254.313 235.519 148 9.749A17.06 17.06 0 0 0 133.473.037a16.87 16.87 0 0 0-15.533 8.052L2.633 194.848a17.47 17.47 0 0 0 .193 18.747L59.2 300.896a18.13 18.13 0 0 0 20.363 7.489l163.599-48.392a17.93 17.93 0 0 0 11.26-9.722 17.54 17.54 0 0 0-.101-14.76zm-23.802 9.683-138.823 41.05c-4.235 1.26-8.3-2.411-7.419-6.685l49.598-237.484c.927-4.443 7.063-5.147 9.003-1.035l91.814 194.973a6.63 6.63 0 0 1-4.18 9.18z"
      ></path>
    </svg>
  );
}
function PrismaDark() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="-27 0 310 310"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid"
    >
      <path
        fill="#000"
        d="M254.313 235.519 148 9.749A17.06 17.06 0 0 0 133.473.037a16.87 16.87 0 0 0-15.533 8.052L2.633 194.848a17.47 17.47 0 0 0 .193 18.747L59.2 300.896a18.13 18.13 0 0 0 20.363 7.489l163.599-48.392a17.93 17.93 0 0 0 11.26-9.722 17.54 17.54 0 0 0-.101-14.76zm-23.802 9.683-138.823 41.05c-4.235 1.26-8.3-2.411-7.419-6.685l49.598-237.484c.927-4.443 7.063-5.147 9.003-1.035l91.814 194.973a6.63 6.63 0 0 1-4.18 9.18z"
      ></path>
    </svg>
  );
}

function NeonDB() {
  return (
    <svg
      width="14"
      height="14"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 28 28"
      fill="none"
    >
      <path
        fill="#12FFF7"
        fillRule="evenodd"
        d="M0 4.828C0 2.16 2.172 0 4.851 0h18.436c2.679 0 4.85 2.161 4.85 4.828V20.43c0 2.758-3.507 3.955-5.208 1.778l-5.318-6.809v8.256c0 2.4-1.955 4.345-4.367 4.345H4.851C2.172 28 0 25.839 0 23.172zm4.851-.966a.97.97 0 0 0-.97.966v18.344c0 .534.435.966.97.966h8.539c.268 0 .34-.216.34-.483v-11.07c0-2.76 3.507-3.956 5.208-1.779l5.319 6.809V4.828c0-.534.05-.966-.485-.966z"
        clipRule="evenodd"
      ></path>
      <path
        fill="url(#neondb-a)"
        fillRule="evenodd"
        d="M0 4.828C0 2.16 2.172 0 4.851 0h18.436c2.679 0 4.85 2.161 4.85 4.828V20.43c0 2.758-3.507 3.955-5.208 1.778l-5.318-6.809v8.256c0 2.4-1.955 4.345-4.367 4.345H4.851C2.172 28 0 25.839 0 23.172zm4.851-.966a.97.97 0 0 0-.97.966v18.344c0 .534.435.966.97.966h8.539c.268 0 .34-.216.34-.483v-11.07c0-2.76 3.507-3.956 5.208-1.779l5.319 6.809V4.828c0-.534.05-.966-.485-.966z"
        clipRule="evenodd"
      ></path>
      <path
        fill="url(#neondb-b)"
        fillRule="evenodd"
        d="M0 4.828C0 2.16 2.172 0 4.851 0h18.436c2.679 0 4.85 2.161 4.85 4.828V20.43c0 2.758-3.507 3.955-5.208 1.778l-5.318-6.809v8.256c0 2.4-1.955 4.345-4.367 4.345H4.851C2.172 28 0 25.839 0 23.172zm4.851-.966a.97.97 0 0 0-.97.966v18.344c0 .534.435.966.97.966h8.539c.268 0 .34-.216.34-.483v-11.07c0-2.76 3.507-3.956 5.208-1.779l5.319 6.809V4.828c0-.534.05-.966-.485-.966z"
        clipRule="evenodd"
      ></path>
      <path
        fill="#B9FFB3"
        d="M23.287 0c2.679 0 4.85 2.161 4.85 4.828V20.43c0 2.758-3.507 3.955-5.208 1.778l-5.319-6.809v8.256c0 2.4-1.954 4.345-4.366 4.345a.484.484 0 0 0 .485-.483V12.584c0-2.758 3.508-3.955 5.21-1.777l5.318 6.808V.965a.97.97 0 0 0-.97-.965"
      ></path>
      <defs>
        <linearGradient
          id="neondb-a"
          x1="28.138"
          x2="3.533"
          y1="28"
          y2="-0.12"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#B9FFB3"></stop>
          <stop offset="1" stopColor="#B9FFB3" stopOpacity="0"></stop>
        </linearGradient>
        <linearGradient
          id="neondb-b"
          x1="28.138"
          x2="11.447"
          y1="28"
          y2="21.476"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#1A1A1A" stopOpacity="0.9"></stop>
          <stop offset="1" stopColor="#1A1A1A" stopOpacity="0"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
}
