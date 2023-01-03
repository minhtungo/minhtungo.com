import { Title, CodeSnippet, Button } from '..';

const About = () => {
  return (
    <section id='about'>
      <Title title='About Me' subtitle='Introduction' />
      <div className='flex flex-col lg:flex-row gap-20'>
        <CodeSnippet className='md:mx-auto lg:mx-0 w-full' />
        <div className='flex flex-col items-center text-center lg:items-start lg:text-left'>
          <div className='flex flex-col'>
            <h3 className='text-lg md:text-xl lg:text-2xl font-medium lg:font-semibold mb-2 text-gray-200'>
              Hi, I'm Minh Tu Ngo 👋
            </h3>
            {/* <p className='text-sm md:text-base lg:text-lg mb-4 text-gray-200'>
              Web Developer
            </p> */}
            <hr className='mb-3 border-b border-transparent-white' />
            <p className='text-sm mb-4 text-gray-400 leading-relaxed'>
              From the moment I produced "Hello World" in the console of my
              first application, I knew I was hooked into the world of web
              development. It has never been "just a job" for me, it's offered
              an engaging challenge to continually learn and improve my skills
              in creating high-quality websites. What started with a simple
              "Hello World" has become a full-fledged passion.
            </p>
            <p className='text-sm mb-4 text-gray-400 leading-relaxed'>
              I am a web developer with experience building web apps with HTML,
              CSS, Javascript, React, Nodes.js, Express and MongoDB. I am
              focused on being a valuable part of any team I am on and believe
              in the team rising together. I love working with dedicated teams
              to build efficient and robust applications suited to the user's
              needs. Currently, I am looking for an opportunity to continuously
              learn, grow and make positive contributions to the company.
            </p>
          </div>
          <Button href='/'>Resume</Button>
        </div>
      </div>
    </section>
  );
};
export default About;
