"use client";

import { useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

const About = () => {
  const about = useRef(null);
  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);
      const tl = gsap.timeline({
        defaults: {
          duration: 0.5,
          ease: "power4.out",
        },
        scrollTrigger: {
          trigger: "img",
          start: "center 80%",
          toggleActions: "restart none none reverse",
        },
      });
      tl.to("img", {
        x: 0,
      })
        .to("h1", {
          x: 0,
          opacity: 1,
        })
        .to("#desc", {
          y: 0,
          opacity: 1,
        });
    },
    { scope: about }
  );
  return (
    <section
      ref={about}
      id="about"
      className="relative flex flex-col gap-5 bg-neutral-950 text-white px-5 py-28"
    >
      <h1 className="text-8xl z-10 -translate-x-full opacity-0">
        About <br /> Me.
      </h1>
      <article className="flex justify-center overflow-x-hidden">
        <p
          id="desc"
          className="max-w-2xl text-2xl z-10 translate-y-full opacity-0"
        >
          I am web developer with a focus on frontend development. Specializes
          in JavaScript, and React, Recipient of the &apos;Best Group of Final
          Project&apos; award the Rakamin Fullstack Web Development Bootcamp.I
          am currently diving deeper into common libraries and frameworks that
          are used in React.
        </p>
        <Image
          className="absolute -top-24 -right-0 translate-x-full"
          src={"/bw-pic.png"}
          width={500}
          height={500}
          alt="profile-picture"
        />
      </article>
    </section>
  );
};
export default About;
