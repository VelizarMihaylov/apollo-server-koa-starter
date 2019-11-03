import { OpenqaAPI } from './data-sources'
import { resolvers, typeDefs } from '../schema'

const { ApolloServer } = require('apollo-server-koa')

const server = new ApolloServer({
  resolvers,
  typeDefs,
  dataSources: () => ({
    openqaAPI: new OpenqaAPI()
  }),
  formatError: false
})

export default server
