"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.typeDefs = exports.resolvers = undefined;

var _Cities = require("./queries/Cities");

const resolvers = exports.resolvers = {
  Query: {
    cities: _Cities.cities
  }
}; // Construct a schema, using GraphQL schema language

const typeDefs = exports.typeDefs = `
  ${_Cities.City}

  type Query {
    cities(country: String!): [City]
  }
`;