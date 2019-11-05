// @flow

export type Cities = (
  obj: null,
  {
    country: string
  },
  { dataSources:
    { openqaAPI:
      {
      getCities: (string) => Promise<{ city: string }[]> } }
  }
  ) => Promise<{ city: string }[]>

export const cities: Cities = async (
  obj: null,
  { country },
  {
    dataSources: {
      openqaAPI
    }
  }
) =>
  openqaAPI.getCities(country)

export const City: string = `
# A city in a town
type City {
  name: String @cacheControl(maxAge: 30)
}
`
