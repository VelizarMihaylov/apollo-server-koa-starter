import { OpenqaAPI } from './data-sources'
import { resolvers, typeDefs } from '../schema'

import { ApolloServer } from 'apollo-server-koa'

const server = new ApolloServer({
  resolvers,
  typeDefs,
  dataSources: (): { openqaAPI: OpenqaAPI } => ({
    openqaAPI: new OpenqaAPI()
  })
})

export default server
