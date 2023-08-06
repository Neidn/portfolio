import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import BlogsImg from "./BlogsImg";
import AddressImg from "./AddressImg";
import { Fade } from "react-reveal";
import { contactPageData, greeting } from "../../portfolio.js";
import styles from "./ContactComponent.module.css";

const ContactData = contactPageData.contactSection;
const blogSection = contactPageData.blogSection;
const addressSection = contactPageData.addressSection;
const phoneSection = contactPageData.phoneSection;

const Contact = (props) => {
  const theme = props.theme;
  return (
    <div className={styles["contact-main"]}>
      <Header theme={theme} />
      <div className={styles["basic-contact"]}>
        <Fade bottom duration={1000} distance="40px">
          <div className={styles["contact-heading-div"]}>
            <div className={styles["contact-heading-img-div"]}>
              <img
                src={require(`../../assests/images/${ContactData["profile_image_path"]}`)}
                alt=""
              />
            </div>
            <div className={styles["contact-heading-text-div"]}>
              <h1
                className={styles["contact-heading-text"]}
                style={{ color: theme.text }}
              >
                {ContactData["title"]}
              </h1>
              <p
                className={`${styles["contact-header-detail-text"]} subTitle`}
                style={{ color: theme.secondaryText }}
              >
                {ContactData["description"]}
              </p>
              <SocialMedia theme={theme} />
              <div className={styles["resume-btn-div"]}>
                <Button
                  text="See My Resume"
                  newTab={true}
                  href={greeting.resumeLink}
                  theme={theme}
                />
              </div>
            </div>
          </div>
        </Fade>
        {/*
        <Fade bottom duration={1000} distance="40px">
          <div className={styles["blog-heading-div"]}>
            <div className={styles["blog-heading-text-div"]}>
              <h1
                className={styles["blog-heading-text"]}
                style={{ color: theme.text }}
              >
                {blogSection["title"]}
              </h1>
              <p
                className={`${styles["blog-header-detail-text"]} subTitle`}
                style={{ color: theme.secondaryText }}
              >
                {blogSection["subtitle"]}
              </p>
              <div className={styles["blogsite-btn-div"]}>
                <Button
                  text="Visit My Blogsite"
                  newTab={true}
                  href={blogSection.link}
                  theme={theme}
                />
              </div>
            </div>
            <div className={styles["blog-heading-img-div"]}>
              <BlogsImg theme={theme} />
            </div>
          </div>
        </Fade>
        */}
        <Fade bottom duration={1000} distance="40px">
          <div className={styles["address-heading-div"]}>
            <div className={styles["contact-heading-img-div"]}>
              {/* <img
											src={require(`../../assests/images/${addressSection["avatar_image_path"]}`)}
											alt=""
										/> */}
              <AddressImg theme={theme} />
            </div>
            <div className={styles["address-heading-text-div"]}>
              <h1
                className={styles["address-heading-text"]}
                style={{ color: theme.text }}
              >
                {addressSection["title"]}
              </h1>
              <p
                className={`${styles["contact-header-detail-text"]} subTitle`}
                style={{ color: theme.secondaryText }}
              >
                {addressSection["subtitle"]}
              </p>
              <h1
                className={styles["address-heading-text"]}
                style={{ color: theme.text }}
              >
                {phoneSection["title"]}
              </h1>
              <p
                className={`${styles["contact-header-detail-text"]} subTitle`}
                style={{ color: theme.secondaryText }}
              >
                {phoneSection["subtitle"]}
              </p>
              <div className={styles["address-btn-div"]}>
                <Button
                  text="Visit on Google Maps"
                  newTab={true}
                  href={addressSection.location_map_link}
                  theme={theme}
                />
              </div>
            </div>
          </div>
        </Fade>
      </div>
      <Footer theme={props.theme} onToggle={props.onToggle} />
      <TopButton theme={props.theme} />
    </div>
  );
};

export default Contact;
