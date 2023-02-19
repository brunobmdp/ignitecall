export function convertTimeStringToMinutes(timeString: string) {
  const [hours, minutes] = timeString.split(':').map(Number) // string format =  00:00
  return hours * 60 + minutes // convert to minutes
}
