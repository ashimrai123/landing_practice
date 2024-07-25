"use client";
import React, { useEffect, useState } from "react";
import { Button, buttonVariants } from "./ui/button";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { GiHamburgerMenu } from "react-icons/gi";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const isAtTop = window.scrollY === 0;
      setScrolled(!isAtTop);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const linkClass = (path: string) =>
    pathname === path ? "text-primary font-semibold" : "text-muted-foreground";

  return (
    <div
      className="fixed top-0 w-full "
      style={{
        backgroundColor: scrolled ? "white" : "transparent",
        transition: "background-color 0.3s ease",
        zIndex: scrolled ? "50" : "10",
      }}
    >
      <MaxWidthWrapper className="">
        <div
          className="px-2"
          style={{
            borderBottom: scrolled ? "2px solid rgba(0, 0, 0, 0.1)" : "none",
          }}
        >
          <div className="max-w-screen-xl w-full py-5">
            <div className="hidden md:grid grid-cols-3 w-full items-center">
              <div>
                <ul className="flex gap-6">
                  <li key={"Home"}>
                    <Link href={"/"} className={linkClass("/")}>
                      Home
                    </Link>
                  </li>
                  <li key={"About"}>
                    <Link href={"/about"} className={linkClass("/about")}>
                      About
                    </Link>
                  </li>
                  <li key={"Contact"}>
                    <Link href={"/contact"} className={linkClass("/contact")}>
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="flex justify-center">
                <Link href={"/"} className="text-2xl font-bold text-primary">
                  Landing
                </Link>
              </div>
              <div className="flex justify-end">
                <Link href="buy" className={cn(buttonVariants(), "w-40 ")}>
                  Buy Now
                </Link>
              </div>
            </div>
            <div className="md:hidden flex justify-between items-center">
              <h1 className="text-2xl font-bold">Landing</h1>
              <Sheet>
                <SheetTrigger>
                  <GiHamburgerMenu className="size-6" />
                </SheetTrigger>
                <SheetContent
                  side={"left"}
                  className="max-w-64 flex flex-col items-center pt-20 gap-6"
                >
                  <ul className="flex flex-col gap-6">
                    <li key={"Home"}>
                      <Link href={"/"}>Home</Link>
                    </li>
                    <li key={"About"}>
                      <Link href={"/about"}>About</Link>
                    </li>
                    <li key={"Contact"}>
                      <Link href={"/contact"}>Contact</Link>
                    </li>
                  </ul>
                  <div className="flex justify-end">
                    <Link href="buy" className={cn(buttonVariants(), "w-40")}>
                      Buy Now
                    </Link>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Navbar;
