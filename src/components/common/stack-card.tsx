import { Plus } from "lucide-react";
import { Card } from "../ui/card";
import Image from "next/image";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../ui/hover-card";
import { cn } from "@/lib/utils";

export default function StackCard({
  name,
  src,
}: {
  name: string;
  src: string;
}) {
  return (
    <Card className="hover:scale-105 transition dark:bg-gray-800 dark:border-slate-700 transition-all duration-100 transform">
      <div className="items-center mx-auto h-full  justify-center flex flex-col mb-4">
        {src && (
          <Image
            width={40}
            height={40}
            src={src}
            alt={name}
            className="max-w-full min-h-[55%] h-auto mx-auto mb-2"
          />
        )}
        <p className="text-xs text-center">{name}</p>
      </div>
    </Card>
  );
}

export function ExtraStackCard({
  stack,
  length,
  small = false,
}: {
  stack: [string, string][];
  length: number;
  small?: boolean;
}) {
  return (
    <HoverCard>
      <HoverCardTrigger>
        <Card className="h-full hover:scale-105 transition dark:bg-gray-800 dark:border-slate-700 transition-all duration-100 transform items-center justify-center flex">
          <div className="flex text-slate-700 dark:text-slate-200">
            <Plus
              size={small ? 14 : 20}
              className={cn(small ? "mt-[5px]" : "mt-[14px]")}
            />
            <h1
              className={cn(
                small ? "text-[16px]" : "text-[32px]",
                "font-semibold"
              )}
            >
              {length}
            </h1>
          </div>
        </Card>
      </HoverCardTrigger>
      <HoverCardContent className="max-w-[200px] grid grid-cols-1 gap-2">
        {stack.map(([name, src], index) => (
          <Card key={index} className="p-2 items-left space-x-2 flex">
            {src && (
              <Image
                width={20}
                height={20}
                src={src}
                alt={name}
                className="min-h-[55%] "
              />
            )}
            <p className="text-xs font-semibold mt-[3px]">{name}</p>
          </Card>
        ))}
      </HoverCardContent>
    </HoverCard>
  );
}
