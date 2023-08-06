import { OverlayTrigger, Tooltip } from "react-bootstrap";
import styles from "./SoftwareSkill.module.css";

const popover = (skillName) => (
  <Tooltip id={`tooltip-top`}>
    <strong>{skillName}</strong>
  </Tooltip>
);
const SoftwareSkill = (props) => (
  <div>
    <div className="software-skills-main-div">
      <ul className="dev-icons">
        {/* {skillsSection.softwareSkills.map(skills => {
            return (
              <li className="software-skill-inline" name={skills.skillName}>
                <i className={skills.fontAwesomeClassname}></i>
              </li>
            );
          })} */}
        {props.logos.map((logo) => {
          return (
            <OverlayTrigger
              key={logo.skillName}
              placement={"top"}
              overlay={popover(logo.skillName)}
            >
              <li
                className={styles["software-skill-inline"]}
                name={logo.skillName}
              >
                {logo.fontAwesomeClassname && (
                  <span
                    className={"iconify " + styles["skill-icon"]}
                    data-icon={logo.fontAwesomeClassname}
                    style={logo.style}
                    data-inline="false"
                  ></span>
                )}
                {!logo.fontAwesomeClassname && logo.imageSrc && (
                  <img
                    className={styles["skill-image"]}
                    style={logo.style}
                    src={`${process.env.PUBLIC_URL}/skills/${logo.imageSrc}`}
                    alt={logo.skillName}
                  />
                )}
              </li>
            </OverlayTrigger>
          );
        })}
      </ul>
    </div>
  </div>
);

export default SoftwareSkill;
