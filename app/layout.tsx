import { Header, Footer } from '../components';
import '../styles/globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <head>
        <meta
          name='viewport'
          content='width=device-width, height=device-height, initial-scale=1'
        />
      </head>
      <body className=''>
        <Header />
        <main className='pt-navigation-height'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
