import TalkCard from "../../components/talkCard/TalkCard";
import { talkSection } from "../../portfolio";
import styles from "./Talks.module.css";

const Talks = () => (
  <div className="main" id="talks">
    <div className={styles["talk-header"]}>
      <h1 className={styles["talk-header-title"]}>{talkSection.title}</h1>
      <p className={`subTitle ${styles["talk-header-subtitle"]}`}>
        {talkSection.subtitle}
      </p>
      {talkSection.talks.map((talk) => {
        return (
          <TalkCard
            talkDetails={{
              title: talk.title,
              subtitle: talk.subtitle,
              slides_url: talk.slides_url,
              event_url: talk.event_url,
              image: talk.image,
            }}
          />
        );
      })}
    </div>
  </div>
);
export default Talks;
