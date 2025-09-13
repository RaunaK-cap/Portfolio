import Image from "next/image";

export default function Home() {
  return (
    <div className=" h-screen flex items-center justify-center font-sans text-sm ">
      <div className="bg-neutral-100 w-2xl h-screen p-5">
        <div>
          <h1> Hi ! I'm Raunak </h1>
          <br />
          <Image
          className="border border-neutral-200 rounded-lg p-5"
            src="/globe.svg"
            alt="Picture of the author"
            width={100}
            height={100}
          />
        </div>
      </div>
    </div>
  );
}
