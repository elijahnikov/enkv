import { ExperienceType } from "@/lib/experience";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { stacks } from "@/lib/stacks";
import StackCard from "./stack-card";

export default function ExperienceCardModel({
  experience,
}: {
  experience: ExperienceType;
}) {
  const extractedObjects = Object.entries(stacks).reduce(
    (acc: Record<string, string>, [category, childObject]) => {
      Object.entries(childObject).forEach(([key, value]) => {
        acc[key] = value;
      });
      return acc;
    },
    {}
  );
  const { company, title, pointers, stack } = experience;
  return (
    <Dialog>
      <DialogTrigger>
        <p className="underline mt-2">Read more</p>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            <div className="flex">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                {company}
              </h3>
              <h3 className="text-sm mt-[5px] ml-2">{title}</h3>
            </div>
          </DialogTitle>
        </DialogHeader>
        <div>
          <ul>
            {pointers.map((point, index) => (
              <li
                className="flex text-sm my-5 text-gray-600 dark:text-gray-300"
                key={index}
              >
                <div className=" w-3 h-3 mt-1 mr-2 bg-gray-300 rounded-full min-w-3 border border-white dark:border-gray-900 dark:bg-gray-700"></div>

                {point}
              </li>
            ))}
          </ul>
        </div>
        <h3 className="text-sm underline">Technologies used and learnt:</h3>
        <div className="grid grid-cols-4 gap-4">
          {stack.map((stk, index) => {
            const src = extractedObjects[stk];
            return <StackCard key={index} src={src} name={stk} />;
          })}
        </div>
      </DialogContent>
    </Dialog>
  );
}
