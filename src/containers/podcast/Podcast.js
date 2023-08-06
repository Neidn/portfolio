import { podcastSection } from "../../portfolio";
import styles from "./Podcast.module.css";

export default function Podcast() {
  return (
    <div className="main">
      <div className={styles["podcast-header"]}>
        <h1 className={styles["podcast-header-title"]}>
          {podcastSection.title}
        </h1>
        <p className={`subTitle ${styles["podcast-header-subtitle"]}`}>
          {podcastSection.subtitle}
        </p>
      </div>
      <div className={styles["podcast-main-div"]}>
        {podcastSection.podcast.map((podcastLink) => {
          return (
            <div>
              <iframe
                title="podcast"
                className="podcast"
                src={podcastLink}
                frameBorder="0"
                scrolling="no"
              ></iframe>
            </div>
          );
        })}
      </div>
    </div>
  );
}
