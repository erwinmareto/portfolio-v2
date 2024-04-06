"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const Projects = () => {
  const projects = useRef(null);
  useGSAP(
    () => {
      // const projects = gsap.utils.toArray(".project-desc");
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
        .fromTo(".project-desc", { x: 1000, opacity: 0 }, { x: 0, opacity: 1 });
    },
    { scope: projects }
  );
  return (
    <section
      ref={projects}
      id="projects"
      className="flex flex-col gap-28 px-5 py-28"
    >
      <h1 className="text-6xl md:text-8xl text-right">Projects.</h1>
      <div className="flex flex-wrap justify-around items-center gap-5">
        <Link href="https://wihire.vercel.app">
          <Image
            className="rounded-xl transition-all hover:border-4 hover:border-sky-300"
            src={"/wihire.png"}
            width={500}
            height={500}
            alt="wihire"
          />
        </Link>

        {/* <div className="border-r-8 border-black bg-red-600" /> */}
        {/* <div className="w-px h-full bg-black hidden lg:block" /> */}

        <div className="project-desc flex flex-col gap-4 text-center">
          <h2 className="text-4xl">WiHire</h2>
          <p className="text-xl max-w-xl">
            Job portal application that facillitates effortless connections
            between companies and job seekers with detailed information.
          </p>
        </div>
      </div>
    </section>
  );
};
export default Projects;
