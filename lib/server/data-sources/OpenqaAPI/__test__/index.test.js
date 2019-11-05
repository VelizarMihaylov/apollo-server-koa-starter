"use strict";

var _index = require("../index");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('OpenqaAPI', () => {
  it('should return cities when called with country', async () => {
    const cities = [{
      name: 'London'
    }, {
      name: 'manchester'
    }];
    const API = new _index2.default();
    jest.spyOn(API, 'fetchCities').mockImplementation(() => new Promise(function (resolve) {
      setTimeout(function () {
        resolve({
          results: cities
        });
      }, 300);
    }));
    const result = await API.getCities('GB');
    expect(result).toEqual(cities);
  });
});