// @flow
import { RESTDataSource } from 'apollo-datasource-rest'

class OpenqaAPI extends RESTDataSource {
  fetchCities: { (query: string): Promise<{ results: { name: string }[] }> }
  constructor () {
    super()
    this.baseURL = 'https://api.openaq.org/v2/'
    this.fetchCities = async query => this.get(query)
  }

  async getCities (country: string): Promise<{ name: string }[]> {
    try {
      const { results } = await this.fetchCities(`cities?country=${country}`)
      const cities = results.map(({ name }): {
        name: string
      } => ({
        name
      }))
      return cities
    } catch (error) {
      console.log('ERROR ', error)
      throw new Error(error)
    }
  }
}

export default OpenqaAPI
