"use client";

import { cn } from "@/lib/utils";
import Links from "./links";
import Navigation from "./nav-bar";

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="z-20 flex flex-col lg:flex-row h-screen ">
        <main className="z-10 mx-auto flex h-full w-full flex-col items-center gap-6 px-4 py-8 sm:px-6 pt-12 lg:px-8">
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
