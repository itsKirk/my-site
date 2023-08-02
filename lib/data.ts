import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import internet from "@/public/internet.jpg";
import mermites from "@/public/mermites.jpg";
import social from "@/public/social.jpg";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Bootcamp",
    location: "Mombasa, Kenya",
    description:
      "I took online classes and afer 8 months of studying. I immediately found a freelance job as a back-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2020",
  },
  {
    title: "Front-End Developer",
    location: "Mombasa, Kenya",
    description:
      "I worked as a back-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2022",
  },
  {
    title: "Full-Stack Developer",
    location: "Mombasa, Kenya",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Express and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Wifi Biz Manager",
    description:
      "I worked as a full-stack developer on this startup project for 6 months. Users can manage their own businesses, specifically those tailored to Internet Service provision.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Redux"],
    imageUrl: internet,
  },
  {
    title: "Mermite Munchies",
    description:
      "A recipe app tailored for Mermite enthusiasts and built using Next.js. The app allows users to discover, create, and share their favorite Mermite recipes.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Contentful"],
    imageUrl: mermites,
  },
  {
    title: "Social Welfare Application",
    description:
      "A social welfare app built with Next.js. This app serves as a platform to connect individuals in need with various welfare services and organizations.  ",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: social,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Angular",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "C",
  "C++",
  "C#",
  "SQL Server",
  "API Development",
  "GraphQL",
  "Express",
  "Framer Motion",
] as const;
