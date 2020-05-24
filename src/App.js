import React, { useState } from 'react';
import './App.css';
import CalendarHeader from './components/calendarHeader';
import CalendarDaysOfWeek from './components/calendarDaysofWeek';
import Calendar from './components/calendar';
import { ArrowDiv } from './components/styledComponents';

const App = () => {

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

  const currDate = {
    currYear: currYear,
    currMonth: currMonth
  }

  return (      
    <div className="App">
      <ArrowDiv left onClick={() => handleArrowClick('prev')}></ArrowDiv>
      <ArrowDiv onClick={() => handleArrowClick('next')}></ArrowDiv>
      <CalendarHeader currDate={currDate} />
      <CalendarDaysOfWeek />
      <Calendar currDate={currDate} />
    </div>
  );
}

export default App;
