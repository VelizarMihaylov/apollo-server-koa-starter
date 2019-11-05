"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

const cities = exports.cities = async (obj, {
  country
}, {
  dataSources: {
    openqaAPI
  }
}) => openqaAPI.getCities(country);

const City = exports.City = `
# A city in a town
type City {
  name: String
}
`;