import { navigation } from "../../data";
import { Link } from "react-scroll";
import React from "react";

export function Nav() {
  return (
    <nav>
      <ul className="flex space-x-8 capitalize text-[15px]">
        {navigation.map((item, i) => {
          return (
            <li key={i} className="text-white hover:text-accent cursor-pointer">
              <Link
                to={item.href}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="transition-all duration-300"
              >
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
