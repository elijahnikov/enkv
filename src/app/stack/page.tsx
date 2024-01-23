import StackCard, { ExtraStackCard } from "@/components/common/stack-card";
import { Card } from "@/components/ui/card";
import { stacks } from "@/lib/stacks";
import _ from "lodash";
import { Plus } from "lucide-react";

export default function StackPage() {
  console.log(1);
  return (
    <div>
      {Object.entries(stacks).map(([category, items]) => (
        <div className="my-2" key={category}>
          <h2 className="mb-2">{_.startCase(_.toLower(category))}</h2>
          <div className="grid grid-cols-5 gap-2">
            {Object.entries(items)
              .slice(0, 9)
              .map(([name, src], index) => (
                <StackCard key={index} name={name} src={src} />
              ))}
            {Object.entries(items).length >= 9 && (
              <ExtraStackCard
                length={Object.entries(items).length - 9}
                stack={Object.entries(items).slice(
                  9,
                  Object.entries(items).length
                )}
              />
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
