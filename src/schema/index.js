// @flow
import { cities, City } from './queries/Cities'

import type { Cities } from './queries/Cities'

type Resolvers = { Query: { cities: Cities } }

export const resolvers: Resolvers = {
  Query: {
    cities
  }
}

// Construct a schema, using GraphQL schema language
export const typeDefs: string = `
  ${City}

  type Query {
    cities(country: String!): [City]
  }
`
