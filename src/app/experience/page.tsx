import { experience } from "@/lib/experience";
import ExperienceCard from "@/components/common/experience-card";

export default function ExperiencePage() {
  return (
    <div className="pt-5">
      <ol className="relative space-y-10 border-s border-gray-300 dark:border-gray-700">
        {experience.map((exp, index) => (
          <ExperienceCard experience={exp} key={index} />
        ))}
      </ol>
    </div>
  );
}
