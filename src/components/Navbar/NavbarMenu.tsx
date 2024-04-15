"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Dispatch, SetStateAction } from "react";

type Props = {
  showMenu: boolean;
  setShowMenu: Dispatch<SetStateAction<boolean>>;
};

const NavbarMenu = ({ showMenu, setShowMenu }: Props) => {
  useGSAP(
    () => {
      gsap.to("#burger", {
        duration: 0.5,
        ease: "power4.out",
        rotate: showMenu ? 90 : 0,
      });
    },
    { dependencies: [showMenu] }
  );
  return (
    <div
      onClick={() => setShowMenu(!showMenu)}
      className="flex items-center bg-neutral-950 rounded-full gap-2 px-5 py-2 transition-transform hover:scale-110 hover:bg-neutral-900"
    >
      <svg
        id="burger"
        className="w-10 h-10 text-white"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
          clip-rule="evenodd"
        />
      </svg>
      <p className="text-white text-2xl">Menu</p>
    </div>
  );
};
export default NavbarMenu;
