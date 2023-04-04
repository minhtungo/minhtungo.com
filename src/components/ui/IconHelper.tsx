import { Image } from '@/components/ui';
import mergeClassNames from '@/lib/mergeClassNames';
import Code from 'public/static/icons/code.svg';
import Bootstrap from 'public/static/images/stack/bootstrap.svg';
import ChakraUI from 'public/static/images/stack/chakra-ui.svg';
import Firebase from 'public/static/images/stack/firebase.svg';
import GraphQL from 'public/static/images/stack/graphql.svg';
import JavaScript from 'public/static/images/stack/javascript.svg';
import MaterialUI from 'public/static/images/stack/material-ui.svg';
import MongoDB from 'public/static/images/stack/mongodb.svg';
import NextJS from 'public/static/images/stack/next.svg';
import Prisma from 'public/static/images/stack/prisma.svg';
import ReactJS from 'public/static/images/stack/react.svg';
import Redux from 'public/static/images/stack/redux.svg';
import StyledComponents from 'public/static/images/stack/styled-components.svg';
import Tailwind from 'public/static/images/stack/tailwind.svg';
import TRPC from 'public/static/images/stack/trpc.svg';
import TypeScript from 'public/static/images/stack/typescript.svg';
import { BsJournalCode as Library } from 'react-icons/bs';
import { CgComment as Guestbook, CgProfile as About } from 'react-icons/cg';
import {
  FaLaptopCode as Projects,
  FaUserGraduate as Graduate,
} from 'react-icons/fa';
import { IoLogoNodejs as NodeJS } from 'react-icons/io';
import {
  MdOutlineComputer as Uses,
  MdOutlineWork as Work,
  MdTimeline as Journey,
} from 'react-icons/md';
import {
  RiContactsLine as Contact,
  RiHome3Line as Home,
  RiUserSearchFill as Job,
} from 'react-icons/ri';
import { SiExpress as Express } from 'react-icons/si';

const iconMap: Record<string, React.ComponentType> = {
  Bootstrap,
  Express,
  Firebase,
  JavaScript,
  MaterialUI,
  MongoDB,
  NextJS,
  NodeJS,
  ReactJS,
  Redux,
  StyledComponents,
  Tailwind,
  TypeScript,
  Code,
  Graduate,
  Job,
  Work,
  TRPC,
  ChakraUI,
  Prisma,
  Home,
  About,
  Journey,
  Projects,
  Uses,
  Contact,
  Guestbook,
  GraphQL,
  Library,
};

interface getIconProps {
  type: string;
  className?: string;
}

const IconHelper = ({ type, className }: getIconProps) => {
  //remove space, hyphen and capitalize the type string
  type =
    type.charAt(0).toUpperCase() +
    type.slice(1).replace(/\s/g, '').replace(/-/g, '');

  if (type === 'React') type = 'ReactJS';

  const customClasses =
    type === 'Express' || type === 'NodeJS' ? 'text-green-600' : '';

  let Icon;

  switch (type) {
    case 'NextJS':
      return (
        <Image
          src={`/static/images/stack/next.svg`}
          height={20}
          width={20}
          className={className}
          alt={type}
        />
      );
    case 'Sanity':
      return (
        <Image
          src={`/static/images/stack/sanity.webp`}
          height={20}
          width={20}
          className={className}
          alt={type}
        />
      );
    case 'StyledComponents':
      return (
        <Image
          src={`/static/images/stack/styled-components.png`}
          height={20}
          width={20}
          className={className}
          alt={type}
        />
      );
    case 'TRPC':
      return (
        <Image
          src={`/static/images/stack/trpc.png`}
          height={20}
          width={20}
          className={className}
          alt={type}
        />
      );
    default:
      Icon = iconMap[type];
  }

  if (!Icon) return null;
  // @ts-ignore
  return (
    <Icon className={mergeClassNames('h-4 w-4', customClasses, className)} />
  );
};

export default IconHelper;
