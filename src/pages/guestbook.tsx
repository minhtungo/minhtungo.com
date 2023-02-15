import { AnimatedHeading } from '@/components';
import { LoginBtn } from '@/components/Auth';
import { Meta, Container } from '@/components/Layout';
import { FromLeftVariant } from '@/lib/FramerMotionVariants';

const GuestBookPage = () => {
  return (
    <>
      <Meta title='Guestbook' />
      <Container className='max-w-6xl pt-20'>
        <AnimatedHeading
          variants={FromLeftVariant}
          className='mb-6 animate-border bg-gradient-to-r from-cyan-700 to-blue-600 bg-[length:400%_400%] bg-clip-text text-3xl font-semibold text-transparent lg:text-4xl lg:font-bold'
        >
          Guestbook
        </AnimatedHeading>
        <LoginBtn />
      </Container>
    </>
  );
};
export default GuestBookPage;
