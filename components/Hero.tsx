"use client";

import Image from "next/image";
import { useState } from "react";
import SearchBar from "./Searchbar";
import CategoriesDropdown from "./categories";
import { BentoGrid, BentoGridItem } from "./bento/bento";

export default function Hero() {
  const [SearchQuery, setSearchQuery] = useState("");

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen  space-y-6">

      <div className="absolute top-4 right-4 w-1/4">
        <SearchBar onSearch={setSearchQuery} />
      </div>

      <CategoriesDropdown />
      <div className="w-full flex justify-start ml-auto">
      <Image
    src="/bloganiac.png"
    alt="Logo"
    width={700}
    height={700}
    priority
    
  />
  
</div>

      <div className=" absolute top-10 right-6 justify-end ">

        <BentoGrid className="scale-95">
          <BentoGridItem
          
          title="Feeling Snackiss.."
          description="Share your Snack recipes."
          imagesrc="/images/cake.jpeg"
          className="col-span-1 row-span-1"/>
          <BentoGridItem
          title="Keeping up with Sharma's"
          description="Share your lifestyle."
          imagesrc="/images/moi.jpeg"
          className="col-span-1 row-span-2"/>
        
        <BentoGridItem
          title="Coffee for life"
          description="Share your survival stories."
          imagesrc="/images/coffee.jpeg"
          className="col-span-1 row-span-3"/>
          <BentoGridItem
          title="History beyond life"
          description="Read about culture and history."
          imagesrc="/images/arch.jpeg"
          className="col-span-1 row-span-2"/>
          <BentoGridItem
          title="Essence of life"
          description="Lifeguard you want to rely on."
          imagesrc="/images/life.jpeg"
          className="col-span-1 row-span-1"/>
          </BentoGrid>
      </div>
    </div>
  );
}
