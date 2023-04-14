import React from "react";
import Image from "next/image";
import { brands } from "../../data";

export function Brands() {
  return (
    <section className="min-h-[146px] bg-tertiary flex items-center">
      <div className="container mx-auto flex md:justify-between items-center flex-wrap justify-evenly">
        {brands.map((brand, i) => {
          return (
            <div
              key={i}
              className="flex items-center justify-center w-28 md:w-32 h-16 md:h-20"
            >
              <Image src={brand.img} alt="Freelancer" />
            </div>
          );
        })}
      </div>
    </section>
  );
}
