import { StyleProps, ButtonStyle } from "./style";

interface ButtonProps {
  text: string;
  url: string;
  tagColors: StyleProps;
}

export function AnchorButton(props: ButtonProps) {
  return (
    <ButtonStyle
      href={props.url}
      backgroundColor={props.tagColors.backgroundColor}
      color={props.tagColors.color}
    >
      {props.text}
    </ButtonStyle>
  );
}
