"use client";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import TextPlugin from "gsap/TextPlugin";
import MotionPathPlugin from "gsap/MotionPathPlugin";

const Hero = () => {
  useGSAP(
    () => {
      const tl = gsap.timeline();
      // tl.from("path", {
      //   duration: 1,
      //   yPercent: 100,
      //   stagger: 0.5,
      //   repeat: -1,
      //   yoyo: true,
      // });

      gsap.to("h1", {
        duration: 1,
        ease: "power4.out",
        stagger: 0.5,
        y: 0,
        opacity: 1,
      });

      gsap.to("p", {
        duration: 2,
        ease: "power4.out",
        y: 0,
        opacity: 1,
      });

      gsap.registerPlugin(MotionPathPlugin);

      gsap.to("#text1", {
        duration: gsap.utils.random(3, 5),
        repeat: -1,
        repeatDelay: gsap.utils.random(1, 3),
        // repeatDelay: 1,
        // yoyo: true,
        ease: "power1.out",
        motionPath: {
          path: "#wave1",
          align: "#wave1",
          autoRotate: true,
          alignOrigin: [1, 0],
          end: 0.5,
        },
      });
      gsap.to("#text2", {
        duration: gsap.utils.random(3, 5),
        repeat: -1,
        repeatDelay: gsap.utils.random(1, 3),
        // repeatDelay: 1,
        // yoyo: true,
        ease: "power1.out",
        motionPath: {
          path: "#wave2",
          align: "#wave2",
          autoRotate: true,
          alignOrigin: [0.9, 0.9],
          end: 0.5,
        },
      });

      gsap.to("#text3", {
        duration: gsap.utils.random(3, 5),
        repeat: -1,
        repeatDelay: gsap.utils.random(1, 3),
        // repeatDelay: 1,
        // yoyo: true,
        ease: "power1.out",
        motionPath: {
          path: "#wave3",
          align: "#wave3",
          autoRotate: true,
          alignOrigin: [0.9, 0.9],
          end: 0.5,
        },
      });
    },
    { scope: "#hero" }
  );
  return (
    <section
      id="hero"
      className="w-full flex flex-col items-center overflow-hidden"
    >
      <div className="pt-10">
        <div className="flex flex-col items-center">
          <h1 className="text-6xl text-center translate-y-full opacity-0 md:text-8xl">
            I&apos;m Erwin
          </h1>

          <h1 className="text-6xl text-center translate-y-full opacity-0 md:text-8xl">
            a Web <span>Developer.</span>
          </h1>
        </div>

        <p className="text-center my-5 p-5 text-xl opacity-0 lg:px-64">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
          consectetur pariatur possimus, vero voluptatum quo saepe magnam, quia
          beatae at quaerat officiis tenetur blanditiis. Provident explicabo id
          illum corporis cumque?
        </p>
      </div>
      <p id="text1" className="w-1 h-1 text-4xl">
        HIIIII
      </p>
      <p id="text2" className="w-1 h-1 text-4xl">
        HELLO
      </p>
      <p id="text3" className="w-1 h-1 text-4xl">
        WHADUPPP
      </p>
      <svg
        // className="overflow-hidden"
        height={271}
        viewBox="0 0 1440 271"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_10_96)">
          <path
            id="wave1"
            d="M0 74.2009L40 78.5881C80 82.9753 160 91.7498 240 75.9558C320 60.1619 400 19.7996 480 25.6492C560 31.4988 640 83.5603 720 89.8194C800 96.02 880 56.4766 960 34.5991C1040 12.78 1120 8.68531 1200 16.9918C1280 25.2397 1360 45.9473 1400 56.2426L1440 66.5964V271.333H1400C1360 271.333 1280 271.333 1200 271.333C1120 271.333 1040 271.333 960 271.333C880 271.333 800 271.333 720 271.333C640 271.333 560 271.333 480 271.333C400 271.333 320 271.333 240 271.333C160 271.333 80 271.333 40 271.333H0V74.2009Z"
            fill="#81A6D3"
          />
          <path
            id="wave2"
            d="M0 80.0505L40 85.6077C80 91.1648 160 102.279 240 123.747C320 145.157 400 176.979 480 169.667C560 162.355 640 115.909 720 112.691C800 109.474 880 149.485 960 162.823C1040 176.16 1120 162.939 1200 158.903C1280 154.926 1360 160.19 1400 162.823L1440 165.455V271.333H1400C1360 271.333 1280 271.333 1200 271.333C1120 271.333 1040 271.333 960 271.333C880 271.333 800 271.333 720 271.333C640 271.333 560 271.333 480 271.333C400 271.333 320 271.333 240 271.333C160 271.333 80 271.333 40 271.333H0V80.0505Z"
            fill="#5B8DCB"
          />
          <path
            id="wave3"
            d="M0 232.725L40 222.956C80 213.246 160 193.708 240 178.207C320 162.706 400 151.24 480 165.455C560 179.669 640 219.681 720 227.636C800 235.65 880 211.667 960 190.316C1040 168.965 1120 150.246 1200 151.533C1280 152.761 1360 174.054 1400 184.642L1440 195.288V271.333H1400C1360 271.333 1280 271.333 1200 271.333C1120 271.333 1040 271.333 960 271.333C880 271.333 800 271.333 720 271.333C640 271.333 560 271.333 480 271.333C400 271.333 320 271.333 240 271.333C160 271.333 80 271.333 40 271.333H0V232.725Z"
            fill="#3174C3"
          />
        </g>
      </svg>
    </section>
  );
};
export default Hero;
