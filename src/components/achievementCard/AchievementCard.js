import styles from "./AchievementCard.module.css";

const AchievementCard = ({ cardInfo }) => {
  const openUrlInNewTab = (url) => {
    const win = window.open(url, "_blank");
    win.focus();
  };

  return (
    <div className={styles['certificate-card']}>
      <div className={styles['certificate-image-div']}>
        <img src={cardInfo.image} alt="PWA" className={styles['card-image']}></img>
      </div>
      <div className={styles['certificate-detail-div']}>
        <h5 className={styles['card-title']}>{cardInfo.title}</h5>
        <p className={styles['card-subtitle']}>{cardInfo.description}</p>
      </div>
      <div className={styles['certificate-card-footer']}>
        {cardInfo.footer.map((v, i) => {
          return <p onClick={() => openUrlInNewTab(v.url)}>{v.name}</p>;
        })}
      </div>
    </div>
  );
};

export default AchievementCard;
