import { AnimatedDiv, Title } from '@/components';
import { PopUpFromBottom } from '@/lib/framerVariants';
import MongoDB from 'public/static/images/stack/mongodb.svg';
import React from 'public/static/images/stack/react.svg';
import Tailwind from 'public/static/images/stack/tailwind.svg';
import Cypress from 'public/static/images/tools/cypress.svg';
import Figma from 'public/static/images/tools/figma.svg';
import Graphql from 'public/static/images/tools/graphql.svg';
import Next from 'public/static/images/tools/nextjs.svg';
import Sanity from 'public/static/images/tools/sanity.svg';
import Storybook from 'public/static/images/tools/storybook.svg';
import Vercel from 'public/static/images/tools/vercel.svg';

const FavoriteTools = () => {
  return (
    <section id='tools'>
      <AnimatedDiv variants={PopUpFromBottom}>
        <Title title='Some of My Favourite Tools' home={true} />
        <div className='mx-auto mt-8 flex max-w-5xl flex-wrap items-center justify-center gap-y-8 gap-x-8 sm:gap-x-12 md:gap-x-16'>
          <Next className='w-24 sm:w-32' aria-label='Next.js' />
          <React className='w-10 sm:w-12' aria-label='React' />
          <MongoDB
            className='h-auto w-10 sm:w-12 md:w-12'
            aria-label='MongoDB'
          />
          <Tailwind
            className='h-auto w-10 sm:w-12 md:w-14'
            aria-label='Tailwind'
          />
          <Sanity className='w-24 sm:w-28 md:w-32' aria-label='Sanity' />
          <Storybook className='w-28 sm:w-32 md:w-40' aria-label='Storybook' />
          <Graphql className='w-24 sm:w-28 md:w-36' aria-label='GraphQL' />
          <Vercel className='w-24 sm:w-32 md:w-36' aria-label='Vercel' />
          <Figma className='w-6 sm:w-8' aria-label='Figma' />
          <Cypress className='w-24 sm:w-28 md:w-32' aria-label='Cypress' />
        </div>
      </AnimatedDiv>
    </section>
  );
};
export default FavoriteTools;
