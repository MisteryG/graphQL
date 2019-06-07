'use strict'

const { graphql, buildSchema } = require('graphql')
const express = require ('express')
const gplMiddleware = require('express-graphql')

const app = express()
const port = process.env.port || 4000

//esquema inicial
const schema = buildSchema(`
    type Query {
        hello: String
    }
`)

//configurar resolvers
const resolvers = {
    hello: () => {
        return 'Hola mundo'
    }
}

app.use ('/api',gplMiddleware({
    schema : schema,
    rootValue : resolvers,
    graphiql : true
}))

app.listen (port, () => {
    console.log(`El servidor se está ejecutando en http://localhost:${port}/api`)
})

//ejecutar
graphql( schema, '{hello}', resolvers).then ((data)=>{
    console.log(data)
})