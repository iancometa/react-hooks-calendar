import React from 'react';
import getDaysMonth from './getDaysMonth';
import { days } from './daysMonthArray';
import { GridContainer, GridItem } from './styledComponents';

const Calendar = ({currDate}) => {

    const dates = getDaysMonth(currDate.currYear, currDate.currMonth + 1);

    let calendarTable = [];
    let count = 0;

    for (let row = 0; row < 6; row++) {
 
        let cells = [];
 
        for (let dy = 0; dy < days.length; dy++) {
            
            if (count >= dates.length) {
                cells.push(<GridItem blank key={row + dy}></GridItem>);
            } else {
                let day = dates[count].split(" - ");
                if (days[dy] === day[1]) {
                    const d = new Date();
                    const cYear = d.getFullYear();
                    const currMonth = d.getMonth();
                    const cDay = d.getDate();
                    const currday = parseInt(day[0]);
                    (currday === cDay && currMonth === currDate.currMonth && cYear === currDate.currYear ? cells.push(<GridItem selected key={row + dy}>{day[0]}</GridItem>) : cells.push(<GridItem key={row + dy}>{day[0]}</GridItem>));    
                    count++;
                } else {
                    cells.push(<GridItem blank key={row + dy}></GridItem>);
                }
            }
            
        }

        calendarTable.push(<GridContainer key={row}>{cells}</GridContainer>);

    }

    return (
        <div>
            {calendarTable}
        </div>
    );

}

export default Calendar;