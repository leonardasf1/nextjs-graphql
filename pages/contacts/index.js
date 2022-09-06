import Head from "next/head";
import Link from "next/link";
import { getData_GraphQL } from "../api/graphQLClient";
import Heading from "../../components/Heading";

export const getStaticProps = async () => {
  
  const query = `
    query GetAllUsers {
      getAllUsers {
          id
          username
      }
    }
  `;
  const { getAllUsers } = await getData_GraphQL(query);
  return { props: { contacts: getAllUsers } };

};

const Contacts = ({ contacts }) => { 
  return (
    <>
      <Head>
        <title>Контакты</title>
      </Head>
      <Heading text="Список контактов:" />
      <ul>
        {contacts && contacts.map(({ id, username }) => (
          <li key={id}>
            <Link href={`/contacts/${id}`}>{username}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Contacts;
