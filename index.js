'use strict'

const { graphql, buildSchema } = require('graphql')
const express = require ('express')
const gplMiddleware = require('express-graphql')
const { readFileSync } = require ('fs')
const { join } = require ('path')
const resolvers = require ('./lib/resolvers.js')

const app = express()
const port = process.env.port || 4000

//esquema inicial
const schema = buildSchema(
    readFileSync(
        join(__dirname,'lib','schema.graphql'),
        'utf-8'
    )
)

app.use ('/api',gplMiddleware({
    schema : schema,
    rootValue : resolvers,
    graphiql : true
}))

app.listen (port, () => {
    console.log(`El servidor se está ejecutando en http://localhost:${port}/api`)
})

//ejecutar

graphql( schema, '{courses}', resolvers).then ((data)=>{
    //console.log(data)
})