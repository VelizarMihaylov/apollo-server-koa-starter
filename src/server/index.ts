import { OpenqaAPI } from './data-sources'
import { resolvers, typeDefs } from '../schema'

import { ApolloServer } from 'apollo-server-koa'
import { GraphQLError, GraphQLFormattedError } from 'graphql'

const server = new ApolloServer({
  resolvers,
  typeDefs,
  dataSources: (): { openqaAPI: OpenqaAPI } => ({
    openqaAPI: new OpenqaAPI()
  }),
  formatError: (error: GraphQLError): GraphQLFormattedError => {
    if (process.env.NODE_ENV === 'development') {
      return error
    }
    return {
      message: 'Internal Server Error',
      extensions: {
        code: 501
      }
    }
  }
})

export default server
