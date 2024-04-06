"use client";

import Image from "next/image";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

type SkillProps = {
  image: string;
  title: string;
};

const Skill = ({ image, title }: SkillProps) => {
  useGSAP(() => {
    // const skills = gsap.utils.toArray(".skill");

    gsap.fromTo(
      ".skill",
      { x: -1000, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: "circ.out",
        scrollTrigger: {
          trigger: "#skills",
          start: "30% 80%",
          toggleActions: "restart pause resume reverse",
        },
      }
    );
  });
  return (
    <article className="skill relative flex justify-center border-y-2 border-black overflow-hidden py-4 md:py-8">
      <h2 className="text-4xl md:text-6xl z-10">{title}</h2>
      <Image
        className="absolute right-0 opacity-80 z-0"
        src={image}
        width={100}
        height={100}
        alt={title}
      />
    </article>
  );
};

export default Skill;
