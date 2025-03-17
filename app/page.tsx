import { BackgroundGradientAnimation } from "@/components/gradient";
import { FloatingNav } from "@/components/navbar";
import Hero from "@/components/Hero";
import Page1 from "@/components/Blog1";




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