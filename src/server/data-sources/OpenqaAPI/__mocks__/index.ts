import { LatestMeasurementsAPIResponse, LatestMeasurements } from '../index'

export const latestMeasurementsAPIResponseMock: LatestMeasurementsAPIResponse = {
  meta: {
    name: 'openaq-api',
    license: 'CC BY 4.0',
    website: 'https://docs.openaq.org/',
    page: 1,
    limit: 100,
    found: 3
  },
  results: [
    {
      location: 'Manchester Piccadilly',
      city: 'Manchester',
      country: 'GB',
      distance: 2109229.2891838187,
      measurements: [
        {
          parameter: 'so2',
          value: 11,
          lastUpdated: '2019-11-09T07:00:00.000Z',
          unit: 'µg/m³',
          sourceName: 'DEFRA',
          averagingPeriod: {
            value: 0.25,
            unit: 'hours'
          }
        },
        {
          parameter: 'pm25',
          value: 9,
          lastUpdated: '2019-11-09T07:00:00.000Z',
          unit: 'µg/m³',
          sourceName: 'DEFRA',
          averagingPeriod: {
            value: 24,
            unit: 'hours'
          }
        },
        {
          parameter: 'o3',
          value: 2,
          lastUpdated: '2019-11-09T07:00:00.000Z',
          unit: 'µg/m³',
          sourceName: 'DEFRA',
          averagingPeriod: {
            value: 8,
            unit: 'hours'
          }
        },
        {
          parameter: 'no2',
          value: 46,
          lastUpdated: '2019-11-09T07:00:00.000Z',
          unit: 'µg/m³',
          sourceName: 'DEFRA',
          averagingPeriod: {
            value: 1,
            unit: 'hours'
          }
        }
      ],
      coordinates: {
        latitude: 53.48152,
        longitude: -2.237881
      }
    },
    {
      location: 'Manchester Sharston',
      city: 'Manchester',
      country: 'GB',
      distance: 2117414.6023812266,
      measurements: [
        {
          parameter: 'o3',
          value: 4,
          lastUpdated: '2019-11-09T07:00:00.000Z',
          unit: 'µg/m³',
          sourceName: 'DEFRA',
          averagingPeriod: {
            value: 8,
            unit: 'hours'
          }
        },
        {
          parameter: 'no2',
          value: 22,
          lastUpdated: '2019-11-09T07:00:00.000Z',
          unit: 'µg/m³',
          sourceName: 'DEFRA',
          averagingPeriod: {
            value: 1,
            unit: 'hours'
          }
        }
      ],
      coordinates: {
        latitude: 53.371307,
        longitude: -2.239218
      }
    },
    {
      location: 'Salford Eccles',
      city: 'Manchester',
      country: 'GB',
      distance: 2113771.481020469,
      measurements: [
        {
          parameter: 'no2',
          value: 42,
          lastUpdated: '2019-11-09T07:00:00.000Z',
          unit: 'µg/m³',
          sourceName: 'DEFRA',
          averagingPeriod: {
            value: 1,
            unit: 'hours'
          }
        },
        {
          parameter: 'pm25',
          value: 13,
          lastUpdated: '2019-11-09T07:00:00.000Z',
          unit: 'µg/m³',
          sourceName: 'DEFRA',
          averagingPeriod: {
            value: 24,
            unit: 'hours'
          }
        },
        {
          parameter: 'pm10',
          value: 18,
          lastUpdated: '2019-11-09T07:00:00.000Z',
          unit: 'µg/m³',
          sourceName: 'DEFRA',
          averagingPeriod: {
            value: 24,
            unit: 'hours'
          }
        }
      ],
      coordinates: {
        latitude: 53.48481,
        longitude: -2.334139
      }
    }
  ]
}

export const latestMeasurementsMock: LatestMeasurements[] = [
  {
    location: 'Manchester Piccadilly',
    lastUpdated: '2019-11-09T07:00:00.000Z',
    measurements: [
      {
        parameter: 'so2',
        value: 11,
        unit: 'µg/m³'
      },
      {
        parameter: 'pm25',
        value: 9,
        unit: 'µg/m³'
      },
      {
        parameter: 'o3',
        value: 2,
        unit: 'µg/m³'
      },
      {
        parameter: 'no2',
        value: 46,
        unit: 'µg/m³'
      }
    ]
  },
  {
    location: 'Manchester Sharston',
    lastUpdated: '2019-11-09T07:00:00.000Z',
    measurements: [
      {
        parameter: 'o3',
        value: 4,
        unit: 'µg/m³'
      },
      {
        parameter: 'no2',
        value: 22,
        unit: 'µg/m³'
      }
    ]
  },
  {
    location: 'Salford Eccles',
    lastUpdated: '2019-11-09T07:00:00.000Z',
    measurements: [
      {
        parameter: 'no2',
        value: 42,
        unit: 'µg/m³'
      },
      {
        parameter: 'pm25',
        value: 13,
        unit: 'µg/m³'
      },
      {
        parameter: 'pm10',
        value: 18,
        unit: 'µg/m³'
      }
    ]
  }
]
