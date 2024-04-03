"use client";

import Link from "next/link";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const Contacts = () => {
  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: {
          duration: 0.5,
        },
        scrollTrigger: {
          trigger: "#projects",
          start: "80% 60%",
          // markers: {
          //   startColor: "#91F612",
          //   endColor: "#EFE234",
          // },
          toggleActions: "restart pause resume reverse",
        },
      });

      tl.fromTo(
        "#head1",
        { opacity: 0, x: -1000 },
        { opacity: 1, x: 0, ease: "power4.out" }
      )
        .fromTo(
          "#head2",
          { opacity: 0, x: 1000 },
          { opacity: 1, x: 0, ease: "power4.out" }
        )
        .fromTo(
          "#email",
          { opacity: 0, x: -1000 },
          { opacity: 1, x: 0, ease: "power4.out" }
        )
        .fromTo(
          "#resume",
          { opacity: 0, x: 1000 },
          { opacity: 1, x: 0, ease: "power4.out" }
        );
    },
    { scope: "#contacts" }
  );
  return (
    <>
      <section
        id="contacts"
        className="flex flex-col px-5 pt-32 gap-16 md:px-24 md:py-32"
      >
        <div>
          <h1 id="head1" className="text-5xl md:text-8xl">
            Get in Touch
          </h1>
          <h1 id="head2" className="text-5xl md:text-8xl text-right">
            With Me.
          </h1>
        </div>
        <div className="flex flex-col gap-4">
          <h2 id="email">
            <Link
              className="text-2xl underline md:text-4xl lg:text-6xl hover:no-underline"
              href="mailto:erwinmaretow@gmail.com"
            >
              erwinmaretow@gmail.com
            </Link>
          </h2>
          <h2 id="resume" className="md:text-right">
            <Link
              className="text-2xl md:text-4xl lg:text-6xl hover:underline"
              href="mailto:erwinmaretow@gmail.com"
            >
              Resume
            </Link>
          </h2>
        </div>
      </section>
    </>
  );
};
export default Contacts;
