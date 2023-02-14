import React from "react";
import texts from "../../Assets/Texts";
import { useDateContext } from "../../Contexts/DateContext";
import { useDisplayContext } from "../../Contexts/DisplayContext";
import { getDayTable, toStringDate } from "../../Utils/days";
import {
  StyledCalendar,
  StyledDay,
  StyledDayName,
  StyledDayNumber,
  StyledDayNumberContainer,
  Week,
} from "./style";

const Day = ({ day, displayDayName, onCurrentMonth, isCurrentDay }) => {
  const { setPopup } = useDisplayContext();
  const { setSelectedDate } = useDateContext();
  return (
    <StyledDay>
      {displayDayName && (
        <StyledDayName>
          {texts.calendar.shortDayList[(day.getDay() || 7) - 1]}
        </StyledDayName>
      )}
      <StyledDayNumberContainer
        currentDay={isCurrentDay}
        currentMonth={onCurrentMonth}
        onClick={() => {
          setSelectedDate(day);
          setPopup(true);
        }}
      >
        <StyledDayNumber>{day.getDate()}</StyledDayNumber>
      </StyledDayNumberContainer>
    </StyledDay>
  );
};

const Calendar = () => {
  const { selectedDate, currentDate } = useDateContext();
  const dayTable = getDayTable(selectedDate);

  return (
    <StyledCalendar>
      {dayTable.map((week, w) => (
        <Week key={w}>
          {week.map((day, d) => (
            <Day
              key={d}
              day={day}
              displayDayName={w === 0}
              onCurrentMonth={day.getMonth() === selectedDate.getMonth()}
              isCurrentDay={toStringDate(day) === toStringDate(currentDate)}
            />
          ))}
        </Week>
      ))}
    </StyledCalendar>
  );
};

export default Calendar;
