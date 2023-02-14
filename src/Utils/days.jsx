function getNumberOfWeeks(date) {
  const start = new Date(date.getFullYear(), date.getMonth(), 1);
  const end = new Date(date.getFullYear(), date.getMonth() + 1, 0);

  const weeks = Math.ceil(
    ((end - start) / (24 * 60 * 60 * 1000) + (start.getDay() || 7)) / 7
  );
  return weeks;
}

function getFirstDisplayedDay(date) {
  const firstMonthDay = new Date(date.getFullYear(), date.getMonth(), 1);
  return new Date(firstMonthDay.getFullYear(), firstMonthDay.getMonth(), firstMonthDay.getDate() - (firstMonthDay.getDay() || 7) + 1)
}

export function getDayTable(date) {
  const dayTable = [];

  const day = getFirstDisplayedDay(date);

  for (let i = 0; i < getNumberOfWeeks(date); i++) {
    const weekTable = [];
    for (let j = 0; j < 7; j++) {
      weekTable.push(new Date(day));
      day.setDate(day.getDate() + 1);
    }
    dayTable.push(weekTable);
  }
  return dayTable;
}

export const toStringDate = (date) => {
  const year = date.getFullYear();
  const month =
    date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
  const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
  return `${year}-${month}-${day}`;
};

export const getNextYears = (date, limit) => {
  const nextYears = []
  for (let i = 0 ; i < limit ; i++) {
    const nextYearDate = new Date(date.getFullYear()+i, date.getMonth(), date.getDate())
    nextYears.push(nextYearDate.getFullYear())
  }
  return nextYears
}

export const getMonthDays = (date, currentDate) => {
  const monthDays = [];
  let startDay = 1;
  if (currentDate.getMonth() === date.getMonth()) {
    startDay = currentDate.getDate()
  }
  let day = new Date(date.getFullYear(), date.getMonth(), startDay)
  while (day.getMonth() === date.getMonth()) {
    monthDays.push(new Date(day).getDate());
    day.setDate(day.getDate() + 1)
  }
  return monthDays
}

export const getMonthList = (date, currentDate) => {
  const monthList = []
  let startMonth = 0;
  if (date.getYear() === currentDate.getYear())
    startMonth = currentDate.getMonth()
  for (let i = startMonth ; i < 12 ; i++) {
    monthList.push(i);
  }
  return monthList
}