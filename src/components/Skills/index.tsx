import { skills } from "../../data";
import React from "react";
import Image from "next/image";

export function Skills() {
  return (
    <section className="bg-tertiary py-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-8 md:grid-flow-row">
          {skills.map((skill, i) => (
            <div key={i} className="flex items-center justify-center">
              <Image src={skill.image} alt="" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
