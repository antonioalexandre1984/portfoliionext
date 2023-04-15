import { skills } from "../../data";
import React from "react";
import Image from "next/image";

export function Skills() {
  return (
    <section className="bg-tertiary py-12">
      <div className="container mx-auto">
        <div
          data-aos="fade-up"
          data-aos-delay="900"
          className="flex flex-col items-center text-center">
          <h2 className="section-title before:content-contact relative before-absolute before:opacity-80 before:-top-[2rem] before:-left-28 before:hidden before:lg:block">
            We work with the main stacks
          </h2>
          <p className="subtitle">
            Building the future with the most advanced stacks of the present.
          </p>
          <div
            data-aos="fade-right"
            data-aos-delay="900"
            className="grid grid-cols-8 md:grid-flow-row">
            {skills.map((skill, i) => (
              <div key={i} className="flex items-center justify-center">
                <Image src={skill.image} alt="" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
