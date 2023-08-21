import { useState, useEffect } from "react";
import ApolloClient from "apollo-boost";
import { gql } from "apollo-boost";
import GithubRepoCard from "../../components/githubRepoCard/GithubRepoCard";
import Button from "../../components/button/Button";
import { openSource } from "../../portfolio";
import { greeting } from "../../portfolio.js";
import styles from "./Project.module.css";

const Projects = (props) => {
  const [repo, setRepo] = useState([]);

  const setRepoFunction = (array) => {
    setRepo(array);
  };

  const getRepoData = () => {
    const client = new ApolloClient({
      uri: "https://api.github.com/graphql",
      request: (operation) => {
        operation.setContext({
          headers: {
            authorization: `Bearer ${atob(openSource.githubConvertedToken)}`,
          },
        });
      },
    });

    client
      .query({
        query: gql`
          {
              repositoryOwner(login: "${openSource.githubUserName}") {
                  ... on User {
                      pinnedRepositories(first: 6) {
                          edges {
                              node {
                                  nameWithOwner
                                  description
                                  forkCount
                                  stargazers {
                                      totalCount
                                  }
                                  url
                                  id
                                  diskUsage
                                  primaryLanguage {
                                      name
                                      color
                                  }
                              }
                          }
                      }
                  }
              }
          }
      `,
      })
      .then((result) => {
        setRepoFunction(result.data.repositoryOwner.pinnedRepositories.edges);
      });
  };

  useEffect(() => {
    getRepoData();
  }, []);

  return (
    <div className="main" id="opensource">
      <h1 className={styles["project-title"]}>Open Source Projects</h1>
      <div className={styles["repo-cards-div-main"]}>
        {repo.map((v, i) => {
          return <GithubRepoCard repo={v} key={v.node.id} />;
        })}
      </div>
      <Button
        text={"More Projects"}
        className={"portfolio-repo-btn"}
        href={greeting.githubProfile}
        newTab={true}
      />
    </div>
  );
};
export default Projects;
