import { Doughnut } from "react-chartjs-2";
import { Fade } from "react-reveal";
import PullRequestData from "../../shared/opensource/pull_requests.json";
import styles from "./PullRequestChart.module.css";

const PullRequestChart = () => {
  const data = {
    labels: ["Open", "Merged", "Closed"],
    datasets: [
      {
        data: [
          PullRequestData["open"],
          PullRequestData["merged"],
          PullRequestData["closed"],
        ],
        backgroundColor: ["#28a745", "#6f42c1", "#d73a49"],
        hoverBackgroundColor: ["#28a745dd", "#6f42c1dd", "#d73a49dd"],
      },
    ],
  };

  return (
    <div className={styles["pr-chart"]}>
      <Fade bottom duration={2000} distance="20px">
        <h2 className={styles["pr-chart-header"]}>Pull Request Distribution</h2>
      </Fade>
      <Doughnut
        data={data}
        options={{
          padding: "0",
          margin: "0",
          responsive: true,
          maintainAspectRatio: true,
          animation: {
            duration: 4000,
          },
        }}
      />
    </div>
  );
};

export default PullRequestChart;
