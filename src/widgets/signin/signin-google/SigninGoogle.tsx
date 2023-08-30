'use client'
import { signIn } from 'next-auth/react';
import { useSearchParams } from 'next/navigation';
import styles from './SigninGoogle.module.scss';

const SigninGoogle = () => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || '/profile';

  return (
    <button 
    className={styles.button}
    onClick={() => signIn('google', {callbackUrl})}
    >
      Sing in width Google
    </button>
  );
};

export { SigninGoogle };