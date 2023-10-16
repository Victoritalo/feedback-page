import {
  LogoStyle,
  HeaderStyle,
  UnorderedList,
  Wrapper,
  ContentContainer,
  ContainerText,
  TitleStyle,
} from "./style";
import { NavLinks } from "../../Components/NavLinks";
import logo from "../../assets/images/alunosgrow.png";
// import contentImage from "../../assets/images/pngegg.png"
export function Home() {
  return (
    <>
      <HeaderStyle>
        <a href="#" rel="noopener noreferrer">
          <LogoStyle src={logo} alt="logo image" />
        </a>
        <UnorderedList>
          <NavLinks anchorName={"About"} link={"#"} />
          <NavLinks anchorName={"Feedback"} link={"#"} />
          <NavLinks anchorName={"Growdev"} link={"#"} />
        </UnorderedList>
      </HeaderStyle>
      <Wrapper>
        <ContentContainer>
          <ContainerText>
            <TitleStyle>
              Bem vindo ao <br></br>Feedback Grow
            </TitleStyle>
            <p style={{ marginTop: "20px" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga,
              placeat fugit, cupiditate porro reiciendis earum, cum doloribus
              asperiores id dicta libero? Vero vel eos molestias doloribus
              aperiam ullam veniam aliquam?
            </p>
            <a href="#">Use as a "button"</a>
          </ContainerText>
        </ContentContainer>
      </Wrapper>
    </>
  );
}
