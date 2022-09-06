import Head from "next/head";
import Link from "next/link";
import { getData_GraphQL } from "../api/graphQLClient";
import Heading from "../../components/Heading";

export const getStaticProps = async () => {

  const query = `
    query GetAllPosts{
      getAllPosts {
        id
        title
      }
    }
  `

  const { getAllPosts } = await getData_GraphQL(query)
  return { props: { posts: getAllPosts } }

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
