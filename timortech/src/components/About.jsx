import { Cpu } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20">
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">About Us</h2>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-lg mb-4 text-gray-800 dark:text-gray-200">
            Timor Tech is a pioneering startup dedicated to pushing the boundaries of technology. Our team of visionaries
            and innovators work tirelessly to create solutions that address the world's most pressing challenges.
          </p>
          <p className="text-lg text-gray-800 dark:text-gray-200">
            From artificial intelligence to sustainable energy, we're committed to developing technologies that make a
            positive impact on society and the environment.
          </p>
        </div>
        <div className="shadow-lg p-8 rounded-lg dark:bg-gray-800">
          <Cpu className="w-16 h-16 text-purple-500 mb-4 mx-auto" />
          <h3 className="text-xl font-semibold mb-2 text-center text-gray-800 dark:text-gray-200">Cutting-Edge Innovation</h3>
          <p className="text-center text-gray-800 dark:text-gray-100">
            Our advanced AI algorithms and machine learning models are designed to revolutionize industries and improve
            lives.
          </p>
        </div>
      </div>
    </section>
  );
}
