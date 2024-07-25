import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <>
      <div className="footerBg">
        <MaxWidthWrapper>
          <div className="flex flex-col ">
            <div className="flex flex-col-reverse gap-6 md:flex-row justify-between w-full md:items-center pt-14 pb-11">
              <h1 className="text-muted-foreground">
                &copy; {year} Yourcompany
              </h1>
              <h1 className="text-4xl font-bold">Landing</h1>
              <Link href={"/purchase"} className={cn(buttonVariants(), "w-40")}>
                Purchase Now
              </Link>
            </div>
            <div className="borderColor flex-col gap-6 md:flex-row border-t-2 py-4 flex justify-between">
              <ul className=" flex gap-16 text-muted-foreground ">
                <li key={"Home"}>
                  <Link href={"/"}>Home</Link>
                </li>
                <li key={"About"}>
                  <Link href={"/about"}>About</Link>
                </li>
                <li key={"Contact"}>
                  <Link href={"/contact"}>Contact</Link>
                </li>{" "}
              </ul>
              <ul className="flex text-muted-foreground gap-7">
                <li key={"Facebook"} className="hover:text-primary">
                  <Link href={"https://www.facebook.com"}>
                    <FaFacebookF />
                  </Link>
                </li>
                <li key={"Linkedin"} className="hover:text-primary">
                  <Link href={"https://www.linkedin.com"}>
                    <FaLinkedinIn />
                  </Link>
                </li>
                <li key={"Twitter"} className="hover:text-primary">
                  <Link href={"https://www.twitter.com"}>
                    <FaTwitter />
                  </Link>
                </li>
                <li key={"Youtube"} className="hover:text-primary">
                  <Link href={"https://www.youtube.com"}>
                    <FaYoutube />
                  </Link>
                </li>
                <li key={"Instagram"} className="hover:text-primary">
                  <Link href={"https://www.instagram.com"}>
                    <FaInstagram />
                  </Link>
                </li>{" "}
              </ul>
            </div>
          </div>
        </MaxWidthWrapper>
      </div>
    </>
  );
};

export default Footer;
