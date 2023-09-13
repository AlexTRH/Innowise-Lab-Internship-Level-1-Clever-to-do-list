import { DayOfWeek } from './dayOfWeek.constant';

export function dayInWeek(
  year: number,
  month: number,
  dayMonth: number
): string {
  let date = new Date(year, month, dayMonth);
  return DayOfWeek[date.getDay()];
}
