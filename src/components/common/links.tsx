"use client";

import { Mail, ScrollText } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { buttonVariants } from "../ui/button";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import ThemeSwitcher from "./theme-switcher";
import { useMemo } from "react";
import { useTheme } from "next-themes";

export default function Links() {
  const { theme } = useTheme();

  const links = useMemo(() => {
    return [
      {
        name: "GitHub",
        icon: <FaGithub size={20} />,
        href: "https://github.com/elijahnikov",
      },
      {
        name: "LinkedIn",
        icon: <FaLinkedin size={20} />,
        href: "https://www.linkedin.com/in/elijah-posnikov/",
      },
      {
        name: "Twitter/X",
        icon: <FaTwitter size={20} />,
        href: "https://twitter.com/_enkv",
      },
      {
        name: "Email me",
        icon: <Mail size={20} />,
        href: "mailto:enkv@pm.me",
      },
      {
        name: "My Resume",
        icon: <ScrollText size={20} />,
        href: "https://utfs.io/f/1550ba9a-3c75-46ae-9e10-169d7951d4d0-lfymu7.pdf",
      },
      {
        name: `Change to ${theme === "light" ? "dark" : "light"} mode`,
        render: <ThemeSwitcher />,
      },
    ];
  }, [theme]);

  return (
    <div className="flex mt-5 mx-auto justify-center gap-5">
      {links.map(({ href, icon, name, render }, index) => (
        <TooltipProvider key={index}>
          <Tooltip>
            <TooltipTrigger>
              {href && (
                <Link
                  className={buttonVariants({ variant: "outline" })}
                  href={href}
                >
                  {icon}
                </Link>
              )}
              {render && render}
            </TooltipTrigger>
            <TooltipContent>{name}</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      ))}
    </div>
  );
}