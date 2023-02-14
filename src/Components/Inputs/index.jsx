import React from "react";
import { useDateContext } from "../../Contexts/DateContext";
import { getMonthDays, getMonthList, getNextYears } from "../../Utils/days";
import calendar from "../../Assets/Texts/calendar"
import { CheckContainer, Container, DayContainer, StyledCheckbox, StyledInput, StyledLabel, StyledSelectInput } from "./style";


export const DateInput = ({ id, title}) => {
  const {selectedDate, setSelectedDate, currentDate} = useDateContext();

  const yearList = getNextYears(currentDate, 3);
  const monthList = getMonthList(selectedDate, currentDate)
  const dayList = getMonthDays(selectedDate, currentDate);

  return (<Container>
    <StyledLabel htmlFor={id}>{title}</StyledLabel>
    <DayContainer>

    <StyledSelectInput name={`${id}-year`} id={`${id}-year`} value={selectedDate.getFullYear()} onChange={(e) => setSelectedDate(new Date(e.target.value, selectedDate.getMonth(), selectedDate.getDate()))}>
      {yearList.map((y, index) => (<option value={y} key={index}>{y}</option>))}
    </StyledSelectInput>
    <StyledSelectInput name={`${id}-month`} id={`${id}-month`} value={selectedDate.getMonth()} onChange={(e) => setSelectedDate(new Date(selectedDate.getFullYear(), e.target.value, selectedDate.getDate()))}>
      {monthList.map((m, index) => (<option value={m} key={index}>{calendar.monthList[m]}</option>))}
    </StyledSelectInput>
    <StyledSelectInput name={`${id}-day`} id={`${id}-day`} value={selectedDate.getDate()} onChange={(e) => setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth(), e.target.value))}>
      {dayList.map((d, index) => (<option value={d} key={index}>{d}</option>))}
    </StyledSelectInput>
    </DayContainer>
  </Container>)
}

// export const DateInput = ({ id, title }) => {
//   const {selectedDate, setSelectedDate} = useDateContext();
//   return (
//     <Container>
//       <StyledLabel htmlFor={id}>{title}</StyledLabel>
//       <StyledInput
//         type="date"
//         name={id}
//         id={id}
//         value={toStringDate(selectedDate)}
//         onChange={(e) => setSelectedDate(new Date(e.target.value))}
//       />
//     </Container>
//   );
// };

export const TextInput = ({ id, title, onChange, value }) => {
  return (
    <Container>
      <StyledLabel htmlFor={id}>{title}</StyledLabel>
      <StyledInput
        type="text"
        id={id}
        onChange={onChange}
        value={value}
        required
      />
    </Container>
  );
};

export const SelectInput = ( {id, title, value, onChange, children}) => {
  return (
    <Container>
      <StyledLabel htmlFor={id}>{title}</StyledLabel>
      <StyledSelectInput
        name={id}
        id={id}
        value={value}
        onChange={onChange}
      >
        {children}
      </StyledSelectInput>
    </Container>
  );
};

export const Checkbox = ({ id, title, checked, onChange }) => {
  return (
    <CheckContainer>
      <StyledLabel htmlFor={id}>{title}</StyledLabel>
      <StyledCheckbox
        type="checkbox"
        name={id}
        id={id}
        checked={checked}
        onChange={onChange}
      />
    </CheckContainer>
  );
};