import styled from "styled-components";

export const Button = styled.button`
  background-color: transparent;
  border: 1px solid ${(props) => props.theme.colors.border};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border-radius: 5px;
  padding: 10px 15px;
  height: 50px;
  font-size: 1.1rem;
  color: ${(props) => props.theme.colors.text};
  font-weight: 500;
  transition: 0.2s ease;
  cursor: pointer;
  outline: none;

  &:hover {
    background-color: ${(props) => props.theme.colors.buttonSelected};
  }
`;

export const PrimaryButton = styled(Button)`
  background-color: ${(props) => props.theme.colors.main};
  color: white;
  border: none;
  &:hover {
    background-color: ${(props) => props.theme.colors.mainSelected};
  }
`;

export const TransparentButton = styled(Button)`
  border-color: transparent;
  width: 50px;
  border-radius: 50px;
`;
