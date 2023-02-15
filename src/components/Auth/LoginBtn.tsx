import { useSession, signIn, signOut } from 'next-auth/react';
import { BsGithub } from 'react-icons/bs';
import Button from '../common/Button';
import Input from '../common/Input';

export default function Component() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        Signed in as {session?.user?.name} <br />
        <Input
          type='text'
          name='comment'
          label='Comment'
          value=''
          onChange={() => {}}
        />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return (
    <Button
      variant='secondary'
      size='medium'
      rounded='large'
      className='inline-flex items-center rounded-lg px-5 py-4 text-sm font-medium'
      onClick={() => signIn('github')}
    >
      <BsGithub className='mr-2 -ml-1 h-4 w-4' />
      Sign in with Github
    </Button>
  );
}
