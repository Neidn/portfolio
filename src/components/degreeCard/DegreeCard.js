import { Fade, Flip } from "react-reveal";
import styles from "./DegreeCard.module.css";

const DegreeCard = props => {
  const degree = props.degree;
  const theme = props.theme;
  return (
    <div className={styles["degree-card"]}>
      {degree.logo_path && (
        <Flip left duration={2000}>
          <div className={styles["card-img"]}>
            <img
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
                transform: "scale(0.9)",
              }}
              src={require(`../../assests/images/${degree.logo_path}`)}
              alt={degree.alt_name}
            />
          </div>
        </Flip>
      )}
      <Fade right duration={2000} distance="40px">
        <div
          className={styles["card-body"]}
          style={{ width: degree.logo_path ? "90%" : "100%" }}
        >
          <div
            className={styles["body-header"]}
            style={{ backgroundColor: theme.headerColor }}
          >
            <div className={styles["body-header-title"]}>
              <h2
                className={styles["card-title"]}
                style={{ color: theme.text }}
              >
                {degree.title}
              </h2>
              <h3
                className={styles["card-subtitle"]}
                style={{ color: theme.text }}
              >
                {degree.subtitle}
              </h3>
            </div>
            <div className={styles["body-header-duration"]}>
              <h3 className={styles["duration"]} style={{ color: theme.text }}>
                {degree.duration}
              </h3>
            </div>
          </div>
          <div className={styles["body-content"]}>
            {degree.descriptions.map((sentence) => {
              return (
                <p
                  className={styles["content-list"]}
                  style={{ color: theme.text }}
                >
                  {sentence}
                </p>
              );
            })}
            {degree.website_link && (
              <a
                href={degree.website_link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div
                  className={styles["visit-btn"]}
                  style={{ backgroundColor: theme.headerColor }}
                >
                  <p className={styles["btn"]} style={{ color: theme.text }}>
                    Visit Website
                  </p>
                </div>
              </a>
            )}
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default DegreeCard;
