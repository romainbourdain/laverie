import React from "react";
import texts from "../../Assets/Texts";
import { StyledTitle, TitleContainer } from "./style";

const Title = () => {
  return (
    <TitleContainer>
      <StyledTitle>{texts.title}</StyledTitle>
    </TitleContainer>
  );
};

export default Title;
