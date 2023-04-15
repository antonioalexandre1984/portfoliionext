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
          <p className="subtitle-description">
            We have extensive experience in developing projects using different technologies. These range from Javascript, Typescript, and the use of modern frontend frameworks such as React for styling with styled-components and Tailwind CSS, to backend technologies such as Node.js, Express.js, and Typescript. We ive worked on a wide range of applications, APIs, and microservices. We are equally proficient in developing full-stack solutions that require end-to-end development expertise. Our portfolio includes projects such as e-commerce platforms, social media networks, enterprise-level applications, and more. We take pride in providing high-quality and scalable solutions that meet our clients needs and exceed their expectations.
          </p>
        </div>
        <Projects jobs={jobs} />
      </div>
    </section>
  );
}
