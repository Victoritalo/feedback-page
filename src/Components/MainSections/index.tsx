import {
  SectionContainer,
  ImageStyle,
  StyleTitle,
  TextContainer,
  SectionContainerProps,
} from "./style";

interface SectionProps {
  title: string;
  textcontent: string;
  imageLink: string;
  id: string;
  bg: SectionContainerProps;
}

export function Section(props: SectionProps) {
  return (
    <SectionContainer id={props.id} backgroundColor={props.bg.backgroundColor}>
      <TextContainer>
        <StyleTitle>{props.title}</StyleTitle>
        <p>{props.textcontent}</p>
      </TextContainer>
      <ImageStyle src={props.imageLink} alt="Section image" />
    </SectionContainer>
  );
}
