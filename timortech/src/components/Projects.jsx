import React, { useEffect } from "react";
import Slider from "react-slick";
import { FaGithub, FaLink } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Images for projects (replace with your actual image paths)
import sample from "../assets/166291.jpg";
import sample2 from "../assets/images.jpeg";

export default function Projects() {
  // Initialize AOS (Animate On Scroll)
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-out-cubic",
      once: true,
    });
  }, []);

  // List of projects with image links, titles, descriptions, and tags
  const projects = [
    {
      image1: sample,
      image2: sample2,
      title: "AI-Powered Healthcare Assistant",
      description:
        "An intelligent system designed to assist healthcare professionals in diagnosis and treatment planning.",
      githubLink: "https://github.com/Timor-Tech",
      liveLink: "https://healthcare-assistant.live",
      tags: ["AI", "Machine Learning", "Healthcare"],
    },
    {
      image1: sample2,
      image2: sample2,
      title: "Sustainable Smart Cities Platform",
      description:
        "An integrated solution for managing urban infrastructure, optimizing energy use, and reducing environmental impact.",
      githubLink: "https://github.com/Timor-Tech",
      liveLink: "https://smartcities.live",
      tags: ["ReactJS", "Sustainability", "Smart Cities"],
    },
    {
      image1: sample2,
      image2: sample,
      title: "E-Learning Platform",
      description:
        "An e-learning platform offering meticulously crafted lessons to improve users' skills in various subjects.",
      githubLink: "https://github.com/Timor-Tech",
      liveLink: "https://elearning-platform.live",
      tags: ["E-Learning", "ReactJS", "MongoDB"],
    },
  ];

  return (
    <section id="projects" className="py-20 container mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">Our Projects</h2>
        <p>Explore a selection of our latest technology projects.</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Map through the projects array and render a card for each project */}
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            images={[project.image1, project.image2]}
            title={project.title}
            description={project.description}
            githubLink={project.githubLink}
            liveLink={project.liveLink}
            tags={project.tags}
          />
        ))}
      </div>
    </section>
  );
}

// This function creates each individual project card with a slider
function ProjectCard({ images, title, description, githubLink, liveLink, tags }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="bg-gray-800 p-6 rounded-lg" data-aos="fade-up">

      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img
              src={image}
              alt={`${title} - Slide ${index + 1}`}
              className="rounded-lg w-full h-auto object-cover"
            />
          </div>
        ))}
      </Slider>
      <div className="mt-4">
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <p className="mb-4 text-gray-300">{description}</p>
        <div className="flex space-x-4">
          {/* GitHub and Live Link Icons */}
          <a
            href={githubLink}
            className="text-white hover:text-gray-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={24} />
          </a>
          <a
            href={liveLink}
            className="text-white hover:text-gray-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLink size={24} />
          </a>
        </div>
        <div className="mt-4">
          {/* Display project tags */}
          {tags.map((tag, index) => (
            <span
              key={index}
              className="inline-block bg-gray-700 text-white py-1 px-2 rounded mr-2 text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
