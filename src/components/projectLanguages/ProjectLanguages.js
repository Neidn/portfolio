import { OverlayTrigger, Tooltip } from "react-bootstrap";
import styles from "./ProjectLanguages.module.css";

const popover = (name) => (
  <Tooltip id={`tooltip-top`}>
    <strong>{name}</strong>
  </Tooltip>
);

const ProjectLanguages = (props) => {
  return (
    <div>
      <div className={styles["software-skills-main-div"]}>
        <ul className={styles["dev-icons-languages"]}>
          {props.logos.map((logo) => {
            return (
              <OverlayTrigger
                key={logo.name}
                placement="top"
                overlay={popover(logo.name)}
              >
                <li
                  className={styles["software-skill-inline-languages"]}
                  name={logo.skillName}
                >
                  <span
                    className={"iconify"}
                    data-icon={logo.iconifyClass}
                    data-inline="false"
                  ></span>
                </li>
              </OverlayTrigger>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ProjectLanguages;
