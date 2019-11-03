export const cities: {
  (
    obj: null,
    { country }: { country: string },
    {
      dataSources: { openqaAPI }
    }: {
      dataSources: {
        openqaAPI: {
          getCities: (country: string) => Promise<[{ name: string }]>
        }
      }
    }
  ): Promise<[{ name: string }]>
} = async (obj: null, { country }, { dataSources: { openqaAPI } }) =>
  openqaAPI.getCities(country)

export const City: string = `
# A city in a town
type City {
  name: String @cacheControl(maxAge: 30)
}
`
