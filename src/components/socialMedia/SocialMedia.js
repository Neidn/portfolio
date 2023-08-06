import { socialMediaLinks } from "../../portfolio";
import styled from "styled-components";
import styles from "./SocialMedia.module.css";

const IconWrapper = styled.span`
  i {
    background-color: ${(props) => props.backgroundColor};
  }

  &:hover i {
    background-color: ${({ theme }) => theme.text};
    transition: 0.3s ease-in;
  }
`;

const socialMedia = (props) => (
  <div className={styles["social-media-div"]}>
    {socialMediaLinks.map((media) => {
      return (
        <a
          href={media.link}
          className={styles["icon-button"]}
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconWrapper {...media} {...props}>
            <i className={`fab ${media.fontAwesomeIcon}`}></i>
          </IconWrapper>
          {/* <span></span> */}
        </a>
      );
    })}
  </div>
);

export default socialMedia;
