import { cities, City } from './queries/Cities'
import {
  latestMeasurements,
  LatestMeasurements
} from './queries/LatestMeasurements'

export const resolvers = {
  Query: {
    cities,
    latestMeasurements
  }
}

// Construct a schema, using GraphQL schema language
export const typeDefs = `
  ${City}
  ${LatestMeasurements}

  type Query {
    cities(country: String!): [City]
    latestMeasurements(country: String! city: String!): [LatestMeasurements]
  }
`
