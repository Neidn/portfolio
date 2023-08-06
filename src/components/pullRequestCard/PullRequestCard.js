import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { Fade } from "react-reveal";
import styles from "./PullRequestCard.module.css";

const popover = (name) => (
  <Tooltip id={`tooltip-top`}>
    <strong>{`Merged by ${name}`}</strong>
  </Tooltip>
);

const PullRequestCard = props => {
  const pullRequest = props.pullRequest;
  let iconPR;
  let bgColor;
  if (pullRequest["state"] === "OPEN") {
    iconPR = {
      iconifyClass: "octicon:git-pull-request",
      style: { color: "#28a745" },
    };
    bgColor = "#dcffe4";
  } else if (pullRequest["state"] === "MERGED") {
    iconPR = {
      iconifyClass: "octicon:git-merge",
      style: { color: "#6f42c1" },
    };
    bgColor = "#f5f0ff";
  } else {
    iconPR = {
      iconifyClass: "octicon:git-pull-request",
      style: { color: "#d73a49" },
    };
    bgColor = "#ffdce0";
  }

  const subtitleString =
    "#" +
    pullRequest["number"] +
    " opened on " +
    pullRequest["createdAt"].split("T")[0];
  let mergedBy;
  if (pullRequest["mergedBy"] !== null) {
    const name = pullRequest["mergedBy"]["login"];
    mergedBy = (
      <OverlayTrigger
        key={name}
        placement={"top"}
        style={{ marginBottom: "5px" }}
        overlay={popover(name)}
      >
        <a
          href={pullRequest["mergedBy"]["url"]}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className={styles["merge-by-img"]}
            src={pullRequest["mergedBy"]["avatarUrl"]}
            alt=""
          />
        </a>
      </OverlayTrigger>
    );
  } else {
    mergedBy = <noscript></noscript>;
  }

  return (
    <Fade bottom duration={2000} distance="40px">
      <div
        className={styles["pull-request-card"]}
        style={{
          backgroundColor: bgColor,
          border: `1px solid ${iconPR.style.color}`,
        }}
      >
        <div className={styles["pr-top"]}>
          <div className={styles["pr-header"]}>
            <span
              className={`${styles["iconify"]} ${styles["pr-icons"]}`}
              data-icon={iconPR.iconifyClass}
              style={iconPR.style}
              data-inline="false"
            ></span>
            <div className={styles["pr-title-header"]}>
              <p className={styles["pr-title"]}>
                <a
                  href={pullRequest["url"]}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {pullRequest["title"]}
                </a>
              </p>
              <p className={styles["pr-subtitle"]}>{subtitleString}</p>
            </div>
          </div>
          <div className={styles["files-changed-header"]}>
            <p
              className={styles["files-changed-text"]}
              style={{ backgroundColor: iconPR.style.color }}
            >
              {pullRequest["changedFiles"]}
            </p>
            <p className={styles["files-changed-text-2"]}>Files Changed</p>
          </div>
        </div>
        <div className={styles["pr-down"]}>
          <div className={styles["changes-repo"]}>
            <p className={styles["parent-repo"]}>
              Repository:{" "}
              <a
                style={{ color: iconPR.style.color }}
                href={pullRequest["baseRepository"]["url"]}
              >
                {pullRequest["baseRepository"]["owner"]["login"]}/
                {pullRequest["baseRepository"]["name"]}
              </a>
            </p>
            <div className={styles["changes-files"]}>
              <p className={styles["additions-files"]}>
                <strong>{pullRequest["additions"]} + </strong>
              </p>
              <p className={styles["deletions-files"]}>
                <strong>{pullRequest["deletions"]} - </strong>
              </p>
              {mergedBy}
            </div>
          </div>
          <div className={styles["owner-img-div"]}>
            <a
              href={pullRequest["baseRepository"]["owner"]["url"]}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className={styles["owner-img"]}
                src={pullRequest["baseRepository"]["owner"]["avatarUrl"]}
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default PullRequestCard;
