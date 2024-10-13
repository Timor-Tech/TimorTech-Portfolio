import { Globe, Code, Rocket } from "lucide-react";

export default function Values() {
  return (
    <section id="values" className="py-20 bg-gray-900 rounded-xl p-8">
      <h2 className="text-3xl font-bold mb-12 text-center">Our Values</h2>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="text-center">
          <Globe className="w-12 h-12 text-purple-500 mb-4 mx-auto" />
          <h3 className="text-xl font-semibold mb-2">Global Impact</h3>
          <p>Creating solutions that address worldwide challenges and improve lives across the globe.</p>
        </div>
        <div className="text-center">
          <Code className="w-12 h-12 text-purple-500 mb-4 mx-auto" />
          <h3 className="text-xl font-semibold mb-2">Ethical Innovation</h3>
          <p>Developing technology with a strong ethical framework to ensure responsible advancement.</p>
        </div>
        <div className="text-center">
          <Rocket className="w-12 h-12 text-purple-500 mb-4 mx-auto" />
          <h3 className="text-xl font-semibold mb-2">Continuous Growth</h3>
          <p>Fostering a culture of learning and adaptation to stay at the forefront of technological progress.</p>
        </div>
      </div>
    </section>
  );
}
