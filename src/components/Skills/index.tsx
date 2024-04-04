"use client";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import Skill from "./Skill";

const Skills = () => {
  const images = [
    {
      image: "/skills/html-logo.png",
      title: "HTML",
    },
    {
      image: "/skills/css-logo.png",
      title: "CSS",
    },
    {
      image: "/skills/js-logo.png",
      title: "Javascript",
    },
    {
      image: "/skills/ts-logo.png",
      title: "Typescript",
    },
    {
      image: "/skills/re.png",
      title: "React",
    },
    {
      image: "/skills/nextjs-logo.png",
      title: "Next JS",
    },
    {
      image: "/skills/tailwind-logo.png",
      title: "Tailwind",
    },
  ];

  useGSAP(
    () => {
      gsap.fromTo(
        "h1",
        { x: -1000, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: "#skills",
            start: "50% 80%",
            toggleActions: "restart pause resume reverse",
          },
        }
      );
    },
    { scope: "#skills" }
  );

  return (
    <section id="skills" className="flex flex-col gap-28">
      <h1 className="text-6xl px-5 md:text-8xl">Skills.</h1>
      <div className="flex flex-col border-y-2 border-black">
        {images.map((image) => (
          <Skill key={image.title} image={image.image} title={image.title} />
        ))}
      </div>
    </section>
  );
};
export default Skills;
