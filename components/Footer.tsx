import Link from "next/link";
import { Container, Icon } from "./";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { PopUpFromBottom } from "../lib/FramerMotionVariants";

const Footer = () => {
  return (
    <footer className="py-4 md:py-6 ">
      <Container>
        <div className="flex items-center space-x-5  my-4 lg:my-6">
          <div className="flex-1 h-px bg-transparent-black-tight dark:bg-transparent-white" />
          <div className="">
            <Icon>
              😸
              <span className="text-xl font-bold text-transparent bg-clip-text bg-primary-gradient">
                Minh Tu Ngo
              </span>
              🐶
            </Icon>
          </div>
          <div className="flex-1 h-px bg-transparent-black-tight dark:bg-transparent-white" />
        </div>
        <div className="text-center sm:items-center sm:flex sm:justify-between">
          <span className="text-sm text-gray-600 dark:text-gray-400 sm:text-center ">
            {/* 😸Minh Tu Ngo🐶 */}
            <Link href="https://skfb.ly/6W9QU" className="underline">
              3D Model
            </Link>{" "}
            by Takuya on{" "}
            <Link
              href="http://creativecommons.org/licenses/by/4.0/"
              className="underline"
            >
              Sketchfab
            </Link>
          </span>
          <div className="flex justify-center mt-4 space-x-6 sm:mt-0">
            <Icon>
              <Link
                href="https://github.com/minhtungo"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-500"
                target="_blank"
              >
                <FiGithub className="w-5 h-5" />
              </Link>
            </Icon>
            <Icon>
              <Link
                href="https://www.linkedin.com/in/minhtungo/"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-500"
                target="_blank"
              >
                <FiLinkedin className="w-5 h-5" />
              </Link>
            </Icon>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
