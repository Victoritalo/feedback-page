import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import medal from "../../assets/images/medal.png";
import {
  IconContainer,
  ProfileAvatar,
  Card,
  TitleCard,
  UlStyle,
  ListStyle,
} from "./style";

interface Personprops {
  name: string;
  photo: string;
  skills: string[];
  githubLink: string;
  linkedinLink: string;
}

export default function CreateCards(props: Personprops) {
  return (
    <>
      <Card>
        <TitleCard> {props.name}</TitleCard>
        <ProfileAvatar src={props.photo} alt="avatar" />
        <UlStyle>
          {props.skills.map((skill, index) => (
            <ListStyle key={index}>
              <img src={medal} alt="" />
              <div style={{ width: "60%" }}>{skill}</div>
            </ListStyle>
          ))}
        </UlStyle>
        <IconContainer>
          <a href={props.githubLink} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            href={props.linkedinLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </IconContainer>
      </Card>
    </>
  );
}
