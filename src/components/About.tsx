"use client";
import Image from "next/image";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

const About = () => {
  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "img",
          start: "center 80%",
          markers: true,

          toggleActions: "restart pause resume pause",
        },
      });
      tl.to("img", {
        duration: 0.5,
        ease: "power4.out",
        x: 0,
      });

      tl.to("h1", {
        duration: 0.5,
        ease: "power4.out",
        x: 0,
        opacity: 1,
      });

      tl.to("#desc", {
        duration: 0.5,
        ease: "power4.out",
        y: 0,
        opacity: 1,
      });
    },
    { scope: "#about" }
  );
  return (
    <section
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum ab
          dignissimos libero nesciunt labore quibusdam sapiente eos nisi non.
          Eligendi, reiciendis vel. Mollitia, et reiciendis consequatur ipsam
          voluptatibus tempore a.
        </p>
        <Image
          className="absolute -top-32 -right-0 translate-x-full"
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
