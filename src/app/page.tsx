import { Container } from "@/components/common/page-layout";
import Image from "next/image";

export default function Home() {
  return (
    <Container>
      <div className="flex items-center justify-between">
        <div className="h-48 flex items-center">
          <div>
            <h1 className="font-bold text-2xl">Elijah Posnikov</h1>
            <p className="max-w-[400px]">
              Hey there!👋🏻 {`I'm`} a software developer with a keen eye for
              detail and a passion for turning awesome ideas into sleek, user
              friendly software solutions.
            </p>
          </div>
        </div>
        <div className="w-[200px] items-center flex h-full justify-center">
          <Image
            src={
              "https://utfs.io/f/248fc5d3-0da0-4d86-85a1-a44e48020e27-h2az4q.jpg"
            }
            className="rounded-2xl object-contain"
            alt="headshot"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      </div>
    </Container>
  );
}
