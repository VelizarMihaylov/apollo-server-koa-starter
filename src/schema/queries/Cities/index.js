export const cities = async (obj, { country }, { dataSources: { openqaAPI } }) => openqaAPI.getCities(country)

export const City = `
# A city in a town
type City {
  name: String @cacheControl(maxAge: 30)
}
`
