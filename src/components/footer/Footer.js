import styles from "./Footer.module.css";
import { Fade } from "react-reveal";
import { greeting } from "../../portfolio.js";
/* eslint-disable jsx-a11y/accessible-emoji */

const Footer = (props) => (
  <div className={styles["footer-div"]}>
    <Fade>
      <p className={styles["footer-text"]} style={{ color: props.theme.secondaryText }}>
        Made with <span role="img">❤️</span> by {greeting.title}
      </p>
      {/* <ToggleSwitch theme={props.theme} onToggle={props.onToggle}/> */}
    </Fade>
  </div>
);

export default Footer;
