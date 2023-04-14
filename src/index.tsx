import type { NextPage } from "next";
import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { GetStaticProps } from "next";
import Prismic from "@prismicio/client";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Brands } from "./components/Brands";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Portfolio } from "./components/Portfolio";
import { Jobs } from "./components/Jobs";
import { getPrismicClient } from "./components/Services/prismic";
import { Contact } from './components/Contact'
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

interface HomeProps {
  jobs: IProject[];
}

const Home: NextPage = ({ jobs }: HomeProps) => {
  useEffect(() => {
    Aos.init({
      duration: 2000,
    });
  }, []);
  return (
    <div className="bg-white relative" style={{ height: "2000px" }}>
      <Header />
      <Hero />
      <Brands />
      <About />
      <Skills />
      <Portfolio jobs={jobs} />
      <Jobs />
      <Contact />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const projectsResponse = await prismic.query(
    [Prismic.Predicates.at("document.type", "job")],
    {
      orderings: "[document.first_publication_data desc]",
    }
  );
  console.log(projectsResponse.results);
  const jobs = projectsResponse.results.map((project) => ({
    slug: (project as { uid: string }).uid,
    title: (project as { data: { title: string } }).data.title,
    type: (project as { data: { type: string | null } }).data.type,
    description: (project as { data: { description: string } }).data
      .description,
    link: (project as { data: { link: { link_type: string; url: string } } })
      .data.link,
    thumbnail: (project as { data: { thumbnail: { url: string } } }).data
      .thumbnail.url,
  }));

  return {
    props: {
      jobs,
    },
    revalidate: 60 * 60 * 24, // 24 hours
  };
};

export default Home;
