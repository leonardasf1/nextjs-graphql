const dbUrl = "https://graphqlzero.almansi.me/api"

export const graphNewUser = async (name, email, tel) => {
  graphQlFetch(
    `mutation CreateUser {
      createUser(input: {
        name: "${name}"
        username: "secname"
        email: "${email}"
        address: {
          street: "street"
          suite: "123"
          city: "city"
          zipcode: "zip"
          geo: {
            lat: 234
            lng: 456
          }
        }
        phone: "${tel}"
        website: "website"
        company: {
          name: "company"
          catchPhrase: "q"
          bs: "q"
        }
      }) {
        id
      }
    }`
  ).then(response => console.log(response.json()))
}

export const graphGetUser = async (email) => {
  graphQlFetch(
    `query Users {
      users(options:{search:{q:"${email}"}}) {
        data {
          id
          name
          email
          phone
        }
      }
    }`
  ).then(response => response.json())
}

export const graphEditUser = async (id, editedField, value) => {
  graphQlFetch(
    `mutation EditUser {
      editUser(id:${id}, input: {
        ${editedField}: ${value}
      }) {
        ${editedField}
      }
    }`
  )
}

export const graphDeleteUser = async (id) => {
  graphQlFetch(
    `mutation DeleteUser {
      deleteUser(id:${id})
    }`
  )
}

const graphQlFetch = async (query) => {
  return fetch(dbUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query })
  })
}