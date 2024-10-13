import { Send } from "lucide-react";

function Contact() {
  return (
    <section id="contact" className="py-16 bg-gray-950 text-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Contact Us</h2>
        <form className="max-w-lg mx-auto space-y-6">
          <div>
            <input
              type="text"
              className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-gray-800 text-gray-100 placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
              placeholder="Your Name"
            />
          </div>
          <div>
            <input
              type="email"
              className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-gray-800 text-gray-100 placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
              placeholder="Your Email"
            />
          </div>
          <div>
            <textarea
              className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-gray-800 text-gray-100 placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
              placeholder="Your Message"
              rows="5"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full flex justify-center items-center bg-purple-600 hover:bg-purple-700 text-white text-lg py-3 px-6 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
          >
            <Send className="h-5 w-5 mr-2" />
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
