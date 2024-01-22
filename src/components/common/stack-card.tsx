import { Card } from "../ui/card";
import Image from "next/image";

export default function StackCard({
  name,
  src,
}: {
  name: string;
  src: string;
}) {
  return (
    <Card className="hover:scale-105 transition dark:bg-gray-800 dark:border-slate-700 transition-all duration-100 transform">
      <div
        key={name}
        className="items-center mx-auto h-full  justify-center flex flex-col mb-4"
      >
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
