import styled from "styled-components";

export interface StyleProps {
  color: string;
  backgroundColor: string;
}

export const ButtonStyle = styled.a<StyleProps>`
  color: ${(props) => props.color};
  background-color: ${(props) => props.backgroundColor};
  padding: 10px;
  text-decoration: none;
  /* font-weight: bold; */
`;
