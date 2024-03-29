import { Container } from "@/components/common/page-layout";
import Image from "next/image";

export default function Home() {
  return (
    <Container>
      <div className="block sm:flex items-center justify-between">
        <div className="flex items-center">
          <div>
            <h1 className="font-bold text-2xl mb-2">Elijah Posnikov</h1>
            <p className="sm:max-w-[400px]">
              Hey there 👋🏻! {`I'm`} a software developer with a keen eye for
              detail and a passion for turning awesome ideas into sleek, user
              friendly software solutions.
            </p>
            <div className="mt-5">
              <p>
                I develop things as a Software Developer at{" "}
                <a
                  href="https://www.airfinity.com/"
                  className="text-sm font-semibold underline"
                >
                  Airfinity
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="w-[50%] sm:mt-0 mt-5 mx-auto sm:w-[200px] items-center flex justify-center">
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
