import React, { useEffect, useState } from "react";
import { projectsNav } from "../../data";
import { Project } from "../Project";

interface IProject {
  slug: string;
  title: string;
  type: string;
  description: string;
  link: {
    link_type: string;
    url: string;
  };
  thumbnail: string;
}

interface ProjectItemProps {
  jobs: IProject[];
}
export function Projects({ jobs }: ProjectItemProps) {
  const [item, setItem] = useState({ name: "all" });
  const [project, setProjects] = useState(jobs);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (item.name === "all") {
      setProjects(jobs);
    } else {
      const newProjects = jobs.filter((project) => {
        return project.type.toLowerCase() === item.name;
      });
      setProjects(newProjects);
    }
  }, [item, jobs]);

  const handleClick = (e, index) => {
    setItem({ name: e.target.textContent.toLowerCase() });
    setActive(index);
  };

  return (
    <div>
      <nav className="mb-12 max-w-xl mx-auto">
        <ul className="flex flex-col md:flex-row justify-evenly items-center text-white">
          {projectsNav.map((item, index) => (
            <li
              onClick={(e) => handleClick(e, index)}
              key={index}
              className={`${active === index ? "active" : ""
                } cursor-pointer capitalize m-4`}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </nav>
      <section className="grid gap-y-12 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-8">
        {project.map((project) => (
          <Project project={project} key={project.slug} />
        ))}
      </section>
    </div>
  );
}
