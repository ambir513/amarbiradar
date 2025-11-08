import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import Link from "next/link";

const socialLink = [
  {
    link: "https://github.com/ambir513",
    icon: "https://github.com/github.png",
    name: "Github",
  },
  {
    link: "https://youtueb.com/@ambir513",
    icon: "https://upload.wikimedia.org/wikipedia/commons/7/75/YouTube_social_white_squircle_(2017).svg",
    name: "Youtube",
  },
  {
    link: "https://instagram.com/ambir513",
    icon: "https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg",
    name: "Insatagram",
  },
  {
    link: "https://x.com/ambir513",
    icon: "https://upload.wikimedia.org/wikipedia/commons/5/53/X_logo_2023_original.svg",
    name: "X",
  },
  {
    link: "https://linkedin.com/in/ambir513",
    icon: "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png",
    name: "LinkedIn",
  },
];

export function SocialLink() {
  const { theme } = useTheme();
  return (
    <div className="flex flex-row flex-wrap items-center gap-12">
      <div className="flex items-center -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:ring-background *:data-[slot=avatar]:grayscale">
        {socialLink.map((social) => (
          <Link target="_blank" href={social.link} key={social.link}>
            <Tooltip>
              <TooltipTrigger>
                <Avatar
                  className={cn(
                    "size-9 hover:z-50 active:z-50",
                    social.name === "X" && "bg-white p-1.5",
                    theme === "light"
                      ? "border-2 border-neutral-200"
                      : "border-2 border-neutral-700"
                  )}
                >
                  <AvatarImage src={social.icon} alt={social.name} />
                  <AvatarFallback>{social.name[0]}</AvatarFallback>
                </Avatar>
              </TooltipTrigger>
              <TooltipContent>
                <p>{social.name}</p>
              </TooltipContent>
            </Tooltip>
          </Link>
        ))}
        <p className="text-md ml-3 font-semibold">/@ambir513</p>
      </div>
    </div>
  );
}
