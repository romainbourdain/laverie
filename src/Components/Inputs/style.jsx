import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 3px;
`;

export const StyledInput = styled.input`
  padding: 10px;
  border: 1px solid ${(props) => props.theme.colors.border};
  outline: none;
  border-radius: 5px;
  font-size: 1.1rem;
  color: ${(props) => props.theme.colors.text};
`;

export const StyledSelectInput = styled.select`
  padding: 10px;
  border: 1px solid ${(props) => props.theme.colors.border};
  outline: none;
  border-radius: 5px;
  font-size: 1.1rem;
  color: ${(props) => props.theme.colors.text};
`;

export const CheckContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 10px;
  align-items: center;
  justify-content: center;
`;

export const StyledCheckbox = styled.input`
  height: 20px;
  width: 20px;
  border-radius: 5px;
  border: 1px solid ${(props) => props.theme.colors.border};
  outline: none;
`;

export const StyledLabel = styled.label`
  font-size: 1.1rem;
  font-weight: 500;
  color: ${(props) => props.theme.colors.text};
`;

export const DayContainer = styled.div`
display: flex;
flex-direction: row;
align-items: center;

select {
  flex: 1;
}
`