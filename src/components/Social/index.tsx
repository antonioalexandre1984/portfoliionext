import React from "react";
import { social } from "../../data";

export function Social() {
  return (
    <ul className="flex space-x-6">
      {social.map((item, i) => (
        <li key={i} className="flex justify-center items-center  text-accent">
          <a className=" text-[24px] " href={item.href}>
            {item.icon}
          </a>
        </li>
      ))}
    </ul>
  );
}
