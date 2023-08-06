import styles from "./TalkCard.module.css";

const TalkCard = ({ talkDetails }) => (
  <div>
    <div className={styles["container"]}>
      <div className={styles["rectangle"]}>
        <div className={styles["diagonal-fill"]}></div>
        <div className={styles["talk-card-title"]}>{talkDetails.title}</div>
        <p className={styles["talk-card-subtitle"]}>{talkDetails.subtitle}</p>

        <div className={styles["card-footer-button-div"]}>
          <a
            href={talkDetails.slides_url}
            target="_"
            className={styles["talk-button"]}
          >
            Slides
          </a>
          <a
            href={talkDetails.event_url}
            target="_"
            className={styles["talk-button"]}
          >
            Event
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default TalkCard;
