import Image from "next/image";
import profile from "../../public/profile.png";

export default function Home() {

   return (
    <div className="flex items-center flex-col-reverse laptop:flex-row justify-center h-[calc(100vh-116px)] gap-8 px-4">
      <div className="flex-1 flex flex-col font-mono laptop:text-[90px] tablet:text-[70px] mobile:text-[50px] text-center laptop:text-left">
        <span className="text-blue-400">FRONT-END</span>
        <span>AHMED</span>
        <span className="text-red-500">DEVELOPER</span>
        <p className="text-sm">Hi there! I&apos;m Ahmed, a 23 Year Old Front-end Developer</p>
      </div>
      <div className="flex-1 flex justify-end items-center">
        <div className="relative w-[300px] h-[300px] laptop:w-[400px] laptop:h-[400px] tablet:w-[350px] tablet:h-[350px] mobile:w-[250px] mobile:h-[250px]">
          <Image src={profile} alt="Ahmed" fill className="rounded-full mt-8 object-cover"/>
        </div>
      </div>
    </div>
  );
}
