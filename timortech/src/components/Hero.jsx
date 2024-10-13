import { Button } from "./ui/button";

export default function Hero() {
  return (
    <section id="hero" className="py-20 text-center">
      <h1 className="text-5xl font-bold tracking-tight mb-8 relative inline-block">
        <span className="bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
          Innovating the Future
        </span>
        {/* Optional: Text shadow to enhance visibility */}
        <span className="absolute inset-0 text-5xl text-gray-100 opacity-10">
          Innovating the Future
        </span>
      </h1>
      <p className="text-xl mb-8 max-w-2xl mx-auto">
        Timor Tech is at the forefront of cutting-edge technology, creating solutions that shape tomorrow's world.
      </p>
      <Button className="bg-purple-600 hover:bg-purple-700 text-white text-lg py-6 px-8" variant="default">
        Discover Our Vision
      </Button>
    </section>
  );
}
