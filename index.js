'use strict'

const { graphql, buildSchema } = require('graphql')

//esquema inicial
const schema = buildSchema(`
    type Query {
        hello: String
        saludo: String
    }
`)

//configurar resolvers

const resolvers = {
    hello: () => {
        return 'Hola mundo'
    },
    saludo: () => {
        return 'Hola a todos'
    }
}

//ejecutar
graphql( schema, '{hello, saludo}', resolvers).then ((data)=>{
    console.log(data)
})