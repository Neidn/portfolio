import { Fade } from "react-reveal";
import PullRequestCard from "../../components/pullRequestCard/PullRequestCard";
import pullRequestsData from "../../shared/opensource/pull_requests.json";
import styles from "./PullRequests.module.css";

const PullRequests = props => {
  const theme = props.theme;
  return (
    <div>
      <div className={styles["pull-requests-header-div"]}>
        <Fade bottom duration={2000} distance="20px">
          <h1
            className={styles["pull-requests-header"]}
            style={{ color: theme.text }}
          >
            Pull Requests
          </h1>
        </Fade>
      </div>
      <div className={styles["pull-request-body-div"]}>
        {pullRequestsData["data"].map((pullRequest) => {
          return <PullRequestCard pullRequest={pullRequest} />;
        })}
      </div>
    </div>
  );
};

export default PullRequests;
