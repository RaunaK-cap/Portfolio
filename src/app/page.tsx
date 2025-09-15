"use client";
import { DarkModetoggler } from "@/components/DarkModeToggler";
import { Github, Linkedin, TwitterIcon } from "lucide-react";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";

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
                <div className="flex sm:gap-10 gap-2 items-center">

                  <Link href={"https://x.com/caps_raunak"} target="_blank"> <TwitterIcon className="text-neutral-500 dark:text-white" /> </Link>
                  <Link href={"https://github.com/RaunaK-cap"} target="_blank">  <Github className="text-neutral-500 dark:text-white" /> </Link>
                  <Link href={"https://www.linkedin.com/in/raunak-kr-690185308/"} target="_blank">   <Linkedin className="text-neutral-500 dark:text-white" /> </Link>
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
          <Tabs defaultValue="Content" className="w-full h-[40rem] ">
            <TabsList className="w-full">
              <TabsTrigger value="account">Projects</TabsTrigger>
              <TabsTrigger value="password">Experience</TabsTrigger>
              <TabsTrigger value="contribution">Skills</TabsTrigger>
             
            </TabsList>
            <TabsContent value="account">
              Make changes to your account here.
            </TabsContent>
            <TabsContent value="password">
              Change your password here.
            </TabsContent>
            <TabsContent value="contribution">
              My Contribution On open sources projects
            </TabsContent>
          </Tabs>
        </div>
        <footer className="border border-t border-neutral-100 p-2 rounded-lg">
          <div className="flex items-center justify-between h-10">
              <p> @Copyright.. </p>
              <p> Contact with me </p>
          </div>
        </footer>
      </div>
      </div>
     
    </div>
  );
}
