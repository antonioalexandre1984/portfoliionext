import React from "react";
import Image from "next/image";
import image from "../../assets/img/about.webp";
import { about } from "../../data";

export function About() {
  return (
    <section className="section bg-secondary" id="about">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-6">
          <div
            data-aos="fade-right"
            data-aos-delay="900"
            className="flex w-full"
          >
            <Image
              src={image}
              alt="Logo"
              className="object-cover h-full w-96 lg:w-[566px] rounded-2xl"
            />
          </div>
          <div
            data-aos="fade-left"
            data-aos-delay="700"
            className="flex flex-col items-center text-center lg:items-start lg:text-left"
          >
            {about.map((item, i) => {
              return (
                <div key={i} className="gap-4 flex flex-col">
                  <h2 className="text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-80   before:-top-[2rem] before:hidden before:lg:block">
                    {item.name}
                  </h2>
                  <p className="mb-4 text-accent">{item.title}</p>
                  <p className="mb-8">
                    {item.description}
                    <br />
                    <br />
                  </p>
                </div>
              );
            })}

            <button className="btn btn-md bg-accent hover:bg-secondary-hover rounded-xl transition-all">
              <a href="#contact">Contact Me</a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
