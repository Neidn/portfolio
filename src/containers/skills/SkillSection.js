import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import { skills } from "../../portfolio";
import { Fade } from "react-reveal";
import DataScienceImg from "./DataScienceImg";
import FullStackImg from "./FullStackImg";
import CloudInfraImg from "./CloudInfraImg";
import DesignImg from "./DesignImg";
import styles from "./Skills.module.css";
import OnPremInfraImg from "./OnPremInfraImg";

const GetSkillSvg = (props) => {
  if (props.fileName === "DataScienceImg") {
    return <DataScienceImg theme={props.theme} />;
  } else if (props.fileName === "FullStackImg") {
    return <FullStackImg theme={props.theme} />;
  } else if (props.fileName === "OnPremInfraImg") {
    return <OnPremInfraImg theme={props.theme} />;
  } else if (props.fileName === "CloudInfraImg") {
    return <CloudInfraImg theme={props.theme} />;
  }
  return <DesignImg theme={props.theme} />;
};

const SkillSection = (props) => {
  const theme = props.theme;
  return (
    <>
      {skills.data.map((skill) => {
        return (
          <div className={styles["skills-main-div"]}>
            <Fade left duration={2000}>
              <div className={styles["skills-image-div"]}>
                <GetSkillSvg fileName={skill.fileName} theme={theme} />
              </div>
            </Fade>

            <div className={styles["skills-text-div"]}>
              <Fade right duration={1000}>
                <h1
                  className={styles["skills-heading"]}
                  style={{ color: theme.text }}
                >
                  {skill.title}
                </h1>
              </Fade>
              <Fade right duration={1500}>
                <SoftwareSkill logos={skill.softwareSkills} />
              </Fade>
              <Fade right duration={2000}>
                <div>
                  {skill.skills.map((skillSentence) => {
                    return (
                      <p
                        className={`subTitle ${styles["skills-text"]}`}
                        style={{ color: theme.secondaryText }}
                      >
                        {skillSentence}
                      </p>
                    );
                  })}
                </div>
              </Fade>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default SkillSection;
