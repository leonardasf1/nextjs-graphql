const express = require('express');
const cors = require('cors');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');
const { readFileSync } = require('fs');
let { users, posts } = require('./data_base.json')
// ------------------------------------------------------

const schemaString = readFileSync('./schema.graphql', { encoding: 'utf8' });

const schema = buildSchema(schemaString);

const root = {

	getAllPosts: () => {
		return posts;
	},
	getPost: params => {
		return posts.find(({ id }) => params.id === id);
	},
	addPost: params => {
		posts.push({
			id: posts.length + 1,
			...params.input
		});
		return true;
	},

	getAllUsers: () => {
		return users;
	},
	getUser: params => {
		return users.find(({ id }) => params.id === id);
	},
	getUserByEmail: params => {
		return users.find(({ email }) => params.email === email);
	},
	createUser: params => {
		users.push({
			id: users.length + 1,
			...params.input
		});
		return true;
	}
};

// ------------------------------------------------------

const app = express();

app.use(cors());

app.use('/graphql', graphqlHTTP({
		schema: schema,
		rootValue: root,
		graphiql: true
	})
);

app.listen(6006);

console.log('Running a GraphQL API server at http://localhost:6006/graphql');
