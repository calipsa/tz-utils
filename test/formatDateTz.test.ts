import { formatDateTz } from '../src'

const FORMAT = 'yyyy-MM-dd, HH:mm:ss'

const timezones = [
  'UTC',
  'Europe/London',
  'Europe/Paris',
  'Europe/Moscow',
]

const dates = [
  '2019-11-16T00:44:45.392Z',
  '2019-11-16T00:43:45.392Z',
  '2019-11-16T00:45:45.392Z',
  '2019-11-15T23:45:45.392Z',
  '2019-11-16T23:45:45.392Z',
]

describe('formatDateTz', () => {
  for (const tz of timezones) {
    for (const date of dates) {
      test(`splitDate (${date}, ${tz})`, () => {
        const result = formatDateTz(date, FORMAT, tz)
        expect(result).toMatchSnapshot()
      })
    }
  }
})