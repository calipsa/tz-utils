import moment from 'moment-timezone'

import {
  names as timezoneNames,
  deprecatedNames,
  notWorkingInDateFnsNames,
} from '../src'

describe('names', () => {
  it('should have all the timezone names that moment does', () => {
    const sortedTimezoneNames = [
      ...timezoneNames,
      ...deprecatedNames,
      ...notWorkingInDateFnsNames,
      'Etc/GMT+12', // TODO
    ].sort()
    const sortedMomentTimezoneNames = moment.tz.names().slice().sort()
    expect(sortedTimezoneNames).toEqual(sortedMomentTimezoneNames)
  })
})
