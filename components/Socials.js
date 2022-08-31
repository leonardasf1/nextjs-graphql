import Head from "next/head";
import styles from "../styles/Socials.module.scss";

const Socials = ({ socials }) => {

  if (!socials) {
    return null;
  }

  return (
    <>
    <Head>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.0/css/all.css" />
    </Head>
    <ul className={styles.socials}>
      {socials && socials.map(({ id, icon, path }) => (
        <span key={id}>
          <a href={path} target="_blank" rel="noopener noreferrer">
            <i className={`fab fa-${icon}`} aria-hidden="true" />
          </a>
        </span>
      ))}
    </ul>
    </>
  );
}

export default Socials;
