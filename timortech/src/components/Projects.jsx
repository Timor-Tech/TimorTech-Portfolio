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
import project1 from "../assets/mystt.jpg";
import dra1 from "../assets/dra1.jpg";
import dra2 from "../assets/dra2.jpg";
import dra3 from "../assets/dra3.jpg";

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
      image1: project1,
      image2: project1,
      image3: project1,
      title: "MYSTT",
      description:
        "Simple Speech-to-text program for Bahasa Malaysia language",
      githubLink: "https://github.com/Timor-Tech",
      liveLink: "https://healthcare-assistant.live",
      tags: ["ExpressJS", "NodeJS", "ReactJS", "MongoDB"],
    },
    {
      image1: sample2,
      image2: sample2,
      image3: sample2,
      title: "Timora AI Chat Bot",
      description:
        "A chatbot designed to help users understand the power of artificial intelligence.",
      githubLink: "https://github.com/yatt-code/Timora-AI.git",
      liveLink: "https://github.com/yatt-code/Timora-AI.git",
      tags: ["ExpressJS", "NodeJS", "ReactJS", "MongoDB"],
    },
    {
      image1: dra1,
      image2: dra2,
      image3: dra3,
      title: "Disaster Response App",
      description:
        "A web-based application that provides information on disaster responses.",
      githubLink: "https://github.com/yatt-code/Disaster_Response_App.git",
      liveLink: "https://github.com/yatt-code/Disaster_Response_App.git",
      tags: ["ExpressJS", "NodeJS", "ReactJS", "MongoDB"],
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
            images={[project.image1, project.image2, project.image3]}
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
