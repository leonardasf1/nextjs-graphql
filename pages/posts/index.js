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

  return { props: { posts: data.data.posts.data } }
};

const Posts = ({ posts }) => { 
  return (
    <>
      <Head>
        <title>Публикации</title>
      </Head>
      <Heading text="Список публикаций:" />
      <ul>
        {posts && posts.map(({ id, title }) => (
          <li key={id}>
            <Link href={`/posts/${id}`}>{title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Posts;

const query = `query FilteredPosts($options:PageQueryOptions) {
  posts(options:$options) {
    data {
      id
      title
    }
  }
}`
