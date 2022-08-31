import Head from "next/head";
import Link from "next/link";
import Heading from "../../components/Heading";

export const getStaticProps = async () => {
  const response = await fetch(process.env.GQL_HOST, {
    method: "POST",
    headers: {
      "Content-Type": 'application/json'
    },
    body: JSON.stringify({ query })
  });
  const data = await response.json();

  if (!data) { return { notFound: true } }

  return { props: { contacts: data.data.users.data } }
};

const Contacts = ({ contacts }) => { 
  return (
    <>
      <Head>
        <title>Контакты</title>
      </Head>
      <Heading text="Список контактов:" />
      <ul>
        {contacts && contacts.map(({ id, name }) => (
          <li key={id}>
            <Link href={`/contacts/${id}`}>{name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Contacts;

const query = `query UsersPage($options: PageQueryOptions) {
  users(options: $options) {
    data {
      id
      name
    }
  }
}`