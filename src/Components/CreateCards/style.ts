import styled from "styled-components";

export const Card = styled.div`
  text-align: center;
  font-family: "Poppins", sans-serif;
  /* font-size: 10px; */

  width: 20em;
  min-height: 25em;
  display: flex;
  gap: 0.4em;
  flex-direction: column;
  justify-content: center;
  padding: 1em 2em;
  border-radius: 1em;
  background: #ff8533;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  color: #2b385b;
  padding: 20px;
`;

export const IconContainer = styled.div`
  display: flex;
  gap: 1em;
  justify-content: center;
  a {
    text-decoration: none;
    color: #2b385b;
    transition: color 0.3s;

    &:hover {
      color: #333;
    }

    svg {
      font-size: 30px;
    }
  }
`;

export const ProfileAvatar = styled.img`
  width: 8em;
  height: 8em;
  border: 2px solid #cccccc;
  border-radius: 50%;
  margin: auto;
`;

export const TitleCard = styled.h2`
  font-size: 20px;
  text-align: center;
  font-weight: bold;
  margin: 20px 20px;
`;

export const UlStyle = styled.ul`
  list-style: none;
  padding: 0;
`;
import medal from "../../assets/images/medal.png";
export const ListStyle = styled.li`
  font-weight: 500;
  padding-top: 10px;
  text-align: left;
  display: flex;
  justify-content: space-around;
  /* &::before {
    content: "";
    background-image: url(${medal});
    width: 25px;
    height: 25px;
    display: inline-block;
    vertical-align: middle;
    margin-right: 20px;
  } */
`;

export const StyledMedal = styled.img``;
