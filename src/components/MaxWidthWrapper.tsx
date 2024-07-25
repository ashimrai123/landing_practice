import { cn } from "@/lib/utils";
import { ReactNode } from "react";

const MaxWidthWrapper = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return (
    <>
      <div
        className={cn(
          "mx-auto px-2.5 sm:px-20 w-full max-w-screen-xl ",
          className
        )}
      >
        {children}
      </div>
    </>
  );
};

export default MaxWidthWrapper;
