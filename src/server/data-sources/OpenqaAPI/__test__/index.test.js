import OpenqaAPI from '../index'

describe('OpenqaAPI', () => {
  it('should return cities when called with country', async () => {
    const cities = [
      {
        name: 'London'
      },
      {
        name: 'manchester'
      }
    ]

    const API = new OpenqaAPI()

    jest.spyOn(API, 'fetchCities').mockImplementation(
      () =>
        new Promise(function (resolve) {
          setTimeout(function () {
            resolve({ results: cities })
          }, 300)
        })
    )

    const result = await API.getCities('GB')

    expect(result).toEqual(cities)
  })
})
