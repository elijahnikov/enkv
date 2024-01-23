"use client";

import { Card } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { projects } from "@/lib/projects";
import { flattenedStacks } from "@/lib/stacks";
import { useMemo } from "react";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";

export default function ProjectsPage() {
  const extractedStacks = useMemo(() => {
    return flattenedStacks;
  }, []);
  return (
    <div className="grid grid-cols-3 gap-4">
      {projects.map(
        ({ description, githubUrl, name, previewUrl, stack }, index) => (
          <Card className="h-[120px] p-3" key={index}>
            <div className="flex justify-between">
              <div>
                {previewUrl ? (
                  <div className="flex">
                    <a
                      href={previewUrl}
                      target="_blank"
                      className="font-semibold hover:underline text-sm"
                    >
                      {name}
                    </a>
                    <div className="h-2 mt-[6px] ml-1 w-2 rounded-full bg-green-400" />
                  </div>
                ) : (
                  <p className="font-semibold text-sm">{name}</p>
                )}
              </div>
              {githubUrl && (
                <TooltipProvider key={index}>
                  <Tooltip>
                    <TooltipTrigger>
                      <a href={githubUrl} target="_blank">
                        <FaGithub />
                      </a>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="text-xs">View source</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              )}
            </div>
            <p className="text-xs my-2">{description}</p>

            <div className="flex">
              {stack.map((stk, index) => (
                <Card
                  key={index}
                  className="mx-auto text-center justify-center"
                >
                  <Image
                    width={40}
                    height={40}
                    src={extractedStacks[stk]}
                    alt={name}
                    className="max-w-full min-h-[55%] h-auto mx-auto mb-2"
                  />
                </Card>
              ))}
            </div>
          </Card>
        )
      )}
    </div>
  );
}
