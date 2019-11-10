import OpenqaAPI from '../index'
import {
  latestMeasurementsAPIResponseMock,
  latestMeasurementsMock
} from '../__mocks__'

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
        new Promise(function(resolve) {
          setTimeout(function() {
            resolve({ results: cities })
          }, 300)
        })
    )

    const result = await API.getCities('GB')

    expect(result).toEqual(cities)
  })
  it('should return latest measurements when getLatestMeasurements method is called with country and city', async () => {
    const mockAPIResponse = latestMeasurementsAPIResponseMock
    const API = new OpenqaAPI()
    jest.spyOn(API, 'fetchLatestMeasurements').mockImplementation(
      () =>
        new Promise(function(resolve) {
          setTimeout(function() {
            resolve(mockAPIResponse)
          }, 300)
        })
    )
    const result = await API.getLatestMeasurements('GB', 'Manchester')
    expect(result).toStrictEqual(latestMeasurementsMock)
  })
})
