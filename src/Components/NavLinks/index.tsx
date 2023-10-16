import { NavContainer, AnchorStyle } from "./style";
interface NavLinksProps {
  anchorName: string;
  link: string;
}

export function NavLinks(props: NavLinksProps) {
  return (
    <NavContainer>
        <li>
          <AnchorStyle href={props.link} target="_blank" rel="noopener noreferrer">
            <p>{props.anchorName}</p>
          </AnchorStyle>
        </li>
    </NavContainer>
  );
}
