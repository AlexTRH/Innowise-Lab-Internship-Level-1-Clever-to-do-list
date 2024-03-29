export function currDayInMonth() {
  return new Date().getDate();
}

export const DayOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export function dayInWeek(
  year: number,
  month: number,
  dayMonth: number
): string {
  let date = new Date(year, month, dayMonth);
  return DayOfWeek[date.getDay()];
}

export function daysInMonth(month: number, year: number): number {
  return new Date(year, month, 0).getDate();
}

export const MonthArr = [
  'Jun',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'June',
  'July',
  'Aug',
  'Sept',
  'Oct',
  'Nov',
  'Dec',
];
