import { Carousel } from "./starcard";

const slides = [
  {
    title: "Better the food, Better you live",
    button: "Learn More",
    src: "/images/food.jpeg",
  },
  {
    title: "The stories behind nothern lights.",
    button: "Explore",
    src: "/images/travel.jpeg",
  },
  {
    title: "Speed up the Game",
    button: "Get Started",
    src: "/images/cars.jpeg",
  },
  {
    title: "Speed up the Game",
    button: "Get Started",
    src: "/images/tech.jpeg",
  },
  {
    title: "Speed up the Game",
    button: "Get Started",
    src: "/images/movies.jpeg",
  },
];

export default function Page1() {
  return (
    <div className="relative min-h-screen w-screen py-10">
      <h2 className="flex flex-col items-center justify-center text-4xl font-bold mt-4 text-white">Star Writer</h2>
      <Carousel slides={slides} />
    </div>
  );
}
