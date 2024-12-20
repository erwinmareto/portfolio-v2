"use client";

import { useRef } from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const Footer = () => {
  const footer = useRef(null);
  useGSAP(
    () => {
      gsap
        .timeline({
          defaults: {
            ease: "power1.out",
            duration: 0.8,
          },
          scrollTrigger: {
            trigger: "#footer-wave",
            start: "80% bottom",
            // markers: true,
          },
        })
        .fromTo("#wave-svg", { y: 200 }, { y: 0, duration: 1 })
        .fromTo("#mark", { x: -1000 }, { x: 0 })
        .fromTo("#social", { y: -100, opacity: 0 }, { y: 0, opacity: 1 })
        .fromTo(
          ".icons",
          { y: 100, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.5 }
        );
    },
    { scope: footer }
  );
  return (
    <footer ref={footer} id="footer-wave" className="relative overflow-hidden">
      <svg
        id="wave-svg"
        width="1440"
        height="279"
        viewBox="0 0 1440 279"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 66.3749L40 71.121C80 75.8671 160 85.3593 240 68.2734C320 51.1874 400 7.52339 480 13.8515C560 20.1796 640 76.4999 720 83.271C800 89.9789 880 47.2007 960 23.5335C1040 -0.070366 1120 -4.50004 1200 4.4859C1280 13.4086 1360 35.8101 1400 46.9476L1440 58.1484V279.633H1400C1360 279.633 1280 279.633 1200 279.633C1120 279.633 1040 279.633 960 279.633C880 279.633 800 279.633 720 279.633C640 279.633 560 279.633 480 279.633C400 279.633 320 279.633 240 279.633C160 279.633 80 279.633 40 279.633H0V66.3749Z"
          fill="#81A6D3"
        />
      </svg>

      <div className="absolute bottom-0 w-full flex flex-col-reverse justify-end gap-4 px-2 md:px-10 py-4 md:flex-row md:justify-between md:items-end">
        <div id="mark" className="flex items-end gap-4">
          <svg
            width="60"
            height="80"
            viewBox="0 0 85 96"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M67.5388 5.77939C71.7799 12.0255 70.3735 24.3653 72.3687 33.6817C74.3639 43.0099 79.7499 49.3028 82.4102 57.7989C85.0704 66.295 85.0159 76.9942 80.4477 84.588C75.8903 92.17 66.8301 96.6466 58.5876 95.17C50.3451 93.7052 42.9094 86.2755 35.1902 82.6075C27.4711 78.9395 19.4575 79.0216 15.4126 74.9083C11.3677 70.795 11.2913 62.4864 8.18404 53.3458C5.07675 44.2052 -1.06151 34.2208 1.3589 28.4083C3.77932 22.5958 14.7475 20.9552 23.219 16.7833C31.6795 12.6231 37.6324 5.93173 45.537 2.6622C53.4524 -0.607334 63.3085 -0.454989 67.5388 5.77939Z"
              fill="#0EABEC"
            />
          </svg>
          <h1 className="text-xl md:text-2xl lg:text-4xl">
            &copy; Erwin - 2024
          </h1>
        </div>

        <div className="flex flex-col gap-4">
          <h2 id="social" className="text-xl md:text-4xl">
            Socials
          </h2>
          <div className="flex gap-5">
            <Link
              href="https://github.com/erwinmareto"
              target="_blank"
              className="icons"
            >
              <div className="flex gap-2 text-2xl transition-all md:text-4xl lg:text-6xl">
                <FaGithub />
                <h2 className="flex gap-5 bg-left-bottom bg-gradient-to-r from-neutral-950 to-neutral-950 bg-[length:0%_4px] bg-no-repeat hover:bg-[length:100%_4px] transition-all duration-500 ease-out ">
                  GitHub
                </h2>
              </div>
            </Link>
            <Link
              href="https://www.linkedin.com/in/erwin-mareto-wikas/"
              target="_blank"
              className="icons"
            >
              <div className="flex gap-2 text-2xl transition-all md:text-4xl lg:text-6xl">
                <FaLinkedin />
                <h2 className="flex gap-5 bg-left-bottom bg-gradient-to-r from-neutral-950 to-neutral-950 bg-[length:0%_4px] bg-no-repeat hover:bg-[length:100%_4px] transition-all duration-500 ease-out ">
                  LinkedIn
                </h2>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
