import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import ExperienceAccordion from "../../containers/experienceAccordion/ExperienceAccordion.js";
import { experience } from "../../portfolio.js";
import { Fade } from "react-reveal";
import ExperienceImg from "./ExperienceImg";
import styles from "./Experience.module.css";

const Experience = (props) => {
  const theme = props.theme;
  return (
    <div className={styles["experience-main"]}>
      <Header theme={theme} />
      <div className={styles["basic-experience"]}>
        <Fade bottom duration={2000} distance="40px">
          <div className={styles["experience-heading-div"]}>
            <div className={styles["experience-heading-img-div"]}>
              {/* <img
									src={require(`../../assests/images/${experience["header_image_path"]}`)}
									alt=""
								/> */}
              <ExperienceImg theme={theme} />
            </div>
            <div className={styles["experience-heading-text-div"]}>
              <h1
                className={styles["experience-heading-text"]}
                style={{ color: theme.text }}
              >
                {experience.title}
              </h1>
              <h3
                className={styles["experience-heading-sub-text"]}
                style={{ color: theme.text }}
              >
                {experience["subtitle"]}
              </h3>
              <p
                className={`${styles["experience-header-detail-text"]} subTitle`}
                style={{ color: theme.secondaryText }}
              >
                {experience["description"]}
              </p>
            </div>
          </div>
        </Fade>
      </div>
      <ExperienceAccordion sections={experience["sections"]} theme={theme} />
      <Footer theme={props.theme} onToggle={props.onToggle} />
      <TopButton theme={props.theme} />
    </div>
  );
};

export default Experience;
