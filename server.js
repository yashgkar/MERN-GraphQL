const express = require('express');
const GraphQLHTTP = require('express-graphql');
const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString
} = require('graphql');
const app = express();

const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'Hello World!',
        fields: () => ({
            message: {
                type: GraphQLString,
                resolve: () => { 'Hello world' }
            }
        })
    })
});

app.get('/graphql', GraphQLHTTP({
    schema: schema,
    graphiql: true
}));




app.listen(3000, () => console.log(`Server listening on port 3000!`));