import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid var(--border);
  padding: 15px 50px;
  color: ${(props) => props.theme.colors.text};
`;

export const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const DateName = styled.h1`
  font-size: 1.6rem;
  font-weight: 500;
`;

export const Toolbar = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  gap: 10px;
`;