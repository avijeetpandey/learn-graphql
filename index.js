import express from 'express'
import resolvers from './resolvers'
import schema from './schema'

import {graphqlHTTP} from 'express-graphql'

const app = express()

app.get("/",(req,res)=>{
    res.send('GraphQL is running')
})


app.use('/graphql',graphqlHTTP({
    schema : schema,
    rootValue : resolvers,
    graphiql : true
}))

app.listen(8082,()=> console.log("Running at 8082"))