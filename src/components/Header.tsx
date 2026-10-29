import Image from "next/image";
import React from "react";
import NavLinks from "./NavLinks";
import Link from "next/link";
import Marquee from "./Marquee";
import UserInfo from "./UserInfo";

const Header = () => {
  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });
  return (
    <header>
      <div className="relative mx-auto flex container items-center justify-end p-4">
        <div className="absolute left-1/2 flex -translate-x-1/2 items-center gap-2">
          <Link href={"/"}>
          <Image
            src="/logo.png"
            alt="Bangla News 24"
            height={50}
            width={50}
            className="h-10 w-10"
          /></Link>
          <p>
            Bangla News 24 <br />
            <span>{date}</span>
          </p>
        </div>

       <UserInfo></UserInfo>
      </div>
      <NavLinks></NavLinks>
      
      <Marquee></Marquee>
    </header>
  );
};

export default Header;
