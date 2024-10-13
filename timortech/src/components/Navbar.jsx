import { Rocket } from "lucide-react";
// import Link from "next/link"; // You may skip this if not needed

function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-800 bg-gray-950/75 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between">
        <a className="flex items-center gap-2 text-lg font-semibold" href="#hero">
          <img src="/TimorTech.png" alt="Timor Tech Logo" className="w-8 h-8" />
          <span>Timor Tech</span>
        </a>
        <nav className="hidden md:flex gap-6">
          <a className="text-sm font-medium hover:text-purple-400 transition-colors" href="#about">
            About
          </a>
          <a className="text-sm font-medium hover:text-purple-400 transition-colors" href="#values">
            Values
          </a>
          <a className="text-sm font-medium hover:text-purple-400 transition-colors" href="#projects">
            Projects
          </a>
          <a className="text-sm font-medium hover:text-purple-400 transition-colors" href="#contact">
            Contact
          </a>
        </nav>
        <a href="#contact" className="bg-purple-600 hover:bg-purple-700 text-white text-sm px-4 py-2 rounded">
          Get Started
        </a>
      </div>
    </header>
  );
}

export default Navbar;
