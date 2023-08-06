import { Fade } from "react-reveal";
import IssueCard from "../../components/issueCard/IssueCard";
import issuesData from "../../shared/opensource/issues.json";
import styles from "./Issues.module.css";

const Issues = props => {
  const theme = props.theme;
  return (
    <div>
      <div className={styles["issues-header-div"]}>
        <Fade bottom duration={2000} distance="20px">
          <h1 className={styles["issues-header"]} style={{ color: theme.text }}>
            Issues
          </h1>
        </Fade>
      </div>
      <div className={styles["issues-body-div"]}>
        {issuesData["data"].map((issue) => {
          return <IssueCard issue={issue} />;
        })}
      </div>
    </div>
  );
};

export default Issues;
