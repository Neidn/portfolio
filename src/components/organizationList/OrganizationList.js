import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { Fade } from "react-reveal";
import styles from "./OrganizationList.module.css";

const popover = (login) => (
  <Tooltip id={`tooltip-top`}>
    <strong>{login}</strong>
  </Tooltip>
);

const OrganizationList = (props) => (
  <div className={styles["organizations-main-div"]}>
    <ul className={styles["dev-icons-orgs"]}>
      {props.logos.map((logo) => {
        return (
          <OverlayTrigger
            key={logo["login"]}
            placement={"top"}
            style={{ marginBottom: "5px" }}
            overlay={popover(logo["login"])}
          >
            <li className={styles["organizations-inline"]} name={logo["login"]}>
              <Fade bottom duration={2000} distance="40px">
                <img
                  className={styles["organizations-img"]}
                  src={logo["avatarUrl"]}
                  alt={logo["login"]}
                />
              </Fade>
            </li>
          </OverlayTrigger>
        );
      })}
    </ul>
  </div>
);

export default OrganizationList;
