import Heading from "./Heading";

const ContactInfo = ({ contact }) => {
  const { username, address } = contact || {};
  // const { city } = address || {};

  if (!contact) {
    return <Heading tag="h3" text="Empty contact" />
  }

  return (
    <>
      <Heading tag="h3" text={`${username} . ${address.city}`} />
      {/* <div>
         <strong>name: </strong>
         {name}
       </div>
       <div>
         <strong>Address: </strong>
         {`${city}, ${zipcode}`}
       </div>*/}
    </>
  );
}

export default ContactInfo;
