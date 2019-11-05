// @flow
import { OpenqaAPI } from './data-sources'
import { resolvers, typeDefs } from '../schema'

import { ApolloServer, GraphQLError, GraphQLFormattedError } from 'apollo-server-koa'

const server = new ApolloServer({
  resolvers,
  typeDefs,
  dataSources: () => ({
    openqaAPI: new OpenqaAPI()
  }),
  formatError: (error: GraphQLError): GraphQLFormattedError => {
    const { message } = error
    if (process.env.NODE_ENV === 'development') {
      return error
    }
    if (message.includes('404')) {
      return {
        message: 'Not Found',
        extensions: '404'
      }
    }
    return {
      message: 'Internal Server Error',
      extensions: '503'
    }
  }
})

export default server
