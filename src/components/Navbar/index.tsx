import Image from "next/image";
import NavbarMenu from "./NavbarMenu";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center">
      <Image src="/blob.svg" width={110} height={95} alt="blob-logo" />
      <NavbarMenu />
    </nav>
  );
};
export default Navbar;
