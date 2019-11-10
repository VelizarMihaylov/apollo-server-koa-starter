import { OpenqaAPI } from '@src/server/data-sources'
import { LatestMeasurements as LatestMeasurementsInterface } from '@src/server/data-sources/OpenqaAPI'
export const latestMeasurements: {
  (
    obj: null,
    { country, city }: { country: string; city: string },
    {
      dataSources: { openqaAPI }
    }: {
      dataSources: {
        openqaAPI: OpenqaAPI
      }
    }
  ): Promise<LatestMeasurementsInterface[]>
} = async (obj: null, { country, city }, { dataSources: { openqaAPI } }) =>
  openqaAPI.getLatestMeasurements(country, city)

export const LatestMeasurements = `
# An air quality measurement
type Measurement {
  parameter: String
  value: Int
  unit: String
}
# Latest measurements for a location withing a city
type LatestMeasurements {
  location: String
  lastUpdated: String
  measurements: [Measurement]
}
`
