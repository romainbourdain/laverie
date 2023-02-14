import styled from "styled-components";

export const BoxContainer = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  /* min-width: 100vw; */
  /* min-height: 100vh; */
  padding: 10px;
`;

export const StyledBox = styled.div`
  background-color: ${(props) => props.theme.colors.boxBackground};
  border-radius: 10px;
  overflow: hidden;
  width: 80vw;
`;
