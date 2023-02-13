import Head from 'next/head';

const Meta = ({ title = 'Minh Tu Ngo' }: { title: string }) => {
  return (
    <Head>
      <title>
        {title === 'Minh Tu Ngo' ? title : `${title} | Minh Tu Ngo`}
      </title>
      <meta
        name='description'
        content='My personal portfolio to showcase my work. Built with NextJS, Tailwind CSS and Sanity.'
      />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <link rel='icon' href='/favicon.ico' />
    </Head>
  );
};

export default Meta;
