import React from "react";
import { BoxContainer, StyledBox } from "./style";

const Box = ({ children }) => {
  return (
    <BoxContainer>
      <StyledBox>{children}</StyledBox>
    </BoxContainer>
  );
};

export default Box;
