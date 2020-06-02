const express = require('express');
const GraphQLHTTP = require('express-graphql');
const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString
} = require('graphql');
const app = express();
const schema = require('./schema/schema');

app.use('/graphql', GraphQLHTTP({
    schema: schema,
    graphiql: true
}));




app.listen(3000, () => console.log(`Server listening on port 3000!`));