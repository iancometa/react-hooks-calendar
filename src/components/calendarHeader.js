import React from 'react';
import { monthArray } from './daysMonthArray';
import { HeaderDiv } from './styledComponents';

const CalendarHeader = ({currDate}) => {

    return (
        <HeaderDiv>
           {monthArray[currDate.currMonth] + " " + currDate.currYear}
        </HeaderDiv>
    )
}

export default CalendarHeader;