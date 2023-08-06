import { Fade } from "react-reveal";
import styles from "./CertificationCard.module.css";

const CertificationCard = (props) => {
  const certificate = props.certificate;
  const theme = props.theme;
  return (
    <Fade bottom duration={2000} distance="20px">
      <div className={styles['cert-card']}>
        <div className={styles['content']}>
          <a
            href={certificate.certificate_link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className={styles['content-overlay']}></div>
            <div
              className={styles['cert-header']}
              style={{ backgroundColor: certificate.color_code }}
            >
              <img
                className={styles['logo_img']}
                src={require(`../../assests/images/${certificate.logo_path}`)}
                alt={certificate.alt_name}
              />
            </div>
            <div className={`${styles['content-details']} ${styles['fade-in-top']}`}>
              <h3 className={"content-title"} style={{ color: theme.body }}>
                Certificate
              </h3>
            </div>
          </a>
        </div>
        <div className={styles['cert-body']}>
          <h2 className={styles['cert-body-title']} style={{ color: theme.text }}>
            {certificate.title}
          </h2>
          <h3
            className={styles['cert-body-subtitle']}
            style={{ color: theme.secondaryText }}
          >
            {certificate.subtitle}
          </h3>
        </div>
      </div>
    </Fade>
  );
};

export default CertificationCard;
