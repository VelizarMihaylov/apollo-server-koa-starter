import { RESTDataSource } from 'apollo-datasource-rest'

export interface LatestMeasurementsAPIResponse {
  meta: {
    name: string
    license: string
    website: string
    page: number
    limit: number
    found: number
  }
  results: {
    location: string
    city: string
    country: string
    distance: number
    measurements: {
      parameter: string
      value: number
      lastUpdated: string
      unit: string
      sourceName: string
      averagingPeriod: {
        value: number
        unit: string
      }
    }[]
    coordinates: {
      latitude: number
      longitude: number
    }
  }[]
}

export interface LatestMeasurements {
  location: string
  lastUpdated: string
  measurements: {
    parameter: string
    value: number
    unit: string
  }[]
}

class OpenqaAPI extends RESTDataSource {
  baseURL: string
  fetchCities: { (query: string): Promise<{ results: { name: string }[] }> }
  fetchLatestMeasurements: {
    (query: string): Promise<LatestMeasurementsAPIResponse>
  }
  constructor() {
    super()
    this.baseURL = 'https://api.openaq.org/v1/'
    this.fetchCities = async (
      query: string
    ): Promise<{ results: { name: string }[] }> => await this.get(query)
    this.fetchLatestMeasurements = async (
      query: string
    ): Promise<LatestMeasurementsAPIResponse> => await this.get(query)
  }

  async getCities(country: string): Promise<{ name: string }[]> {
    try {
      const { results } = await this.fetchCities(
        `cities?country=${country.toUpperCase()}`
      )
      const cities = results.map(({ name }): {
        name: string
      } => ({
        name
      }))
      return cities
    } catch (error) {
      console.log('ERROR ', error)
      throw new Error()
    }
  }

  async getLatestMeasurements(
    country: string,
    city: string
  ): Promise<LatestMeasurements[]> {
    try {
      const { results } = await this.fetchLatestMeasurements(
        `latest?city=${city
          .split('')
          .map((letter, i) => (i === 0 ? letter.toUpperCase() : letter))
          .join('')}&country=${country.toUpperCase()}`
      )
      return results.map(({ location, measurements }) => ({
        location,
        lastUpdated: measurements.reduce((acc, measurement): string => {
          if (acc.length < 1 && measurement.lastUpdated) {
            const { lastUpdated } = measurement
            acc = lastUpdated
          }
          return acc
        }, ''),
        measurements: measurements.map(({ parameter, value, unit }) => ({
          parameter,
          value,
          unit
        }))
      }))
    } catch (error) {
      console.log('ERROR ', error)
      throw new Error(error)
    }
  }
}

export default OpenqaAPI
