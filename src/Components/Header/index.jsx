import React from "react";
import { Button, PrimaryButton, TransparentButton } from "../Button";
import { useDisplayContext } from "../../Contexts/DisplayContext";
import { useDateContext } from "../../Contexts/DateContext";
import texts from "../../Assets/Texts";
import icons from "../../Assets/Icons";
import {
  ButtonContainer,
  Container,
  DateName,
  StyledHeader,
  Toolbar,
} from "./style";

const Header = () => {
  const { setPopup } = useDisplayContext();
  const { currentDate, selectedDate, setSelectedDate } = useDateContext();

  const previewsMonth = () => {
    setSelectedDate(
      (prevSelectedDate) =>
        new Date(
          prevSelectedDate.getFullYear(),
          prevSelectedDate.getMonth() - 1,
          1
        )
    );
  };
  const nextMonth = () => {
    setSelectedDate(
      (prevSelectedDate) =>
        new Date(
          prevSelectedDate.getFullYear(),
          prevSelectedDate.getMonth() + 1,
          1
        )
    );
  };

  const resetDate = () => {
    setSelectedDate(new Date(currentDate));
  };

  return (
    <Container>
      <StyledHeader>
        <ButtonContainer>
          <Button onClick={resetDate}>{texts.header.todayBtn}</Button>
          <TransparentButton onClick={previewsMonth}>
            {icons.buttonPrev}
          </TransparentButton>
          <TransparentButton onClick={nextMonth}>
            {icons.buttonNext}
          </TransparentButton>
        </ButtonContainer>
        <DateName>
          {texts.calendar.monthList[selectedDate.getMonth()]}{" "}
          {selectedDate.getFullYear()}
        </DateName>
      </StyledHeader>
      <Toolbar>
        <Button>
          <p>{texts.header.displayBtn}</p>
          {icons.downList}
        </Button>
        <PrimaryButton
          onClick={(e) => {
            setPopup(true);
          }}
        >
          <p>{texts.header.formBtn}</p>
          {icons.plusIcon}
        </PrimaryButton>
      </Toolbar>
    </Container>
  );
};

export default Header;
