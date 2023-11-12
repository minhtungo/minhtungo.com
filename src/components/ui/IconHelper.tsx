import { Image } from '@/components/ui';
import mergeClassNames from '@/lib/mergeClassNames';

import techStacks from '@/constant/techStack';

interface getIconProps {
  type: string;
  className?: string;
}

const IconHelper = ({ type, className }: getIconProps) => {
  //remove space, hyphen and capitalize the type string
  type = type.charAt(0).toUpperCase() + type.slice(1).replace(/\s/g, '').replace(/-/g, '');

  const customClasses = type === 'Express' || type === 'NodeJS' ? 'text-green-600' : '';

  let icon;

  for (const obj of techStacks) {
    if (obj.name === type) {
      icon = obj;
      break;
    }
  }

  if (!icon) return null;
  // @ts-ignore
  return <Image src={icon.src} height={20} width={20} className={mergeClassNames('h-4 w-4', customClasses, className)} alt={icon.name} />;
};

export default IconHelper;
