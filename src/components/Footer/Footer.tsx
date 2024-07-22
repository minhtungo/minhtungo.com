import Container from '@/components/common/Container';
import NowPlaying from '@/components/common/NowPlaying';
import SocialIcons from '@/components/common/SocialIcons';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import footer from '@/constant/footer';
import { USED_TECHS } from '@/lib/constants';
import Link from 'next/link';

const Footer = () => {
  return (
    <Container tag='footer' className='mt-12'>
      <div className='md:flex md:items-center md:justify-between'>
        <div className='space-y-2.5'>
          <div className='flex items-center'>
            <Link href='/' className='flex gap-x-2 cursor-pointer items-center whitespace-nowrap text-lg font-semibold'>
              Minh Tu Ngo.
              <Badge variant='secondary'>v3</Badge>
            </Link>
          </div>
          <NowPlaying />
          <SocialIcons />
        </div>
        <div className='grid grid-cols-2 gap-8 sm:grid-cols-2 sm:gap-24'>
          {footer.categories.map((category, index) => (
            <ul key={index} className='space-y-2 '>
              {category.links.map(({ href, title }) => (
                <li key={`${title}-nav-footer`} className='text-sm text-muted-foreground hover:text-primary'>
                  <Link href={href}>{title}</Link>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
      <Separator className='my-6' />
      <div className='flex justify-between w-full items-center pb-6'>
        <div className='text-xs text-muted-foreground'>
          © {new Date().getFullYear()} Minh Tu Ngo. All rights reserved.
        </div>
        <div className='flex items-center gap-2'>
          {USED_TECHS.map(({ name, icon }) => (
            <>{icon}</>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Footer;
