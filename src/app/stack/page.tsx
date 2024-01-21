import { Card, CardContent } from "@/components/ui/card";
import _ from "lodash";
import Image from "next/image";

const sections = [
  "languages",
  "tools and frameworks",
  "testing",
  "cloud",
] as const;
type SectionsIndex = (typeof sections)[number];

type SectionsObjType = Record<string, string>;
type StacksType = Record<SectionsIndex, SectionsObjType>;

const stacks: StacksType = {
  languages: {
    TypeScript:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    JavaScript:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    SQL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    Python:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    Java: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  },
  cloud: {
    Vercel: "https://cdn.svgporn.com/logos/vercel-icon.svg",
    AWS: "https://cdn.svgporn.com/logos/aws.svg",
    Upstash: "https://cdn.svgporn.com/logos/upstash-icon.svg",
    Supabase: "https://cdn.svgporn.com/logos/supabase-icon.svg",
    PlanetScale: "https://cdn.svgporn.com/logos/planetscale.svg",
  },
  "tools and frameworks": {
    React: "https://cdn.svgporn.com/logos/react.svg",
    "Next.js": "https://cdn.svgporn.com/logos/nextjs-icon.svg",
    "Node.js": "https://cdn.svgporn.com/logos/nodejs-icon.svg",
    GraphQL: "https://cdn.svgporn.com/logos/graphql.svg",
    Prisma: "https://cdn.svgporn.com/logos/prisma.svg",
    tRPC: "https://cdn.svgporn.com/logos/trpc.svg",
    "React Query": "https://cdn.svgporn.com/logos/react-query-icon.svg",
    Tailwind: "https://cdn.svgporn.com/logos/tailwindcss-icon.svg",
    "D3.js": "https://cdn.svgporn.com/logos/d3.svg",
    Webworkers: "",
  },
  testing: {
    Cypress: "https://cdn.svgporn.com/logos/cypress-icon.svg",
    Jest: "https://cdn.svgporn.com/logos/jest.svg",
    Storybook: "https://cdn.svgporn.com/logos/storybook-icon.svg",
  },
};

export default function StackPage() {
  return (
    <div>
      {Object.entries(stacks).map(([category, items]) => (
        <div className="my-2" key={category}>
          <h2 className="mb-1">{_.startCase(_.toLower(category))}</h2>
          <div className="grid grid-cols-5 gap-2">
            {Object.entries(items).map(([name, src], index) => (
              <Card
                key={index}
                className="hover:scale-105 transition transition-all duration-500 transform"
              >
                <div
                  key={name}
                  className="items-center mx-auto h-full justify-center flex flex-col mb-4"
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
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
