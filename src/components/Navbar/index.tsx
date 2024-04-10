"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Flip } from "gsap/Flip";
import NavbarMenu from "./NavbarMenu";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const navbar = useRef(null);
  const items = useRef(null);
  gsap.registerPlugin(Flip);
  // const showClick = () => {
  //   // const menus = gsap.utils.toArray(".menu-items");
  //   const state = Flip.getState(".menu-items");
  //   setShowMenu(!showMenu);
  //   // menus.forEach((item) =>
  //   //   showMenu ? (item.style.display = "block") : (item.style.display = "none")
  //   // );
  //   Flip.from(state, {
  //     duration: 1,
  //     scale: true,
  //     absolute: true,
  //     ease: "power4.out",
  //     stagger: 0.2,
  //     onEnter: (elements) =>
  //       gsap.fromTo(
  //         elements,
  //         { opacity: 0, scale: 0 },
  //         { opacity: 1, scale: 1 }
  //       ),
  //     onLeave: (elements) => {
  //       gsap.to(elements, { opacity: 0, scale: 0 });
  //     },
  //   });
  // };
  useGSAP(
    // const clickAnimation = () => gsap.to("h1", { scale: 1.2 });
    () => {
      const state = Flip.getState(".menu-items, #items", {
        props: "backgroundColor",
      });

      Flip.from(state, {
        // duration: 1,
        // paused: true,
        // scale: true,
        absolute: true,
        ease: "power4.out",
        // targets: ".menu-items",
        // stagger: 0.02,
        onEnter: (elements) => {
          gsap.fromTo(
            elements,
            { opacity: 0, x: 1000 },
            { duration: 1, opacity: 1, x: 0 }
          );
        },
        onLeave: (elements) => {
          gsap.to(elements, { opacity: 0, x: 0, duration: 1 });
        },
      });
    },
    { dependencies: [showMenu] }
  );

  return (
    <nav ref={navbar}>
      <div className="flex justify-between items-center p-5">
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
        <NavbarMenu
          // showClick={setShowMenu}
          showMenu={showMenu}
          setShowMenu={setShowMenu}
        />
      </div>
      {/* {showMenu && ( */}
      <div
        ref={items}
        id="items"
        className={`flex flex-col text-white ${
          showMenu ? "bg-neutral-950" : "bg-neutral-950 hidden"
        }`}
      >
        {/* {showMenu && ( */}
        <>
          <h1
            className={`menu-items text-4xl text-center p-5 transition-all ${
              showMenu ? "block" : "hidden"
            } hover:scale-110 hover:bg-neutral-900  md:text-6xl`}
          >
            About
          </h1>
          <h1
            className={`menu-items text-4xl text-center p-5 transition-all ${
              showMenu ? "block" : "hidden"
            } hover:scale-110 hover:bg-neutral-900  md:text-6xl`}
          >
            Projects
          </h1>
          <h1
            className={`menu-items text-4xl text-center p-5 transition-all ${
              showMenu ? "block" : "hidden"
            } hover:scale-110 hover:bg-neutral-900  md:text-6xl`}
          >
            Contacts
          </h1>
        </>
        {/* )} */}
      </div>
      {/* // )} */}
    </nav>
  );
};
export default Navbar;
