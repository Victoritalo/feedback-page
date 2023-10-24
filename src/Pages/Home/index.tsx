import {
  LogoStyle,
  HeaderStyle,
  UnorderedList,
  Wrapper,
  ContentContainer,
  ContainerText,
  TitleStyle,
  StyledP,
  AnchorButtonDiv,
  Footer,
  CardSection,
} from "./style";

import { NavLinks } from "../../Components/NavLinks";
import logo from "../../assets/images/alunosgrow.png";
import { AnchorButton } from "../../Components/Button";
import { students } from "../../database/Students";
import CreateCards from "../../Components/CreateCards";
import { Section } from "../../Components/MainSections";

export function Home() {
  return (
    <>
      <HeaderStyle>
        <a href="#" rel="noopener noreferrer">
          <LogoStyle src={logo} alt="logo image" />
        </a>
        <UnorderedList>
          <NavLinks anchorName={"Sobre"} link={"#sobre"} />
          <NavLinks anchorName={"Mentor"} link={"#mentor"} />
          <NavLinks anchorName={"Feedback"} link={"#feedback"} />
        </UnorderedList>
      </HeaderStyle>
      <Wrapper>
        <ContentContainer>
          <ContainerText>
            <TitleStyle>
              Bem vindo ao <br></br>{" "}
              <span style={{ color: "#FF8533", fontSize: "35px" }}>
                Feedback
              </span>{" "}
              Grow
            </TitleStyle>
            <StyledP style={{ marginTop: "20px" }}>
              É importante que o feedback seja claro, específico, construtivo e
              objetivo, de modo a ser eficaz e benéfico para quem o recebe.
              Receber feedback de maneira aberta e receptiva também é
              fundamental para o crescimento e o desenvolvimento pessoal e
              profissional.
            </StyledP>
            <AnchorButtonDiv>
              <AnchorButton
                text={"Feedback disponíveis"}
                url={"#feedback"}
                tagColors={{ backgroundColor: "#FF8533", color: "#2b385b" }}
              />
            </AnchorButtonDiv>
          </ContainerText>
        </ContentContainer>
      </Wrapper>
      <main>
        <Section
          title={"Sobre o projeto"}
          textcontent={
            "No contexto do projeto atual e seus colaboradores, nosso objetivo é destacar as qualidades notáveis de nossa equipe, incluindo habilidades de comunicação, comprometimento, criatividade e colaboração, que contribuem para o sucesso do projeto."
          }
          imageLink={
            "https://img.freepik.com/fotos-gratis/trabalhadores-de-escritorio-trabalhando-juntos-como-uma-equipe_23-2149310888.jpg"
          }
          id={"sobre"}
          bg={{ backgroundColor: "#fffff" }}
        />
        <Section
          title={"Carolina Di Lorenzo"}
          textcontent={
            "Psicóloga, Mentora de Carreira e Empreendedora Social. Atualmente, ela atua como mentora de carreira e orientadora profissional. Nos últimos anos, direcionou seu olhar, pensamentos e estudos para auxiliar pessoas em seus processos de carreira. Essa mudança de foco permitiu a ela abraçar uma missão gratificante: ajudar indivíduos a trilharem caminhos profissionais mais satisfatórios e bem-sucedidos."
          }
          imageLink={
            "https://media.licdn.com/dms/image/D4D22AQHjRhr8q6oiIg/feedshare-shrink_800/0/1689627071804?e=1701302400&v=beta&t=zJ5yqkWPC4fm42PDjCpAPL-MeAUGSJTdvD_7xnBOOOk"
          }
          id={"mentor"}
          bg={{ backgroundColor: "#E7E9EB" }}
        />
        <CardSection id="feedback">
          {students.map((person, index) => (
            <div key={index}>
              <CreateCards {...person}></CreateCards>
            </div>
          ))}
        </CardSection>
      </main>
      <Footer>
        <p>© 2023 AlunosGrow. Todos os direitos reservados.</p>
        <p>Contato: alunosgrow@growdev.com</p>
      </Footer>
    </>
  );
}
