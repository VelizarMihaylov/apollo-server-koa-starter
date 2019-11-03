import { cities, City } from './queries/Cities'

export const resolvers = {
  Query: {
    cities
  }
}

// Construct a schema, using GraphQL schema language
export const typeDefs = `
  ${City}

  type Query {
    cities(country: String!): [City]
  }
`
