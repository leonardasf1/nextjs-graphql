import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "../styles/Navbar.module.scss";

const navigation = [
  { id: 1, title: 'Главная', path: '/' },
  { id: 2, title: 'Публикации', path: '/posts' },
  { id: 3, title: 'Контакты', path: '/contacts' },
  { id: 4, title: 'Войти', path: '/auth/login' }
];

const Navbar = () => {
  const { pathname } = useRouter();

  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <Image src="/logoN.png" width={32} height={32} alt="Next.js" />
        <Image src="/logoG.svg" width={32} height={32} alt="GraphQL" />
      </div>
      <div className={styles.links}>
        {navigation.map(({ id, title, path }) => (
          <Link key={id} href={path}>
            <a className={pathname === path ? styles.active : null}>{title}</a>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
