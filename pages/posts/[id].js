import Head from "next/head";
import PostInfo from "../../components/PostInfo";

export const getStaticPaths = async () => {

  const query = `query FilteredPosts($options:PageQueryOptions) {
    posts(options:$options) {
      data {
        id
        title
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

  const paths = data.data.posts.data.map(({ id }) => ({
    params: { id: id.toString() }
  }));

  return {
    paths,
    fallback: false,
  }
};

export const getStaticProps = async (context) => {

  const { id } = context.params;

  const query = `query Post($id: ID = ${id}) {
    post(id: $id) {
      title
      body
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

  if (!data) { return { notFound: true, } }

  return { props: { post: data.data.post } }
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


