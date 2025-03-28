
import { FloatingNav } from "@/components/navbar";
import Hero from "@/components/Hero";
import Page1 from "@/components/Blog1";
import Footer from "@/components/Footer";
import CreatePost from "@/components/Createapost";

export default function Home() {
  return (
    <div className="relative h-screen w-screen">
      <FloatingNav />
      <Hero />
      <Page1 />
      <CreatePost />
      <Footer />
    </div>
  );
}
