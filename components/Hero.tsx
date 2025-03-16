import Image from "next/image";
import { ColourfulText } from "./colortext";

export default function Hero() {
    return (
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none space-y-4">
        <Image
         src="/bloganiac.png"
         alt="Centered Image"
         width={500}
         height={500}
         priority />
      <div className="flex flex-wrap justify-center items-center text-center text-4xl ">
        <h2 className="mr-2">Welcome to all the</h2>
        <ColourfulText text="Maniacs" />
        <h2 className="mx-2">who likes to</h2>
        <ColourfulText text="Blog" />
        
      </div>
      </div>
    );
}