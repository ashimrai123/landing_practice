import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";

interface FeatureProps {
  img: string;
  title: string;
  description: string;
  buttonName?: string;
  buttonLink?: string;
}

const Feature: React.FC<FeatureProps> = ({
  img,
  title,
  description,
  buttonName,
  buttonLink,
}) => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        <div className="order-last md:order-none">
          <div className="relative h-64 w-full">
            <Image src={img} alt="title" fill />
          </div>
        </div>

        <div className="gap-6 flex flex-col">
          <h1 className="text-4xl font-semibold">{title}</h1>
          <p className="text-muted-foreground ">{description}</p>
          {buttonName ? (
            <div>
              <Link
                href={`${buttonLink}`}
                className={cn(buttonVariants(), "w-40")}
              >
                {buttonName}
              </Link>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
};

const Features = () => {
  return (
    <>
      <MaxWidthWrapper className="w-full h-full mt-10 md:mt-32 lg:mt-80">
        <div className="flex flex-col gap-32">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="flex flex-col gap-6">
              <h1 className="text-4xl font-semibold">Light, Fast & Powerful</h1>
              <p className="text-muted-foreground">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                quis, sem. Nulla consequat massa quis enim.
              </p>
              <div className=" grid grid-cols-1 sm:grid-cols-2 gap-10 pt-14 pb-20">
                <div className="flex flex-col gap-3">
                  <div className="relative h-10 w-10">
                    <Image src={"/Feature/Icon.svg"} alt="Icon" fill />
                  </div>
                  <h1 className="text-lg font-semibold">Title Goes Here</h1>
                  <p className="text-xs text-gray-600">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Aenean commodo ligula eget dolor.{" "}
                  </p>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="relative h-10 w-10">
                    <Image src={"/Feature/Icon.svg"} alt="Icon" fill />
                  </div>
                  <h1 className="text-lg font-semibold">Title Goes Here</h1>
                  <p className="text-xs text-gray-600">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Aenean commodo ligula eget dolor.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className=" relative h-96 w-full lg:h-full">
              <div className="w-full">
                <Image src={"/Feature/Intro.svg"} alt="Features Intro" fill />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-32 mt-32">
            <Feature
              img="/Feature/row1.svg"
              title="Light, Fast & Powerful"
              description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus 
mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim."
              buttonName=""
              buttonLink=""
            />
            <Feature
              img="/Feature/row2.svg"
              title="Light, Fast & Powerful"
              description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus 
mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim."
              buttonName=""
              buttonLink=""
            />
            <Feature
              img="/Feature/row3.svg"
              title="Light, Fast & Powerful"
              description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus 
mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim."
              buttonName="Purchase Now"
              buttonLink="/purchase"
            />
          </div>
        </div>
      </MaxWidthWrapper>
    </>
  );
};

export default Features;
