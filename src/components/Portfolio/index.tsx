import React from "react";
import { Projects } from "../Projects";

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

export function Portfolio({ jobs }: ProjectItemProps) {
  return (
    <section id="portfolio" className="section bg-primary min-h-[1400px]">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
          <h2 className="section-title before:content-portfolio relative before-absolute before:opacity-40 before:-top-[2rem] before:-left-3/4 before:hidden before:lg:block">
            My Latest Work
          </h2>
          <p className="subtitle">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga veniam
            labore nisium illum cupiditate reiciendis a numquam
          </p>
        </div>
        <Projects jobs={jobs} />
      </div>
    </section>
  );
}
