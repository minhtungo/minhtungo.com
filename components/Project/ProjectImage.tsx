import React from "react";
import Image from "next/image";
import classNames from "classnames";

interface ProjectImageProps {
  src: string;
  alt: string;
  className?: string;
}

const ProjectImage = ({ src, alt, className = "" }: ProjectImageProps) => (
  <div
    className={classNames(
      "relative -mt-[30%] sm:-mt-4 md:mt-0 w-[95%] md:w-[60%] shrink-0 rounded-xl overflow-hidden shadow-2xl before:absolute before:inset-0 before:bg-black/20 before:z-10",
      className
    )}
  >
    <Image
      title={alt}
      alt={alt}
      src={src}
      width={1200}
      height={630}
      className="lg:group-hover:scale-110 transition-all duration-300 backdrop-blur-xl object-cover w-full h-auto"
    />
  </div>
);

export default ProjectImage;
