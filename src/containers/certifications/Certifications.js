import styles from "./Certifications.module.css";
import { Fade } from "react-reveal";
import { certifications } from "../../portfolio";
import CertificationCard from "../../components/certificationCard/CertificationCard";

const Certifications = (props) => {
  const theme = props.theme;
  return (
    <div id="certs">
      <div className={styles["certs-header-div"]}>
        <Fade bottom duration={2000} distance="20px">
          <h1 className={styles["certs-header"]} style={{ color: theme.text }}>
            Certifications
          </h1>
        </Fade>
      </div>
      <div className={styles["certs-body-div"]}>
        {certifications.certifications.map((cert) => {
          return <CertificationCard certificate={cert} theme={theme} />;
        })}
      </div>
    </div>
  );
};

export default Certifications;
