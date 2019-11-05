"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _apolloDatasourceRest = require("apollo-datasource-rest");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class OpenqaAPI extends _apolloDatasourceRest.RESTDataSource {
  constructor() {
    super();

    _defineProperty(this, "baseURL", void 0);

    _defineProperty(this, "fetchCities", void 0);

    this.baseURL = process.env.OPENQA_API_BASE_URL || 'https://api.openaq.org/v1/';

    this.fetchCities = async query => this.get(query);
  }

  async getCities(country) {
    try {
      const {
        results
      } = await this.fetchCities(`cities?country=${country}`);
      const cities = results.map(({
        name
      }) => ({
        name
      }));
      return cities;
    } catch (error) {
      throw new Error(error);
    }
  }

}

exports.default = OpenqaAPI;