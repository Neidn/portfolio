import styles from "./CompetitiveSites.module.css";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

const popover = (siteName) => {
  return <Tooltip id={`tooltip-top`}>
    <strong>{siteName}</strong>
  </Tooltip>;
}

const CompetitiveSites = (props) => (
  <div className={styles["competitive-sites-main-div"]}>
    <ul className={styles["dev-icons"]}>
      {props.logos.map((logo) => {
        return (
          <OverlayTrigger
            key={logo.siteName}
            placement={"top"}
            style={{ marginBottom: "5px" }}
            overlay={popover(logo.siteName)}
            trigger={["hover"]}
          >
            <li
              className={styles["competitive-sites-inline"]}
              name={logo.siteName}
            >
              <a
                href={logo.profileLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span
                  className="iconify"
                  data-icon={logo.iconifyClassname}
                  style={logo.style}
                  data-inline="false"
                ></span>
              </a>
            </li>
          </OverlayTrigger>
        );
      })}
    </ul>
  </div>
);

export default CompetitiveSites;
