import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";

const Purchase = () => {
  return (
    <>
      <div className="relative mt-20  overflow-hidden ">
        <div className="-z-10  absolute  inset-0 ">
          <Image
            src={"/PurchaseBg.svg"}
            alt="Hero Background"
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
            className=" absolute  "
          />
        </div>
        <MaxWidthWrapper className="py-40 relative z-10">
          <div className="flex flex-col justify-center items-center gap-3">
            <h1 className="font-semibold text-4xl text-center">
              A Price To Suit Everyone
            </h1>
            <p className="text-muted-foreground text-center max-w-prose pt-2">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus
            </p>
            <div className="flex flex-col justify-center items-center gap-3 py-10">
              <h1 className="text-5xl">$40</h1>
              <p>UI Design Kit</p>
            </div>
            <p className="">See, One price. Simple.</p>
            <Link href={"/purchase"} className={cn(buttonVariants(), "w-40 ")}>
              Purchase Now
            </Link>
          </div>
        </MaxWidthWrapper>
      </div>
    </>
  );
};

export default Purchase;
