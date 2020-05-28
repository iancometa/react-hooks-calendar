import React, { useState } from 'react';
import getDaysMonth from './getDaysMonth';
import { days } from './daysMonthArray';
import { ArrowDiv, GridContainer, GridItem, Wrapper } from './styledComponents';
import CalendarDaysOfWeek from './calendarDaysofWeek';
import CalendarHeader from './calendarHeader';

const Calendar = () => {

    const d = new Date();

    const [currMonth, setMonth] = useState(d.getMonth());
    const [currYear, setYear] = useState(d.getFullYear());

    const handleArrowClick = (val) => {
        if (val === 'next') {
          if (currMonth === 11) {
            setYear(currYear + 1);
            setMonth(0);
          } else {
            setMonth(currMonth + 1);
          }
        } else {
          if (currMonth === 0) {
            setYear(currYear - 1);
            setMonth(11);
          } else {
            setMonth(currMonth - 1);
          }
        }
    
    }

    const dates = getDaysMonth(currYear, currMonth + 1);

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
                    const cMonth = d.getMonth();
                    const cDay = d.getDate();
                    const currday = parseInt(day[0]);
                    (currday === cDay && cMonth === currMonth && cYear === currYear ? cells.push(<GridItem selected key={row + dy}>{day[0]}</GridItem>) : cells.push(<GridItem key={row + dy}>{day[0]}</GridItem>));    
                    count++;
                } else {
                    cells.push(<GridItem blank key={row + dy}></GridItem>);
                }
            }
            
        }

        calendarTable.push(<GridContainer key={row}>{cells}</GridContainer>);

    }

    const currDate = {
        currYear: currYear,
        currMonth: currMonth
    }

    return (
        <Wrapper>
            <ArrowDiv left onClick={() => handleArrowClick('prev')}></ArrowDiv>
            <ArrowDiv onClick={() => handleArrowClick('next')}></ArrowDiv>
            <CalendarHeader currDate={currDate} />
            <CalendarDaysOfWeek />
            {calendarTable}
        </Wrapper>
    );

}

export default Calendar;