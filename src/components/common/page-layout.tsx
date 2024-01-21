"use client";

import { cn } from "@/lib/utils";
import ThemeSwitcher from "./theme-switcher";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "../ui/navigation-menu";
import Link from "next/link";
import { Button } from "../ui/button";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Mail, ScrollText } from "lucide-react";
import Links from "./links";
import Navigation from "./nav-bar";

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="z-20 flex flex-col lg:flex-row h-screen dark:bg-enkvdark dark:bg-none bg-gradient-to-l from-[#71fbff1a] to-[#ffe1881a]">
        <main className="z-10 mx-auto flex h-full w-full flex-col items-center gap-6 px-4 py-8 dark:bg-brand sm:px-6 pt-12 lg:px-8">
          <div className={cn("w-[90vw] sm:w-[90vw] md:w-[60vw] lg:w-[50vw]")}>
            <Navigation />
            <div className="flex flex-col">{children}</div>
            <Links />
          </div>
        </main>
      </div>
    </>
  );
}

export function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-lg border-[1px] border-gray-200 dark:border-slate-800 bg-white dark:bg-black p-5">
      <div className="w-[100%]">{children}</div>
    </div>
  );
}
