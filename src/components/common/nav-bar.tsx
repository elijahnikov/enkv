"use client";

import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "../ui/navigation-menu";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const navigation = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Stack",
    href: "/stack",
  },
  {
    name: "Experience",
    href: "/experience",
  },
  {
    name: "Projects",
    href: "/projects",
  },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <div className="bg-white dark:bg-black dark:border-slate-800 w-full rounded-md mb-5 py-2 border">
      <NavigationMenu className="w-full mx-auto flex justify-center">
        <NavigationMenuList>
          {navigation.map(({ href, name }, index) => (
            <NavigationMenuItem key={index}>
              <Link href={href} legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(
                    pathname === href ? "bg-accent" : "bg-background",
                    "group inline-flex h-10 w-max items-center justify-center rounded-md px-2 py-2 sm:px-4 sm:py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                  )}
                >
                  {name}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
