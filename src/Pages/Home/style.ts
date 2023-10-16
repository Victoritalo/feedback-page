import styled from "styled-components";
const imageLink =
  "https://img.freepik.com/fotos-gratis/um-grupo-de-pessoas-internacionais-warking-com-laptop_613910-16750.jpg?w=996&t=st=1697345587~exp=1697346187~hmac=e2bd65169edbb885c0ff223efad906ae28bc464f65da0627422dd0f0673fc921";

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
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 30rem;
  width: 100%;
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
  width: 50%;
`;

export const TitleStyle = styled.h2`
  font-size: 28px;
  font-weight: bold;
`;
