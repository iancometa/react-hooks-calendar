import { days } from './daysMonthArray';

const getDaysMonth = (year, month) => {
    const monthIndex = month - 1;
    const names = Object.freeze(days);
    const date = new Date(year, monthIndex, 1);
    const result = [];
    while (date.getMonth() === monthIndex) {
        result.push(`${date.getDate()} - ${names[date.getDay()]}`);
        date.setDate(date.getDate() + 1);
    };
    return result;
}

export default getDaysMonth;