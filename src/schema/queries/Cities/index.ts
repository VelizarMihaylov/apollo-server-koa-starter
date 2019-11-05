import { OpenqaAPI } from '@src/server/data-sources'
export const cities: {
  (
    obj: null,
    { country }: { country: string },
    {
      dataSources: { openqaAPI }
    }: {
      dataSources: {
        openqaAPI: OpenqaAPI
      }
    }
  ): Promise<{ name: string }[]>
} = async (obj: null, { country }, { dataSources: { openqaAPI } }) => openqaAPI.getCities(country)

export const City = `
# A city in a town
type City {
  name: String @cacheControl(maxAge: 30)
}
`
