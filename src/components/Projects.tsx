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
          duration: 0.8,
          ease: "circ.out",
          stagger: 0.2,
        },
        scrollTrigger: {
          trigger: "#projects",
          start: "30% 80%",
          // toggleActions: "restart pause resume reverse",
        },
      });

      tl.fromTo("h1", { x: 100, opacity: 0 }, { x: 0, opacity: 1 })
        // .fromTo(".project-img", { x: -100, opacity: 0 }, { x: 0, opacity: 1 })
        // .add([
        //   gsap.fromTo(".odd", { x: 100, opacity: 0 }, { x: 0, opacity: 1 }),
        //   gsap.fromTo(".even", { x: -100, opacity: 0 }, { x: 0, opacity: 1 }),
        // ]);
        .fromTo(".odd", { x: -100, opacity: 0 }, { x: 0, opacity: 1 })
        .fromTo(".even", { x: 100, opacity: 0 }, { x: 0, opacity: 1 });
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
        <Link href="https://reminderoo.vercel.app" className="project-img odd">
          <Image
            className="rounded-xl transition-all hover:border-4 hover:border-reminderoo"
            src={"/reminderoo.png"}
            width={500}
            height={500}
            alt="reminderoo"
          />
        </Link>

        <div className="odd flex flex-col gap-4 text-center">
          <h2 className="text-4xl">Reminderoo</h2>
          <p className="text-xl max-w-xl">
            A Subscription Reminder web app that helps users manage their
            subscriptions, avoid unnecessary fees, and optimize their
            subscriptions.
          </p>
        </div>

        <Link href="https://wihire.vercel.app" className="project-img even">
          <Image
            className="rounded-xl transition-all hover:border-4 hover:border-wihire lg:hidden"
            src={"/wihire.png"}
            width={500}
            height={500}
            alt="wihire"
          />
        </Link>

        {/* <div className="border-r-8 border-black bg-red-600" /> */}
        {/* <div className="w-px h-full bg-black hidden lg:block" /> */}

        <div className="even flex flex-col gap-4 text-center">
          <h2 className="text-4xl">WiHire</h2>
          <p className="text-xl max-w-xl">
            Job portal application that facillitates effortless connections
            between companies and job seekers with detailed information.
          </p>
        </div>

        <Link href="https://wihire.vercel.app" className="project-img even">
          <Image
            className="rounded-xl transition-all hover:border-4 hover:border-wihire max-md:hidden"
            src={"/wihire.png"}
            width={500}
            height={500}
            alt="wihire"
          />
        </Link>

        <Link href="https://attention.vercel.app" className="project-img odd">
          <Image
            className="rounded-xl transition-all hover:border-4 hover:border-attention"
            src={"/attention.png"}
            width={500}
            height={500}
            alt="Attention!"
          />
        </Link>

        <div className="odd flex flex-col gap-4 text-center">
          <h2 className="text-4xl">&quot;Attention!&quot; Landing Site</h2>
          <p className="text-xl max-w-xl">
            Landing site for the clothing brand &quot;Attention!&quot;, a
            fashion-forward clothing brand offering trendy graphic tees with
            bold, viral designs for style-conscious consumers.
          </p>
        </div>

        <Link href="https://beaknbite.vercel.app/" className="project-img even">
          <Image
            className="rounded-xl transition-all hover:border-4 hover:border-beaknbite lg:hidden"
            src={"/beaknbite.png"}
            width={500}
            height={500}
            alt="beak&bite"
          />
        </Link>

        <div className="even flex flex-col gap-4 text-center">
          <h2 className="text-4xl">&quot;Beak &amp; Bite&quot; Landing Site</h2>
          <p className="text-xl max-w-xl">
            landing site of a fast franchise called &quot;Beak &amp; Bite&quot;
            that showcases the company profile and their bussiness model.
          </p>
        </div>
        <Link href="https://beaknbite.vercel.app" className="project-img even">
          <Image
            className="rounded-xl transition-all hover:border-4 hover:border-beaknbite max-md:hidden"
            src={"/beaknbite.png"}
            width={500}
            height={500}
            alt="beak&bite"
          />
        </Link>
      </div>
    </section>
  );
};
export default Projects;
