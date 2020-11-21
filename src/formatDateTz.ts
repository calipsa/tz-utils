import utcToZonedTime from 'date-fns-tz/esm/utcToZonedTime'
import formatDate from 'date-fns-tz/esm/format/index'

type DateInput = Parameters<typeof utcToZonedTime>[0]

export default (date: DateInput, format: string, timezone: string) => {
  const zonedDateTime = utcToZonedTime(date, timezone)
  return formatDate(zonedDateTime, format, {
    timeZone: timezone,
  })
}
