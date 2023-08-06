import { Fade } from "react-reveal";
import styles from "./ExperienceCard.module.css";

const ExperienceCard = (props) => {
  const experience = props.experience;
  const index = props.index;
  const totalCards = props.totalCards;
  const theme = props.theme;
  return (
    <div
      className={styles["experience-list-item"]}
      style={{ marginTop: index === 0 ? 30 : 50 }}
    >
      <Fade left duration={2000} distance="40px">
        <div className={styles["experience-card-logo-div"]}>
          <img
            className={styles["experience-card-logo"]}
            src={require(`../../assests/images/${experience["logo_path"]}`)}
            alt=""
          />
        </div>
      </Fade>
      <div className={styles["experience-card-stepper"]}>
        <div
          style={{
            width: 20,
            height: 20,
            backgroundColor: `${theme.headerColor}`,
            borderRadius: 50,
            zIndex: 100,
          }}
        />
        {index !== totalCards - 1 && (
          <div
            style={{
              height: 190,
              width: 2,
              backgroundColor: `${theme.headerColor}`,
              position: "absolute",
              marginTop: 20,
            }}
          />
        )}
      </div>
      <Fade right duration={2000} distance="40px">
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div
            className={styles["arrow-left"]}
            style={{ borderRight: `10px solid ${theme.body}` }}
          ></div>
          <div
            className={styles["experience-card"]}
            style={{ background: `${theme.body}` }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <div>
                <h3
                  className={styles["experience-card-title"]}
                  style={{ color: theme.text }}
                >
                  {experience["title"]}
                </h3>
                <p
                  className={styles["experience-card-company"]}
                  style={{ color: theme.text }}
                >
                  <a
                    href={experience["company_url"]}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {experience["company"]}
                  </a>
                </p>
              </div>
              <div>
                <div className={styles["experience-card-heading-right"]}>
                  <p
                    className={styles["experience-card-duration"]}
                    style={{ color: theme.secondaryText }}
                  >
                    {experience["duration"]}
                  </p>
                  <p
                    className={styles["experience-card-location"]}
                    style={{ color: theme.secondaryText }}
                  >
                    {experience["location"]}
                  </p>
                </div>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-start",
                marginTop: 20,
              }}
            >
              <div className={styles["repo-description"]} />
              {experience["description"]}
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default ExperienceCard;
