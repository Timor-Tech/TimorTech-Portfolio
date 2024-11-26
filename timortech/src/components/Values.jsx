import { Globe, Code, Rocket } from "lucide-react";

export default function Values() {
  return (
    <section
      id="values"
      className="py-20 shadow-lg rounded-xl p-8 dark:bg-gray-900 dark:text-gray-200"
    >
      <h2 className="text-3xl font-bold mb-12 text-center text-gray-800 dark:text-gray-200">Our Values</h2>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="text-center">
          <Globe className="w-12 h-12 text-purple-500 mb-4 mx-auto" />
          <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">Global Impact</h3>
          <p className="text-gray-800 dark:text-gray-200">
            Creating solutions that address worldwide challenges and improve lives across the globe.
          </p>
        </div>
        <div className="text-center">
          <Code className="w-12 h-12 text-purple-500 mb-4 mx-auto" />
          <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">Ethical Innovation</h3>
          <p className="text-gray-800 dark:text-gray-200">
            Developing technology with a strong ethical framework to ensure responsible advancement.
          </p>
        </div>
        <div className="text-center">
          <Rocket className="w-12 h-12 text-purple-500 mb-4 mx-auto" />
          <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">Continuous Growth</h3>
          <p className="text-gray-800 dark:text-gray-200">
            Fostering a culture of learning and adaptation to stay at the forefront of technological progress.
          </p>
        </div>
      </div>
    </section>
  );
}
