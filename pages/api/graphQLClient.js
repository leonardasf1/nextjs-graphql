export const getData_GraphQL = async (query) => {

  const response = await graphQlFetch(query);

  const data = await response.json();

  if (!data) { return { notFound: true } };
  
  return data.data;

}

const graphQlFetch = async (query) => {

  return fetch(process.env.GQL_HOST, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query })
  });

}