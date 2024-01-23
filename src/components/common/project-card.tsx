import { ProjectsType } from "@/lib/projects";
import { Card } from "../ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { flattenedStacks } from "@/lib/stacks";
import { FaGithub } from "react-icons/fa";
import { ExtraStackCard } from "./stack-card";
import Image from "next/image";
import { useMemo } from "react";

export default function ProjectCard({ project }: { project: ProjectsType }) {
  const { description, githubUrl, name, previewUrl, stack } = project;
  const extractedStacks = useMemo(() => {
    return flattenedStacks;
  }, []);
  return (
    <Card className="flex flex-col min-h-[120px] p-3">
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
          <TooltipProvider>
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
      <p className="text-xs mt-2 mb-4">{description}</p>

      <div className="grid grid-cols-5 mt-auto gap-0">
        {stack.slice(0, 4).map((stk, index) => (
          <Card
            key={index}
            className="dark:bg-gray-800 hover:scale-105 transition-all duration-100 transform transition mx-auto items-center p-1 flex text-center justify-center"
          >
            <Image
              width={25}
              height={25}
              src={extractedStacks[stk]}
              alt={name}
              className="mx-auto"
            />
          </Card>
        ))}
        {stack.length >= 4 && (
          <ExtraStackCard
            small
            length={stack.length - 4}
            stack={stack
              .slice(4, stack.length)
              .map((stk) => [stk, flattenedStacks[stk]])}
          />
        )}
      </div>
    </Card>
  );
}
