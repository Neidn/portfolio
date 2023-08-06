import { bigProjects } from "../../portfolio";

import styles from "./StartupProjects.module.css";

const StartupProject = () => {
  const openProjectInNewWindow = (url) => {
    const win = window.open(url, "_blank");
    win.focus();
  };

  return (
    <div className={"main"} id="projects">
      <div>
        <h1 className={styles["skills-heading"]}>{bigProjects.title}</h1>
        <p className={`subTitle ${styles["project-subtitle"]}`}>
          {bigProjects.subtitle}
        </p>
        <div className={styles["startup-projects-main"]}>
          <div className={styles["startup-project-text"]}>
            {bigProjects.projects.map((project) => {
              return (
                <div
                  className={styles["saaya-health-div"]}
                  onClick={() => openProjectInNewWindow(project.link)}
                >
                  <img alt="Saad Working" src={project.image}></img>
                </div>
              );
            })}
          </div>
          <div className={styles["starup-project-image"]}></div>
        </div>
      </div>
    </div>
  );
};
export default StartupProject;
