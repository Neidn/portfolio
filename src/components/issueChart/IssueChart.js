import { Doughnut } from "react-chartjs-2";
import { Fade } from "react-reveal";
import IssueData from "../../shared/opensource/issues.json";
import styles from "./IssueChart.module.css";

const IssueChart = () => {
  const data = {
    labels: ["Open", "Closed"],
    datasets: [
      {
        data: [IssueData["open"], IssueData["closed"]],
        backgroundColor: ["#28a745", "#d73a49"],
        hoverBackgroundColor: ["#28a745dd", "#d73a49dd"],
      },
    ],
  };

  return (
    <div className={styles["issue-chart"]}>
      <Fade bottom duration={2000} distance="20px">
        <h2 className={styles["issue-chart-header"]}>Issue Distribution</h2>
      </Fade>
      <Doughnut
        data={data}
        options={{
          margin: "0",
          padding: "0",
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

export default IssueChart;
