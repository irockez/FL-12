let isLeapYear = year => new Date(year, 1, 29).getDate() === 29;

isLeapYear(2020);