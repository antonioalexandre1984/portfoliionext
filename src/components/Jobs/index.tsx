import React from "react";
import { services } from "../../data";

export function Jobs() {
  return (
    <section id="services" className="section bg-tertiary">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
          <h2 className="section-title before:content-services relative before-absolute before:opacity-40 before:-top-[2rem] before:-left-28 before:hidden before:lg:block">
            What do I do for clients?
          </h2>
          <p className="subtitle">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga veniam
            labore nisium illum cupiditate reiciendis a numquam
          </p>
        </div>
        <div className="">
          <div className="grid lg:grid-cols-4 gap-8">
            {services.map((service, i) => {
              const { icon, name, description } = service;
              return (
                <div key={i} className="bg-secondary p-6 rounded-2xl">
                  <div className="text-accent rounded-sm w-12 h-12 flex justify-center items-center mb-24 text-[28px]">
                    {icon}
                  </div>
                  <h4 className="text-xl font-medium mb-2">{name}</h4>
                  {description}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
