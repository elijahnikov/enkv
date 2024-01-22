import StackCard from "@/components/common/stack-card";
import { stacks } from "@/lib/maps";
import _ from "lodash";

export default function StackPage() {
  return (
    <div>
      {Object.entries(stacks).map(([category, items]) => (
        <div className="my-2" key={category}>
          <h2 className="mb-2">{_.startCase(_.toLower(category))}</h2>
          <div className="grid grid-cols-5 gap-2">
            {Object.entries(items).map(([name, src], index) => (
              <StackCard key={index} name={name} src={src} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
