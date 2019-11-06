import { RESTDataSource } from 'apollo-datasource-rest'

class OpenqaAPI extends RESTDataSource {
  baseURL: string
  fetchCities: { (query: string): Promise<{ results: { name: string }[] }> }
  constructor() {
    super()
    this.baseURL = 'https://api.openaq.org/v1/'
    this.fetchCities = async (
      query: string
    ): Promise<{ results: { name: string }[] }> => await this.get(query)
  }

  async getCities(country: string): Promise<{ name: string }[]> {
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
      throw new Error()
    }
  }
}

export default OpenqaAPI
