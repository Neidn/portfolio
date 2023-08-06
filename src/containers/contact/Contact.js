import SocialMedia from "../../components/socialMedia/SocialMedia";
import { contactInfo } from "../../portfolio";
import styles from "./Contact.module.css";

const Contact = () => (
  <div className={`main ${styles["contact-margin-top"]}`} id="contact">
    <div className={styles["contact-div-main"]}>
      <div className={styles["contact-header"]}>
        <h1 className={`heading ${styles["contact-title"]}`}>
          {contactInfo.title}
        </h1>
        <p className={`subTitle ${styles["contact-subtitle"]}`}>
          {contactInfo.subtitle}
        </p>

        <div className={styles["contact-text-div"]}>
          <a
            className={styles["contact-detail"]}
            href={"tel:" + contactInfo.number}
          >
            {contactInfo.number}
          </a>
          <br />
          <br />
          <a
            className={styles["contact-detail-email"]}
            href={"mailto:" + contactInfo.email_address}
          >
            {contactInfo.email_address}
          </a>
          <br />
          <br />
          <SocialMedia />
        </div>
      </div>
      <div className={styles["contact-image-div"]}>
        <img
          alt="Saad Working"
          src={require("../../assests/images/contactMail.png")}
        ></img>
      </div>
    </div>
  </div>
);

export default Contact;
