import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { Fade } from "react-reveal";
import styles from "./IssueCard.module.css";

const popover = (name) => (
  <Tooltip id={`tooltip-top`}>
    <strong>{`Assigned to ${name}`}</strong>
  </Tooltip>
);

const IssueCard = props => {
  const issue = props.issue;
  let iconPR;
  let bgColor;
  if (issue["closed"] === false) {
    iconPR = {
      iconifyClass: "octicon:issue-opened",
      style: { color: "#28a745" },
    };
    bgColor = "#dcffe4";
  } else {
    iconPR = {
      iconifyClass: "octicon:issue-closed",
      style: { color: "#d73a49" },
    };
    bgColor = "#ffdce0";
  }

  const subtitleString =
    "#" + issue["number"] + " opened on " + issue["createdAt"].split("T")[0];
  let assignee;
  if (issue["assignees"]["nodes"].length > 0) {
    const name = issue["assignees"]["nodes"][0]["name"];
    assignee = (
      <OverlayTrigger
        key={name}
        placement={"top"}
        style={{ marginBottom: "5px" }}
        overlay={popover(name)}
      >
        <a
          href={issue["assignees"]["nodes"][0]["url"]}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className={styles["assigned-to-img"]}
            src={issue["assignees"]["nodes"][0]["avatarUrl"]}
            alt=""
          />
        </a>
      </OverlayTrigger>
    );
  } else {
    assignee = <noscript></noscript>;
  }

  return (
    <Fade bottom duration={2000} distance="40px">
      <div
        className="issue-card"
        style={{
          backgroundColor: bgColor,
          border: `1px solid ${iconPR.style.color}`,
        }}
      >
        <div className={styles["issue-top"]}>
          <div className={styles["issue-header"]}>
            <span
              className={`${styles["iconify"]} ${styles["issue-icons"]}`}
              data-icon={iconPR.iconifyClass}
              style={iconPR.style}
              data-inline="false"
            ></span>
            <div className={styles["issue-title-header"]}>
              <p className={styles["issue-title"]}>
                <a
                  href={issue["url"]}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {issue["title"]}
                </a>
              </p>
              <p className={styles["issue-subtitle"]}>{subtitleString}</p>
            </div>
          </div>
          {/* <div className="files-changed-header">
							<p
								className="files-changed-text"
								style={{ backgroundColor: iconPR.style.color }}
							>
								{pullRequest["changedFiles"]}
							</p>
							<p className="files-changed-text-2">Files Changed</p>
						</div> */}
        </div>
        <div className={styles["issue-down"]}>
          <div className={styles["assignee-repo"]}>
            <p className={styles["parent-repo"]}>
              Repository:{" "}
              <a
                style={{ color: iconPR.style.color }}
                href={issue["repository"]["url"]}
              >
                {issue["repository"]["owner"]["login"]}/
                {issue["repository"]["name"]}
              </a>
            </p>
            <div className={styles["assignee-info"]}>
              {/* <p className="additions-files">
									<strong>{pullRequest["additions"]} + </strong>
								</p>
								<p className="deletions-files">
									<strong>{pullRequest["deletions"]} - </strong>
								</p> */}
              {assignee}
            </div>
          </div>
          <div className={styles["owner-img-div"]}>
            <a
              href={issue["repository"]["owner"]["url"]}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className={styles["owner-img"]}
                src={issue["repository"]["owner"]["avatarUrl"]}
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default IssueCard;
