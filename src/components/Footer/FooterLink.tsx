'use client';

import { Link } from '@/components/common';
import footer from '@/config/footer';
import { motion } from 'framer-motion';
import { PopUp, FadeContainer } from '@/lib/framerVariants';
import { BsBoxArrowUpRight } from 'react-icons/bs';

const FooterLink = () => {
  return (
    <motion.div
      className='grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-24'
      initial='hidden'
      whileInView='visible'
      variants={FadeContainer}
    >
      {footer.categories.map((category, index) => (
        <ul key={index} className='text-gray-600 dark:text-gray-400'>
          {category.links.map((link, index) => (
            <li className='mt-2' key={index}>
              <Link href={link.href}>
                <motion.span variants={PopUp}>
                  {link.title}
                  {category.title === 'Social' && (
                    <BsBoxArrowUpRight
                      size={14}
                      className='relative -top-[2px] ml-2 inline-block'
                    />
                  )}
                </motion.span>
              </Link>
            </li>
          ))}
        </ul>
      ))}
    </motion.div>
  );
};
export default FooterLink;
