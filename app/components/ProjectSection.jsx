"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "MERN-Stack Chat Application",
    description:
      "A MERN-stack chat app uses MongoDB for data storage, Express.js for server-side logic, React for the frontend, and Node.js as the runtime. It enables real-time messaging through a web interface, combining these technologies for an efficient and scalable chat platform.",
    image: "/images/projects/1.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/imvshubham/MERN-Chat-Application",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "React Portfolio Website",
    description:
      "A Next.js and Tailwind CSS-powered React portfolio website showcases your skills and projects with speed and responsiveness, providing a dynamic and visually appealing user experience.",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Weather Application",
    description:
      "A weather app delivers real-time weather updates, forecasts, and location-based information, offering users a quick and convenient way to stay informed about current conditions.",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/imvshubham/React-Weather-App",
    previewUrl: "https://master--imvshubham-react-weather-app.netlify.app/",
  },
  {
    id: 4,
    title: "TIC-TAC-TOE",
    description:
      "A C++ Tic-Tac-Toe game utilizing object-oriented programming for a structured and modular design. Players take turns placing symbols in a 3x3 grid, aiming for victory in this classic two-player game.",
    image: "/images/projects/4.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/imvshubham/TicTacToe-game",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Flappy-Bird",
    description:
      "A Flappy Bird game developed in Java using the Lightweight Java Game Library (LWJGL). This rendition of the popular mobile game features a bird navigating through pipes by tapping the screen, demonstrating game development skills with Java and LWJGL",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
