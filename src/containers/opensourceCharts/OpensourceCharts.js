import PullRequestChart from "../../components/pullRequestChart/PullRequestChart.js";
import IssueChart from "../../components/issueChart/IssueChart.js";
import { Fade } from "react-reveal";
import styles from "./OpensourceCharts.module.css";

const OpensourceCharts = (props) => {
  const theme = props.theme;
  return (
    <div className={styles["main-div"]}>
      <div className={styles["os-charts-header-div"]}>
        <Fade bottom duration={2000} distance="20px">
          <h1
            className={styles["os-charts-header"]}
            style={{ color: theme.text }}
          >
            Contributions
          </h1>
        </Fade>
      </div>
      <div className={styles["os-charts-body-div"]}>
        <PullRequestChart />
        <IssueChart />
      </div>
    </div>
  );
};

export default OpensourceCharts;
