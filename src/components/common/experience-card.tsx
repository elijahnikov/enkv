import { ExperienceType } from "@/lib/experience";
import { Card } from "../ui/card";
import ExperienceCardModel from "./experience-card-modal";
import Link from "next/link";

export default function ExperienceCard({
  experience,
}: {
  experience: ExperienceType;
}) {
  const { company, duration, location, title, website } = experience;
  return (
    <li className=" ms-4">
      <div className="absolute w-3 h-3 bg-gray-300 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
      <div className="mb-1 text-sm font-normal leading-none text-gray-600 dark:text-gray-400">
        {duration}
      </div>
      <Card className="p-5 mt-2 dark:bg-gray-800 dark:border-slate-700">
        <div className="flex justify-between">
          <div className="flex">
            <Link
              href={website}
              target="_blank"
              className="text-lg hover:underline font-bold text-gray-900 dark:text-white"
            >
              {company}
            </Link>
            <p className="font-bold mt-1 mx-1">-</p>
            <h3 className="text-sm mt-[5px]">{title}</h3>
          </div>
          <h3 className="text-xs mt-[5px] bg-green-100 px-2 py-1 dark:bg-slate-900 rounded-lg">
            {location}
          </h3>
        </div>
        <ExperienceCardModel experience={experience} />
      </Card>
    </li>
  );
}
