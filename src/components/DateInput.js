import React, { useState } from "react";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import moment from 'moment'
import dateFormat from 'dateformat'
import styled from 'styled-components'

const DateInput = ({ date, setDate }) => {
    const [value] = useState(new Date())

    const HandleChangeDates = date => {
        const formatedDate = dateFormat(date, 'isoDate')
        setDate(formatedDate)
    }



    return (
        <CalendarDiv>
            <DateSelectorTitle>Select a Date:</DateSelectorTitle>
            <DateSelector>
            <Calendar
                onChange={HandleChangeDates}
                value={value}
                maxDate={value}

            />
            </DateSelector>
        </CalendarDiv>
    )
};

export default DateInput;

const CalendarDiv = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
text-align: center;

`

const DateSelectorTitle = styled.h3`
text-align: center;
margin: auto;
display: block;
`

const DateSelector = styled.div`
text-align: center;
margin: auto;
margin-bottom: 5px;
`