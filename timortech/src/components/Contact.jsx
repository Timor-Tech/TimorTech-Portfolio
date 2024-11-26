import { Send } from "lucide-react";
import { useState } from "react";
import { Email } from "@mui/icons-material"; // Importing MUI icon for the header

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" }); // Reset form
      } else {
        const error = await response.json();
        setStatus(error.error || "Failed to send message.");
      }
    } catch (err) {
      console.error("Error:", err);
      setStatus("An error occurred while sending your message.");
    }
  };

  return (
    <section id="contact" className="py-4 px-3 text-gray-900  dark:text-gray-200 dark:bg-gray-900 shadow-lg rounded-lg">
      <div className="container mx-auto">
        {/* Header with icon above the text */}
        <h2 className="text-3xl font-bold mb-8 text-center flex flex-col items-center">
          <div className="flex items-center justify-center bg-purple-600 text-white p-3 rounded-full mb-4">
            <Email className="h-10 w-10" />
          </div>
          <span className="text-gray-800 dark:text-gray-200">Contact Us</span>
        </h2>

        {/* Form */}
        <form className="max-w-lg mx-auto space-y-6 rounded-lg" onSubmit={handleSubmit}>
          {/* Name Field */}
          <div className="relative">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 pl-10 rounded-lg border border-gray-700 bg-gray-100 text-gray-100 placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600 dark:placeholder-gray-400"
              placeholder="Your Name"
              required
            />
          </div>

          {/* Email Field */}
          <div className="relative">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 pl-10 rounded-lg border border-gray-700 bg-gray-100 text-gray-100 placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600 dark:placeholder-gray-400"
              placeholder="Your Email"
              required
            />
          </div>

          {/* Message Field */}
          <div className="relative">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 pl-10 rounded-lg border border-gray-700 bg-gray-100 text-gray-100 placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600 dark:placeholder-gray-400"
              placeholder="Your Message"
              rows="5"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full flex justify-center items-center bg-purple-600 hover:bg-purple-700 text-white text-lg py-3 px-6 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 dark:bg-purple-700 dark:hover:bg-purple-600"
          >
            <Send className="h-5 w-5 mr-2" />
            Send Message
          </button>

          {/* Status Message */}
          {status && (
            <p
              className={`text-center mt-4 px-4 py-2 rounded-lg font-semibold ${status === "Sending..."
                  ? "text-yellow-300 bg-yellow-800"
                  : status === "Message sent successfully!"
                    ? "text-green-500 bg-green-100"
                    : "text-red-500 bg-red-100"
                }`}
            >
              {status}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contact;
