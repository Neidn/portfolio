import SkillSection from "./SkillSection";
import { Fade } from "react-reveal";
import styles from "./Skills.module.css";

const Skills = (props) => {
  const theme = props.theme;
  return (
    <div className="main" id="skills">
      <div className={styles["skills-header-div"]}>
        <Fade bottom duration={2000} distance="20px">
          <h1 className={styles["skills-header"]} style={{ color: theme.text }}>
            What I Do?
          </h1>
        </Fade>
      </div>
      <SkillSection theme={theme} />
    </div>
  );
};
export default Skills;
