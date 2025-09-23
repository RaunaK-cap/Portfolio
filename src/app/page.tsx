"use client";
import { DarkModetoggler } from "@/components/DarkModeToggler";
import { Github, GithubIcon, Linkedin, TwitterIcon } from "lucide-react";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter
} from "@/components/ui/card";

export default function Home() {
  return (
    <div className=" min-h-screen flex items-center justify-center font-sans text-sm dark:bg-black">
      <div className="bg-neutral-100 dark:bg-black sm:w-2xl w-2xl  p-5">
        <div>
          <div className="flex  justify-between ">
            <Image
              className="border  rounded-2xl"
              src="/photo2.jpg"
              alt="Picture of the author"
              width={120}
              height={120}
            />
            <div className="">
              <div className="relative sm:right-10 ">
                <div className="flex sm:gap-10 gap-4 items-center">
                  <Link href={"https://x.com/caps_raunak"} target="_blank">
                    {" "}
                    <TwitterIcon className="text-neutral-500 dark:text-white hover:scale-150 hover:transition-all size-6" />{" "}
                  </Link>
                  <Link href={"https://github.com/RaunaK-cap"} target="_blank">
                    {" "}
                    <Github className="text-neutral-500 dark:text-white hover:scale-150 hover:transition-all size-6" />{" "}
                  </Link>
                  <Link
                    href={"https://www.linkedin.com/in/raunak-kr-690185308/"}
                    target="_blank"
                  >
                    {" "}
                    <Linkedin className="text-neutral-500 dark:text-white hover:scale-150 size-6 hover:transition-all" />{" "}
                  </Link>
                  <DarkModetoggler />
                </div>
              </div>
            </div>
          </div>
          <h1 className="mt-4 text-3xl px-2"> Hi ! I'm Raunak </h1>
          <p className="px-2 text-xs text-neutral-600 dark:text-neutral-400 mt-1">
            {" "}
            20, Earth | Full Stack / DevOps Engineer{" "}
          </p>
          <br />
          <div>
            <p className="text-neutral-500 dark:text-neutral-400 px-2 ">
              {" "}
              I'm a Full Stack & devOps Engineer , I love to Build Unique things
              from scratch to upto production level{" "}
            </p>
          </div>
        </div>
        <div>
          <div className="mt-5">
            <Tabs defaultValue="project" className="w-full h-[40rem] ">
              <TabsList className="w-full">
                <TabsTrigger value="project">
                  Projects{" "}
                  <Badge className="rounded-full bg-blue-600 dark:text-white">
                    {" "}
                    5+
                  </Badge>
                </TabsTrigger>
                <TabsTrigger value="experience">Experience</TabsTrigger>

                <TabsTrigger value="skills">Skills</TabsTrigger>
              </TabsList>
              <TabsContent value="project" className="">
                <div className=" p-2 rounded-sm">
                  <div>
                    <Card className="sm:w-[35rem] w-[19rem] mx-0 sm:mx-5">
                      <CardHeader>
                        <CardTitle>
                          {" "}
                          <h1 className=""> PatchMind </h1>
                        </CardTitle>
                        <CardDescription>
                          AI debugging Journal stores your errors in a organized
                          way
                        </CardDescription>
                        <CardAction>
                          <Link
                            href={"https://github.com/RaunaK-cap/Patchmind"}
                            target="_blank"
                          >
                            <Button
                              className="hover:cursor-pointer hover:scale-150 hover:transition-all"
                              variant="link"
                            >
                              {" "}
                              <GithubIcon />{" "}
                            </Button>
                          </Link>
                        </CardAction>
                      </CardHeader>
                      <CardContent>
                        <div className="flex justify-center items-center w-full">
                          <Link
                            href={"https://patchmind.vercel.app/"}
                            target="_blank"
                          >
                            <Image
                              className="rounded-lg "
                              src={"/patchmind.png"}
                              height={50}
                              width={400}
                              alt="patchmind"
                            />
                          </Link>
                        </div>
                        <div className="flex items-center gap-2 mt-4 overflow-auto">
                          <div className="sm:flex sm:gap-1 sm:items-center sm:space-x-0 sm:space-y-2 space-x-1 space-y-2">
                            <Badge> Next.js </Badge>
                            <Badge> Prisma </Badge>
                            <Badge> PostgreSQL </Badge>
                            <Badge> BetterAuth </Badge>
                            <Badge> React.js </Badge>
                            <Badge> Typescript </Badge>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="experience">
                Change your password here.
              </TabsContent>
              <TabsContent value="skills">

                <div className=" p-2 rounded-sm">
                  <div>
                    <Card className="sm:w-[35rem] w-[19rem] mx-0 sm:mx-5">
                      <CardHeader>
                        <CardTitle>
                          {" "}
                          <h1 className=""> PatchMind </h1>
                        </CardTitle>
                        <CardDescription>
                          
                        </CardDescription>
                        <CardAction>
                    
                        </CardAction>
                      </CardHeader>
                      <CardContent>

                        <div className="flex items-center gap-2 mt-4 overflow-auto">
                          <div className="sm:flex sm:gap-1 sm:items-center sm:space-x-0 sm:space-y-2 space-x-1 space-y-2">
                            <Badge> Next.js </Badge>
                            <Badge> Prisma </Badge>
                            <Badge> PostgreSQL </Badge>
                            <Badge> BetterAuth </Badge>
                            <Badge> React.js </Badge>
                            <Badge> Typescript </Badge>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter>
                        
                      </CardFooter>

                    </Card>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
          <footer className="border border-neutral-200 dark:border-neutral-900 p-1 rounded-lg">
            <div className="flex items-center justify-between  p-2">
              <p className="text-neutral-400"> @RaunaK.. </p>
              <div className="flex items-center sm:gap-8 gap-4">
                <p>
                  {" "}
                  <Badge> Contact with me </Badge>{" "}
                </p>
                <div className="flex sm:gap-10 gap-5 items-center ">
                  <Link href={"https://x.com/caps_raunak"} target="_blank">
                    {" "}
                    <TwitterIcon className="text-neutral-500 dark:text-white size-4 hover:scale-150 hover:transition-all" />{" "}
                  </Link>
                  <Link href={"https://github.com/RaunaK-cap"} target="_blank">
                    {" "}
                    <Github className="text-neutral-500 dark:text-white size-4 hover:scale-150 hover:transition-all" />{" "}
                  </Link>
                  <Link
                    href={"https://www.linkedin.com/in/raunak-kr-690185308/"}
                    target="_blank"
                  >
                    {" "}
                    <Linkedin className="text-neutral-500 dark:text-white size-4 hover:scale-150 hover:transition-all" />{" "}
                  </Link>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
