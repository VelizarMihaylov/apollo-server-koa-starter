"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dataSources = require("./data-sources");

var _schema = require("src/*/schema");

var _apolloServerKoa = require("apollo-server-koa");

const server = new _apolloServerKoa.ApolloServer({
  resolvers: _schema.resolvers,
  typeDefs: _schema.typeDefs,
  dataSources: () => ({
    openqaAPI: new _dataSources.OpenqaAPI()
  }),
  formatError: error => {
    if (process.env.NODE_ENV === 'development') {
      return error;
    }

    if (error.message.includes('404')) {
      console.log('ERROR', error);
      return {
        message: 'Not Found',
        extensions: {
          code: '404'
        }
      };
    }

    console.log('ERROR', error);
    return {
      message: 'Internal Server Error',
      extensions: {
        code: '501'
      }
    };
  }
});
exports.default = server;