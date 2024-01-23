import StackCard from "@/components/common/stack-card";
import { Card } from "@/components/ui/card";
import { experience } from "@/lib/experience";
import { stacks } from "@/lib/stacks";
import { useMemo } from "react";
import Image from "next/image";
import ExperienceCard from "@/components/common/experience-card";

export default function ExperiencePage() {
  const extractedStacks = useMemo(() => {
    return Object.entries(stacks).reduce(
      (acc: Record<string, string>, [category, childObject]) => {
        Object.entries(childObject).forEach(([key, value]) => {
          acc[key] = value;
        });
        return acc;
      },
      {}
    );
  }, []);

  return (
    <div className="py-5">
      <ol className="relative border-s border-gray-300 dark:border-gray-700">
        {experience.map((exp, index) => (
          <ExperienceCard experience={exp} key={index} />
        ))}
      </ol>
    </div>
  );
}
