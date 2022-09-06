import Head from "next/head";
import { getData_GraphQL } from "../api/graphQLClient";
import PostInfo from "../../components/PostInfo";

export const getStaticPaths = async () => {

  const query = `
    query GetAllPosts{
      getAllPosts {
        id
        title
      }
    }
  `
  const { getAllPosts } = await getData_GraphQL(query);

  const paths = getAllPosts.map(({ id }) => ({
    params: { id: id.toString() }
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {

  const { id } = context.params;

  const query = `
    query GetPost($id: ID = ${id}) {
      getPost(id: $id) {
        title
        body
      }
    }
  `;
  const { getPost } = await getData_GraphQL(query);
  return { props: { post: getPost } };

};

const Post = ({ post }) => (
  <>
    <Head>
      <title>Публикация</title>
    </Head>
    <PostInfo post={post} />
  </>
);

export default Post;
