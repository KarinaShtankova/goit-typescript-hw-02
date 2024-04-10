/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum Weekday {
  MONDAY,
  TUESDAY,
  WEDNESDAY,
  THURSDAY,
  FRIDAY,
  SATURDAY,
  SANDAY,
}

const day = {
  weekday: Weekday.MONDAY,
};

function isWeekend(day): boolean {
  return day.weekday === Weekday.SATURDAY || day.weekday === Weekday.SANDAY
    ? true
    : false;
}
