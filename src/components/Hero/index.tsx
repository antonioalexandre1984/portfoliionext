import React from "react";
import photo from "../../assets/photo.png";
import Image from "next/image";
import { BsWhatsapp } from "react-icons/bs";
import Link from "next/link";
import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";

export function Hero() {
  const WhatsAppButton = () => {
    window.location.href = "https://wa.me/5583987921452";
  };
  const GithubButton = () => {
    window.location.href = "https://github.com/antonioalexandre1984";
  };
  const LinkedinButton = () => {
    window.location.href = "https://www.linkedin.com/in/antonioacs";
  };

  return (
    <section
      className="bg-hero lg:h-[85vh] flex items-center py-32 lg:py-0 overflow-hidden"
    >
      <div className="container mx-auto h-full">
        <div className="flex items-center h-full pt-8">
          {/* Left side */}
          <div className="flex-1 flex flex-col items-center lg:items-start">
            <p
              data-aos="fade-right"
              data-aos-delay="500"
              className="text-4xl text-accent mb-[22px]"
            >
              Hi, I´m Alexandre!
            </p>
            <h4
              data-aos="fade-down"
              data-aos-delay="500"
              className="text-xs leading-[44px] md:text-xs md:leading-tight lg:text-7xl lg:leading-[1.2] font-bold md:tracking-[-2px]"
            >
              Fullstack Developer
              <br />
              Freelancer
            </h4>
            <p
              data-aos="fade-down"
              data-aos-delay="700"
              className="pt-4 pb-8 md:pt-6 md:pb-12 max-w-[480px] text-lg text-center lg:text-left"
            >
              Passionate about technology and good coffee.
            </p>
            <div
              data-aos="fade-right"
              data-aos-delay="500"
              className="flex items-center justify-between"
            >
              <Link href="/">
                <a>
                  <BsWhatsapp
                    size="80px"
                    color="#25D366"
                    style={{ marginLeft: "20px" }}
                    onClick={WhatsAppButton}
                  />
                </a>
              </Link>
              <Link href="/">
                <a href="" className="">
                  <AiOutlineGithub
                    size="80px"
                    color="#FFF"
                    style={{ marginLeft: "20px" }}
                    onClick={GithubButton}
                  />
                </a>
              </Link>
              <Link href="/">
                <a href="https://www.linkedin.com/in/antonioacs'" className="">
                  <AiOutlineLinkedin
                    size="80px"
                    color=" #0e76a8"
                    style={{ marginLeft: "20px" }}
                    onClick={LinkedinButton}
                  />
                </a>
              </Link>
            </div>
          </div>
          <div
            data-aos="fade-left"
            data-aos-delay="900"
            className="hidden lg:flex flex-1 justify-center items-center h-full"
          >
            <Image src={photo} alt="photo" className="" />
          </div>
        </div>
      </div>
    </section>
  );
}
