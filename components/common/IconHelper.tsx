import Bootstrap from 'public/static/images/stack/bootstrap.svg';
import Express from 'public/static/images/stack/express.svg';
import Firebase from 'public/static/images/stack/firebase.svg';
import JavaScript from 'public/static/images/stack/javascript.svg';
import MaterialUI from 'public/static/images/stack/material-ui.svg';
import MongoDB from 'public/static/images/stack/mongodb.svg';
import Next from 'public/static/images/stack/next.svg';
import NodeJS from 'public/static/images/stack/nodejs.svg';
import React from 'public/static/images/stack/react.svg';
import Redux from 'public/static/images/stack/redux.svg';
import StyledComponents from 'public/static/images/stack/styled-components.svg';
import Tailwind from 'public/static/images/stack/tailwind.svg';
import TypeScript from 'public/static/images/stack/typescript.svg';
import Code from 'public/static/icons/code.svg';
import Graduate from 'public/static/icons/graduate.svg';
import Job from 'public/static/icons/job.svg';
import {MdOutlineWork as Work} from 'react-icons/md';
import classNames from 'classnames';

const iconMap: Record<string, React.ComponentType> = {
  Bootstrap,
  Express,
  Firebase,
  JavaScript,
  MaterialUI,
  MongoDB,
  Next,
  NodeJS,
  React,
  Redux,
  StyledComponents,
  Tailwind,
  TypeScript,
  Code,
  Graduate,
  Job,
  Work,
};

interface getIconProps {
  type: string;
  className: string;
}

const IconHelper = ({ type, className }: getIconProps) => {
  const Icon = iconMap[type];
  if (!Icon) return null;

  // @ts-ignore
  return <Icon className={classNames('', className)} />;
};

export default IconHelper;
