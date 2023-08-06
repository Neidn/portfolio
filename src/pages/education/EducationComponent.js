import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import Educations from "../../containers/education/Educations";
import Certifications from "../../containers/certifications/Certifications";
import CompetitiveSites from "../../components/competitiveSites/CompetitiveSites";
import EducationImg from "./EducationImg";
import { certifications, competitiveSites } from "../../portfolio";
import styles from "./EducationComponent.module.css";
import { Fade } from "react-reveal";

import { experience } from "../../portfolio.js";

const Education = (props) => {
  const theme = props.theme;
  return (
    <div className={styles["education-main"]}>
      <Header theme={theme} />
      <div className={styles["basic-education"]}>
        <Fade bottom duration={2000} distance="40px">
          <div className={styles["heading-div"]}>
            <div className={styles["heading-img-div"]}>
              {/* <img
									src={require("../../assests/images/education.svg")}
									alt=""
								/> */}
              <EducationImg theme={theme} />
            </div>
            <div className={styles["heading-text-div"]}>
              <h1
                className={styles["heading-text"]}
                style={{ color: theme.text }}
              >
                Education
              </h1>
              <h3
                className={styles["heading-sub-text"]}
                style={{ color: theme.text }}
              >
                Basic Qualification and Certifications
              </h3>
              {/*<CompetitiveSites logos={competitiveSites.competitiveSites} />*/}
            </div>
          </div>
        </Fade>
        <Educations theme={props.theme} />
        {certifications.certifications.length > 0 ? (
          <Certifications theme={props.theme} />
        ) : null}
      </div>
      <Footer theme={props.theme} />
      <TopButton theme={props.theme} />
    </div>
  );
};

export default Education;
