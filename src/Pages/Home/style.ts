import styled from "styled-components";
const imageLink =
  "https://img.freepik.com/fotos-gratis/colegas-sorridentes-de-tiro-medio-no-trabalho_23-2149308444.jpg?w=1060&t=st=1697923579~exp=1697924179~hmac=ab00998e95688976d270928187cab3b99033ab7ebd920055293a9e427edca6aa";

export const HeaderStyle = styled.header`
  width: 100%;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
`;

export const LogoStyle = styled.img`
  width: 200px;
`;

export const UnorderedList = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 40%;
`;

export const Wrapper = styled.div`
  background-image: url(${imageLink});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 30rem;
  display: flex;
  place-items: center;
`;

export const ContentContainer = styled.div`
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  font-family: "Poppins", sans-serif;
  color: #ffffff;
  padding: 20px;
`;

export const ContainerText = styled.div`
  width: 60%;
`;

export const TitleStyle = styled.h2`
  font-size: 42px;
  font-weight: bold;
  line-height: 1em;
`;

export const StyledP = styled.p`
  line-height: 2em;
  font-weight: bold;
  text-transform: uppercase;
  max-width: 640px;
`;

export const AnchorButtonDiv = styled.div`
  margin-top: 20px;
  transition: 0.2s;
  &:hover {
    transform: translateY(-2px);
  }
`;
