import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import GithubRepoCard from "../../components/githubRepoCard/GithubRepoCard";
import PublicationCard from "../../components/publicationsCard/PublicationCard";
import Button from "../../components/button/Button";
import TopButton from "../../components/topButton/TopButton";
import { Fade } from "react-reveal";
import {
  greeting,
  projectsHeader,
  publications,
  publicationsHeader,
} from "../../portfolio.js";
import ProjectsData from "../../shared/opensource/projects.json";
import ProjectsImg from "./ProjectsImg";
import styles from "./Projects.module.css";

const Projects = (props) => {
  const theme = props.theme;
  return (
    <div className={styles["projects-main"]}>
      <Header theme={theme} />
      <div className={styles["basic-projects"]}>
        <Fade bottom duration={2000} distance="40px">
          <div className={styles["projects-heading-div"]}>
            <div className={styles["projects-heading-img-div"]}>
              <ProjectsImg theme={theme} />
            </div>
            <div className={styles["projects-heading-text-div"]}>
              <h1
                className={styles["projects-heading-text"]}
                style={{ color: theme.text }}
              >
                {projectsHeader.title}
              </h1>
              <p
                className={`${styles["projects-header-detail-text"]} subTitle`}
                style={{ color: theme.secondaryText }}
              >
                {projectsHeader["description"]}
              </p>
            </div>
          </div>
        </Fade>
      </div>
      <div className={styles["repo-cards-div-main"]}>
        {ProjectsData.data.map((repo) => {
          return <GithubRepoCard repo={repo} theme={theme} />;
        })}
      </div>
      <Button
        text={"More Projects"}
        href={greeting.githubProfile}
        newTab={true}
        theme={theme}
        className={"project-button"}
      />

      {/* Publications  */}
      {/*
      {publications.data.length > 0 ? (
        <div className={styles["basic-projects"]}>
          <Fade bottom duration={2000} distance="40px">
            <div className={styles["publications-heading-div"]}>
              <div className={styles["publications-heading-text-div"]}>
                <h1
                  className={styles["publications-heading-text"]}
                  style={{ color: theme.text }}
                >
                  {publicationsHeader.title}
                </h1>
                <p
                  className={`${styles["projects-header-detail-text"]} subTitle`}
                  style={{ color: theme.secondaryText }}
                >
                  {publicationsHeader["description"]}
                </p>
              </div>
            </div>
          </Fade>
        </div>
      ) : null}

      <div className={styles["repo-cards-div-main"]}>
        {publications.data.map((pub) => {
          return <PublicationCard pub={pub} theme={theme} />;
        })}
      </div>
      */}

      <Footer theme={props.theme} onToggle={props.onToggle} />
      <TopButton theme={props.theme} />
    </div>
  );
};

export default Projects;
