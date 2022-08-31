import Head from "next/head";
import ContactInfo from "../../components/ContactInfo";

export const getServerSideProps = async (context) => {

  const { id } = context.params;

  const query = `query UserPage($id: ID = ${id}) {
    user(id: $id) {
      name
      email
      address {
        street
        suite
        city
        zipcode
      }
    }
  }`
  const response = await fetch(process.env.GQL_HOST, {
    method: "POST",
    headers: {
      "Content-Type": 'application/json'
    },
    body: JSON.stringify({ query })
  });

  const data = await response.json();

  if (!data) { return { notFound: true } }

  return { props: { contact: data.data.user } }
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
