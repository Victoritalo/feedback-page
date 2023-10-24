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
  position: fixed;
  top: 0;
  z-index: 1;
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
  margin-top: 60px;
  background-image: url(${imageLink});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 40rem;
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
  margin-left: 15px;
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

export const CardSection = styled.div`
  display: flex;
  justify-content: center;
  gap: 1em;
  flex-wrap: wrap;
  padding: 20px;
  background-color: #2b385b;
  padding-bottom: 50px;
  padding-top: 50px;
`;

export const Footer = styled.p`
  background-color: #ffffff;
  color: #696969;
  padding: 20px;
  text-align: center;
  font-weight: bold;
  font-family: "Poppins", sans-serif;
  font-size: small;
`;
