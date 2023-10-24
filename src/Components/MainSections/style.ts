import styled from "styled-components";

export interface SectionContainerProps {
  backgroundColor: string;
}
export const SectionContainer = styled.section<SectionContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem;
  background-color: ${(props) => props.backgroundColor};
  font-family: "Rubik", sans-serif;
  font-size: 18px;
  color: #2b385b;
`;

export const ImageStyle = styled.img`
  width: 600px;
`;

export const StyleTitle = styled.h2`
  font-size: 35px;
  margin-bottom: 3rem;
  text-transform: uppercase;
  font-weight: bold;
`;

export const TextContainer = styled.div`
  letter-spacing: 1px;
  margin-right: 15px;
  width: 45%;
`;
