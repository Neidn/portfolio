import React from "react";
import styles from "./Achievement.module.css";
import AchievementCard from "../../components/achievementCard/AchievementCard";
import { achievementSection } from "../../portfolio";

const Achievement = () => {
  return (
    <div className="main" id="achievements">
      <div className={styles["achievement-main-div"]}>
        <div className={styles["achievement-header"]}>
          <h1 className={styles["achievement-heading"] + " heading"}>
            {achievementSection.title}
          </h1>
          <p className={styles['achievement-subtitle'] + " subtitle"}>
            {achievementSection.subtitle}
          </p>
        </div>
        <div className={styles['achievement-cards-div']}>
          {achievementSection.achivementsCards.map((card) => {
            return (
              <AchievementCard
                cardInfo={{
                  title: card.title,
                  description: card.subtitle,
                  image: card.image,
                  footer: card.footerLink,
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Achievement;
