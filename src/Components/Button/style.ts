import styled from "styled-components";

export interface StyleProps {
  color: string;
  backgroundColor: string;
}

export const ButtonStyle = styled.a<StyleProps>`
  color: ${(props) => props.color};
  background-color: ${(props) => props.backgroundColor};
  padding: 15px;
  font-family: "Rubik", sans-serif;
  text-transform: uppercase;
  text-decoration: none;
  font-weight: bold;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 10px;
`;
