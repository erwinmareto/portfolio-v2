"use client";

import { useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const Contacts = () => {
  const contacts = useRef(null);
  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: {
          duration: 0.5,
          ease: "power4.out",
        },
        scrollTrigger: {
          trigger: "#contacts",
          start: "80% 60%",
          toggleActions: "restart none none reverse",
        },
      });

      tl.fromTo("#head1", { opacity: 0, x: -1000 }, { opacity: 1, x: 0 })
        .fromTo("#head2", { opacity: 0, x: 1000 }, { opacity: 1, x: 0 })
        .fromTo("#email", { opacity: 0, x: -1000 }, { opacity: 1, x: 0 })
        .fromTo("#resume", { opacity: 0, x: 1000 }, { opacity: 1, x: 0 });
    },
    { scope: contacts }
  );
  return (
    <>
      <section
        ref={contacts}
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
              className="text-2xl bg-left-bottom bg-gradient-to-r from-[#81A6D3] to-[#5B8DCB] bg-[length:100%_4px] bg-no-repeat hover:bg-[length:0%_4px] transition-all duration-500 ease-out md:text-4xl lg:text-6xl"
              href="mailto:erwinmaretow@gmail.com"
            >
              erwinmaretow@gmail.com
            </Link>
          </h2>
          <h2 id="resume" className="md:text-right">
            <Link
              className="text-2xl bg-left-bottom bg-gradient-to-r from-[#81A6D3] to-[#5B8DCB] bg-[length:0%_4px] bg-no-repeat hover:bg-[length:100%_4px] transition-all duration-500 ease-out md:text-4xl lg:text-6xl"
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
