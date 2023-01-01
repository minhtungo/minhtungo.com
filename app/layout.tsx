import { Container, Header } from '../components';
import '../styles/globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <head />
      <body>
        <Header />
        <main className='pt-[var(--navigation-height)]'>{children}</main>
        <footer>
          <Container>asd</Container>
        </footer>
      </body>
    </html>
  );
}
