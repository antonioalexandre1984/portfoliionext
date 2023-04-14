/* eslint-disable react/react-in-jsx-scope */
//  icons
import {
  FiYoutube,
  FiGithub,
  FiTag,
  FiLayout,
  FiPenTool,
  FiSettings,
  FiMail,
  FiMapPin,
} from "react-icons/fi";
import { HiHandThumbUp } from "react-icons/hi2";

// companies icons
import FreelancerBrandIcon from "./assets/img/brands/freelancer.png";
import UpworkBrandIcon from "./assets/img/brands/upwork.png";
import FiverBrandIcon from "./assets/img/brands/fiverr.png";
import BehanceBrandIcon from "./assets/img/brands/behance.png";
import DribbbleBrandIcon from "./assets/img/brands/dribbble.png";

// skills images
import SkillImg1 from "./assets/img/skills/html5.png";
import SkillImg2 from "./assets/img/skills/css3.png";
import SkillImg3 from "./assets/img/skills/js.png";
import SkillImg4 from "./assets/img/skills/reactjs.png";
import SkillImg5 from "./assets/img/skills/nextjs.png";
import SkillImg6 from "./assets/img/skills/nodejs.png";
import SkillImg7 from "./assets/img/skills/git.png";
import SkillImg8 from "./assets/img/skills/figma.png";

// projects images
import Project1 from "./assets/img/projects/p1.webp";
import Project2 from "./assets/img/projects/p2.webp";
import Project3 from "./assets/img/projects/p3.webp";
import Project4 from "./assets/img/projects/p4.webp";
import Project5 from "./assets/img/projects/p5.webp";
import Project6 from "./assets/img/projects/p6.webp";
import { AiFillLinkedin } from "react-icons/ai";

// navigation
export const navigation = [
  {
    name: "home",
    href: "home",
  },
  {
    name: "about",
    href: "about",
  },
  {
    name: "portfolio",
    href: "portfolio",
  },
  {
    name: "services",
    href: "services",
  },
  {
    name: "contact",
    href: "contact",
  },
];

// social
export const social = [
  {
    icon: <FiYoutube />,
    href: "https://youtu.be/j9y94oEJMQw",
  },
  {
    icon: <AiFillLinkedin />,
    href: "https://www.linkedin.com/in/antonioacs/",
  },
  {
    icon: <FiGithub />,
    href: "https://github.com/antonioalexandre1984",
  },
  {
    icon: <HiHandThumbUp />,
    href: "https://www.99freelas.com.br/user/antonioacs",
  },
];

// companies
export const brands = [
  {
    img: FreelancerBrandIcon,
    href: "",
  },
  {
    img: UpworkBrandIcon,
    href: "",
  },
  {
    img: FiverBrandIcon,
    href: "",
  },
  {
    img: BehanceBrandIcon,
    href: "",
  },
  {
    img: DribbbleBrandIcon,
    href: "",
  },
];

// skill
export const skills = [
  {
    image: SkillImg1,
  },
  {
    image: SkillImg2,
  },
  {
    image: SkillImg3,
  },
  {
    image: SkillImg4,
  },
  {
    image: SkillImg5,
  },
  {
    image: SkillImg6,
  },
  {
    image: SkillImg7,
  },
  {
    image: SkillImg8,
  },
];

export const about = [
  {
    title: "Fullstack web Developer",
    name: "Antonio Alexandre Cordeiro",
    description:
      "I am a professional web developer with 2+ years of experience in web development. I have a strong passion for web development and I am always looking for new challenges. I am a hard worker and I am always ready to learn new things. I am a fast learner and I am always ready to learn new things. I am a fast learner and I am always ready to learn new things.",
  },
  /*   description: 'Desenvolvedor Full Stack com graduação em Análise e Desenvolvimento de Sistemas e Técnico em Telecomunicações, além de formações em Desenvolvimento Full Stack e React, buscando uma posição inovadora edesafiadora.Ao longo da minha trajetória já desenvolvi diversos projetos, individuais e em equipe, utilizando tecnologias como Javascript, React, Node, Express e Typescript, além de guiar a minha atuação pela metodologia ágil Scrum. Possuo experiência de mais de 10 anos na área de telecomunicações, atuando em empresas de pequeno, médio e grande porte, e hoje estou realizando uma transição de carreira para área de programação com muita desposição para resolver problemas, ajudar o time na construção de aplicações de qualidade.' */
];

// projects
export const projectsNav = [
  {
    name: "all",
  },
  {
    name: "Frontend",
  },
  {
    name: "Backend",
  },
  {
    name: "Fullstack",
  },
];

// projects
export const projectsData = [
  {
    id: "1",
    image: Project1,
    name: "project name 1",
    category: "Frontend",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.",
  },
  {
    id: "2",
    image: Project2,
    name: "project name 2",
    category: "Backend",
    description:
      "mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis. Pra lá , depois divoltis porris, paradis. Paisis, filhis, espiritis santis.",
  },
  {
    id: "3",
    image: Project3,
    name: "project name 3",
    category: "Frontend",
    description:
      " Sapien in monti palavris qui num significa nadis i pareci latim. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.",
  },
  {
    id: "4",
    image: Project4,
    name: "project name 4",
    category: "Fullstack",
    description:
      "Mé faiz elementum girarzis, nisi eros vermeio, in elementis mé pra quem é amistosis quis leo. Manduma pindureta quium dia nois paga.",
  },
  {
    id: "5",
    image: Project5,
    name: "project name 5",
    category: "Backend",
    description:
      "mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis. Pra lá , depois divoltis porris, paradis. Paisis, filhis, espiritis santis.",
  },
  {
    id: "6",
    image: Project6,
    name: "project name 6",
    category: "Backend",
    description:
      "Mé faiz elementum girarzis, nisi eros vermeio, in elementis mé pra quem é amistosis quis leo. Manduma pindureta quium dia nois paga.",
  },
];

// services
export const services = [
  {
    icon: <FiLayout />,
    name: "Web Design",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.",
  },
  {
    icon: <FiSettings />,
    name: "Web Development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.",
  },
  {
    icon: <FiPenTool />,
    name: "Branding",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.",
  },
  {
    icon: <FiTag />,
    name: "SEO",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.",
  },
];

// contact
export const contact = [
  {
    icon: <FiMail />,
    title: "Have a question?",
    subtitle: "I am here to help you.",
    description: "Email me at antonioalexandre1984@gmail.com",
  },
  {
    icon: <FiMapPin />,
    title: "Current Location",
    subtitle: "Campina Grande, Paraiba - BR",
    description: "Serving clients worldwide",
  },
];
