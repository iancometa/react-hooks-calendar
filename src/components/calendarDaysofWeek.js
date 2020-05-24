import React from 'react';
import { days } from './daysMonthArray'; 
import { GridContainer, GridDay } from './styledComponents';

const CalendarDaysOfWeek = () => {

    return (
        <GridContainer>
            {days.map((el) => <GridDay key={el}>{el.toUpperCase()}</GridDay>)}
        </GridContainer>
    );
    
}

export default CalendarDaysOfWeek;