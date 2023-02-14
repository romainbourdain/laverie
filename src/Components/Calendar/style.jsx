import styled from "styled-components";

export const StyledCalendar = styled.div`
display: grid;
width: 100%;
`;

export const Week = styled.div`
display: grid;
grid-template-columns: repeat(7, 1fr);
height: calc(80vh / 6);
`;

// Day style

export const StyledDay = styled.div`
  border: 1px solid ${(props) => props.theme.colors.calendarBorder};
  color: ${(props) => props.theme.colors.text};
  text-align: center;
  line-height: 1.5rem;
  padding: 0.5rem;
`;

export const StyledDayName = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bolder;
  word-wrap: break-word;
`;

export const StyledDayNumberContainer = styled.div.attrs((props) => ({
  currentDay: props.currentDay,
  currentMonth: props.currentMonth,
}))`
  display: inline-block;
  width: 30px;
  height: 30px;
  background: ${(props) => (props.currentDay ? props.theme.colors.main : "")};
  border-radius: 100%;
  opacity: ${(props) => (props.currentMonth ? 1 : "0.2")};
  cursor: pointer;
  transition: 0.2s ease;

  &:hover {
    background: ${(props) =>
      props.currentDay
        ? props.theme.colors.mainSelected
        : props.theme.colors.buttonSelected};
  }

  p {
    color: ${(props) =>
      props.currentDay ? props.theme.colors.textSelected : ""};
  }
`;

export const StyledDayNumber = styled.p`
  display: inline-block;
  text-align: center;
  white-space: nowrap;
  line-height: 30px;
  width: max-content;
`;