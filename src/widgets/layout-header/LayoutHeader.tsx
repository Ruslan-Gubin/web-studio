
import Link from 'next/link';
import styles from './LayoutHeader.module.scss';

const LayoutHeader = () => {

  return (
    <header className={styles.container}>
      <Link href='/'>Home</Link>
      <Link href='/blog'>Blog</Link>
      <Link href='/about'>About</Link>
    </header>
  );
};

export { LayoutHeader };