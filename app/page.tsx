import Image from "next/image";
import { BackgroundGradientAnimation } from "@/components/gradient";
import { FloatingNav } from "@/components/navbar";
import Hero from "@/components/Hero";
import Page1 from "@/components/Blog1";
import { Carousel } from "@/components/starcard";



export default function Home() {
  return (
    <div className="relative h-screen w-screen">
      <BackgroundGradientAnimation />
      <FloatingNav />
      <Hero/>
      <Page1/>
      
    </div>
   
  );
} 