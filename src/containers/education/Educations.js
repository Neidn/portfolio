import DegreeCard from "../../components/degreeCard/DegreeCard.js";
import { degrees } from "../../portfolio";
import { Fade } from "react-reveal";
import styles from "./Educations.module.css";

const Educations = (props) => {
  const theme = props.theme;
  return (
    <div id="educations">
      <div className={styles["educations-header-div"]}>
        <Fade bottom duration={2000} distance="20px">
          <h1
            className={styles["educations-header"]}
            style={{ color: theme.text }}
          >
            Degrees Received
          </h1>
        </Fade>
      </div>
      <div className={styles["educations-body-div"]}>
        {degrees.degrees.map((degree) => {
          return <DegreeCard degree={degree} theme={theme} />;
        })}
      </div>
    </div>
  );
};

export default Educations;
