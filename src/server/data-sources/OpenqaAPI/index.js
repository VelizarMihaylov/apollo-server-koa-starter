import { RESTDataSource } from 'apollo-datasource-rest'

class OpenqaAPI extends RESTDataSource {
  constructor () {
    super()
    this.baseURL = 'https://api.openaq.org/v1/'
  }

  async getCities (country) {
    try {
      const { results } = await this.get(`cities?country=${country}`)
      const cities = results.map(({ name }) => ({
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
