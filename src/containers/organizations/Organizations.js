import { Fade } from "react-reveal";
import OrganizationList from "../../components/organizationList/OrganizationList";
import OrganizationsData from "../../shared/opensource/organizations.json";
import styles from "./Organizations.module.css";

const Organizations = props => {
  const theme = props.theme;
  return (
    <div id="organizations">
      <div className={styles["organizations-header-div"]}>
        <Fade bottom duration={2000} distance="20px">
          <h1 className={styles["organizations-header"]} style={{ color: theme.text }}>
            Contributed Organizations
          </h1>
        </Fade>
      </div>
      <OrganizationList logos={OrganizationsData["data"]} />
    </div>
  );
};

export default Organizations;
