import moment from 'moment';
import {DateInfo} from './components/Header';

export function getDaysFromDateRange(rangeDate: [moment.Moment, moment.Moment]): DateInfo[] {
    const [startDate, endDate] = rangeDate;
    const list = [];
    const week = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];
    const isWeek = (day: number): boolean => [0, 6].includes(day);
    let start = moment(startDate);

    while (endDate.isSameOrAfter(start)) {
        const day = start.day();
        list.push({
            dateMoment: start,
            isWeek: isWeek(day),
            date: start.format('MM/DD'),
            week: week[day],
        });
        start = start.add(1, 'day');
    }

    return list;
}
