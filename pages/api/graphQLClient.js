export const getData_GraphQL = async (query) => {

  const response = await graphQlFetch(query);

  const data = await response.json();

  if (!data) { return { notFound: true } };
  
  return data.data;

}
const serverUrl = "http://localhost:6006/graphql?"

const graphQlFetch = async (query) => {

  return fetch(serverUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query })
  });

}