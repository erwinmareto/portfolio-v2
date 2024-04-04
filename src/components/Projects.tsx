"use client";

import Image from "next/image";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const Projects = () => {
  useGSAP(
    () => {
      const projects = gsap.utils.toArray(".project-desc");
      const tl = gsap.timeline({
        defaults: {
          duration: 0.5,
          ease: "circ.out",
          stagger: 0.2,
        },
        scrollTrigger: {
          trigger: "#projects",
          start: "40% 80%",
          toggleActions: "restart pause resume reverse",
        },
      });

      tl.fromTo("h1", { x: 1000 }, { x: 0 })
        .fromTo(
          "img",
          { x: -1000, opacity: 0 },
          {
            x: 0,
            opacity: 1,
          }
        )
        .fromTo(projects, { x: 1000, opacity: 0 }, { x: 0, opacity: 1 });
    },
    { scope: "#projects" }
  );
  return (
    <section id="projects" className="flex flex-col gap-28 px-5 py-28">
      <h1 className="text-6xl md:text-8xl text-right">Projects.</h1>
      <div className="flex flex-wrap justify-around items-center gap-5">
        <Image
          className="rounded-xl"
          src={"/wihire.png"}
          width={500}
          height={500}
          alt="wihire"
        />

        {/* <div className="border-r-8 border-black bg-red-600" /> */}
        {/* <div className="w-px h-full bg-black hidden lg:block" /> */}

        <div className="project-desc flex flex-col gap-4 text-center">
          <h2 className="text-4xl">WiHire</h2>
          <p className="text-xl max-w-xl">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi,
            recusandae. Pariatur ut recusandae officiis odit ipsam iste nulla
            molestiae culpa molestias doloremque, tempora incidunt provident
            laborum, quisquam ullam error nesciunt.
          </p>
        </div>
      </div>
    </section>
  );
};
export default Projects;
