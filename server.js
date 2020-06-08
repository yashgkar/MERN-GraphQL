const express = require('express');
const GraphQLHTTP = require('express-graphql');
const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString
} = require('graphql');
const app = express();
const schema = require('./schema/schema');
const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false
})
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));

app.use('/graphql', GraphQLHTTP({
    schema: schema,
    graphiql: true
}));




app.listen(3000, () => console.log(`Server listening on port 3000!`));