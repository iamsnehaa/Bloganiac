import { Carousel } from "./starcard";

const slides = [
  {
    title: "Better the food, Better you live",
    button: "Read More",
    src: "/images/food.jpeg",
  },
  {
    title: "The stories behind nothern lights.",
    button: "Read More",
    src: "/images/travel.jpeg",
  },
  {
    title: "Speed up the Game",
    button: "Read More",
    src: "/images/cars.jpeg",
  },
  {
    title: "The Tech-tonic Era!",
    button: "Read More",
    src: "/images/tech.jpeg",
  },
  {
    title: "The Classic age of cinema.",
    button: "Read More",
    src: "/images/movies.jpeg",
  },
];

export default function Page1() {
  return (
    <div className="relative min-h-screen w-screen py-16 px-6 overflow-hidden bg-gradient-to-b from-gray-900 via-black to-black">
      <h2 className="flex flex-col items-center justify-center text-5xl font-extrabold mt-8 mb-15 text-white tracking-wide font-serif">
      Star Writer
      </h2>
      <Carousel slides={slides} />
    </div>
  
  );
}
