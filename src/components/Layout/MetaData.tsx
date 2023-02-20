import Head from 'next/head';
interface MetaDataProps {
  title?: string;
  description?: string;
}
const MetaData = ({ title = 'Minh Tu Ngo', description }: MetaDataProps) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name='description'
        content='My personal portfolio to showcase my work. Built with NextJS, Tailwind CSS and Sanity.'
      />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
      <meta name='description' content={description || 'Minh Tu Ngo'} />
      <meta name='author' content='Minh Tu Ngo' />
      <meta name='robots' content='index,follow' />
      <link rel='icon' href='/favicon/favicon.ico' />
    </Head>
  );
};

export default MetaData;
