import styled from "styled-components";

export const PopupContainer = styled.div`
  position: absolute;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: ${(props) =>
    props.display === "true" ? "rgba(0, 0, 0, 0.7)" : "transparant"};
  visibility: ${(props) => (props.display === "true" ? "visible" : "hidden")};
  transition: 0.2s ease;
`;

export const PopupWindow = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  width: 50vw;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  padding: 50px;
  transform: ${(props) => (props.display === "true" ? "scale(1)" : "scale(0)")};
  transition: 0.2s ease;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 30px;
`;

export const FlexContainer = styled.div`
  display: flex;
  gap: 30px;
  width: 100%;
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
