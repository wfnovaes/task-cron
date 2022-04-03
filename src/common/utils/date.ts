export function timeToSeconds(time: string): number {
  const [hours = '0', mins = '0', secs= '0'] = time.split(":");

  const hoursInSeconds = Number(hours) * 3600;
  const minutesInSeconds = Number(mins) * 60;
  return hoursInSeconds + minutesInSeconds + Number(secs);
}