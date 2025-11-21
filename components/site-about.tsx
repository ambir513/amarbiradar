import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Tooltip, TooltipTrigger, TooltipContent } from "./ui/tooltip";
import { Status, StatusIndicator, StatusLabel } from "./ui/status";

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

export function SiteAboutSection() {
  return (
    <section className="mx-auto my-10 max-w-3xl">
      <h1 className="text-xl font-semibold">About Me</h1>
      <div className="mx-5 my-10 flex flex-col items-start gap-4">
        <Image
          src={"/image/amarbiradar.jpeg"}
          alt="Amar Biradar"
          width={150}
          height={150}
          className="rounded-lg"
        />{" "}
        <div className="space-y-1">
          <h1 className="text-2xl font-semibold">Amar Vishwanath Biradar </h1>
          <h2 className="text-md text-muted-foreground">
            I love building products and solving real-world problems. I{"’"}m a
            very curious person.
          </h2>
          <p className="text-sm text-muted-foreground">
            BSc IT - FY {"(2025)"} from
            <Button
              asChild
              className="font-semibold text-blue-500"
              variant={"link"}
              size={"sm"}
            >
              <Link href="https://www.avc.ac.in/" target="_blank">
                Mumbai University
                <ArrowUpRight className="size-4" />
              </Link>
            </Button>
          </p>
          <div className="mt-5 flex flex-col gap-y-3">
            <h1 className="text-md font-medium">Skills</h1>
            <div className="flex flex-wrap gap-2">
              {TechStackBtn.map((item) => (
                <Tooltip key={item.name}>
                  <TooltipTrigger>
                    <Image
                      className={cn(
                        "size-5",
                        (item.name === "Prisma" || item.name === "NextJs") &&
                          "dark:invert"
                      )}
                      src={item.icons}
                      alt={item.name}
                      width={20}
                      height={20}
                    />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{item.name}</p>
                  </TooltipContent>
                </Tooltip>
              ))}
            </div>
          </div>
          <Status className="mt-5" status="online">
            <StatusIndicator />
            <StatusLabel>Available to work</StatusLabel>
          </Status>
        </div>
      </div>
    </section>
  );
}
