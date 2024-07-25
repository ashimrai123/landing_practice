import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";

const Hero = () => {
  return (
    <div>
      <div className="  ">
        <div className="-z-10 hidden md:block absolute h-[1024px] w-[2000px]   ">
          <Image
            src={"/HeroBg.svg"}
            alt="Hero Background"
            fill
            className=" absolute  translate-x-2.5 -translate-y-32 "
          />
        </div>
        <MaxWidthWrapper className="z-30">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-32 sm:gap-10  pt-52 pb-32  ">
            <div className="flex flex-col gap-5">
              <h1 className="text-5xl tracking-tight font-semibold">
                Introduce Your Product Quickly & Effectively
              </h1>
              <p className="text-muted-foreground">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                quis, sem. Nulla consequat massa quis enim.
              </p>
              <div className="gap-5 flex mt-6">
                <Link href={"buy"} className={cn(buttonVariants(), "w-40")}>
                  Purchase UI Kit
                </Link>
                <Link
                  href={"about"}
                  className={cn(
                    buttonVariants({ variant: "ghost" }),
                    "border-2 border-primary w-40"
                  )}
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="relative h-96 w-full  md:h-[150%] md:w-[160%] lg:h-[230%] lg:w-[150%] md:-my-16 mt-10">
              <div className="">
                <Image
                  src={"/Hero.svg"}
                  fill
                  alt="Hero image"
                  className="-ml-10"
                />
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </div>
    </div>
  );
};

export default Hero;
