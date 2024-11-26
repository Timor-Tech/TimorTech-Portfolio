import { Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";

function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  // Toggle dark mode and save preference in localStorage
  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  // Set the class for dark mode on page load based on localStorage
  useEffect(() => {
    const savedDarkMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(savedDarkMode);
    if (savedDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  // Update localStorage whenever darkMode changes
  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-800 bg-gray-950/75 backdrop-blur-sm text-gray-100">
      <div className="container flex h-16 items-center justify-between">
        <a className="flex items-center gap-2 text-lg font-semibold hover:text-purple-400 transition-colors" href="#hero">
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

        {/* Dark Mode Toggle */}
        <button
          onClick={toggleDarkMode}
          className="text-white p-2 rounded-full hover:bg-gray-700 transition-colors"
          aria-label="Toggle Dark Mode"
        >
          {darkMode ? (
            <Sun className="h-6 w-6 text-yellow-500" />
          ) : (
            <Moon className="h-6 w-6 text-gray-400" />
          )}
        </button>
      </div>
    </header>
  );
}

export default Navbar;
