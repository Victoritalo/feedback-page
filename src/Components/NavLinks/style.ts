import styled from "styled-components";

export const NavContainer = styled.nav`
  font-weight: bold;
  font-family: "Poppins", sans-serif;
  font-size: 18px;
`;

export const AnchorStyle = styled.a`
  display: flex;
  color: #212a42;
  padding: 15px;
  text-decoration: none;
  transition: all 0.1s ease-in-out;
  &:hover {
    transform: scale(1.02);
  }
`;
