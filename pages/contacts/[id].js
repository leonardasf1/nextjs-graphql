import Head from "next/head";
import { getData_GraphQL } from "../api/graphQLClient";
import ContactInfo from "../../components/ContactInfo";

export const getServerSideProps = async (context) => {

  const { id } = context.params;

  const query = `
    query GetUser($id: ID = ${id}) {
      getUser(id: $id) {
        username
        address {
          city
        }
      }
    }
  `;
  const { getUser } = await getData_GraphQL(query);

  return { props: { contact: getUser } };

};

const Contact = ({ contact }) => (
  <>
    <Head>
      <title>Contact page</title>
    </Head>
    <ContactInfo contact={contact} />
  </>
);

export default Contact;
