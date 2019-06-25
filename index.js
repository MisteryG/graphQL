'use strict'

require ('dotenv').config()
const { makeExecutableSchema } = require('graphql-tools')
const express = require ('express')
const cors = require ('cors')
const gplMiddleware = require('express-graphql')
const { readFileSync } = require ('fs')
const { join } = require ('path')
const resolvers = require ('./lib/resolvers.js')

const app = express()
const port = process.env.port || 4000
//para usar lo siguiente en windows npm i -g win-node-env
const isDev = process.env.NODE_ENV !== 'production'

//definiendo el esquema para graphql-tools
const typeDefs = readFileSync(
    join(__dirname,'lib','schema.graphql'),
    'utf-8'
)

const schema = makeExecutableSchema({typeDefs, resolvers})

app.use(cors())

app.use ('/api',gplMiddleware({
    schema : schema,
    rootValue : resolvers,
    graphiql : isDev
}))

app.listen (port, () => {
    console.log(`El servidor se está ejecutando en http://localhost:${port}/api`)
})